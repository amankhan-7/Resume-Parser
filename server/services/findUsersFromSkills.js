import supabase from "../db/supabase.js";

const normalizeSkill = (skill) =>
  skill.toLowerCase().replace(/[^a-z0-9]/g, "");

const getUsersBySkills = async (req, res) => {
  try {
    const { skills } = req.query;

    if (!skills?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Skills query is required",
      });
    }

    // nextjs,node → ["nextjs", "node"]
    const searchSkills = skills
      .split(",")
      .map((skill) => normalizeSkill(skill.trim()))
      .filter(Boolean);

    const { data, error } = await supabase
      .from("resumes")
      .select("name, email, skills");

    if (error) throw error;

    const matchedUsers = data.filter((user) => {
      const userSkills =
        user.skills?.map((skill) =>
          normalizeSkill(skill)
        ) || [];

      return searchSkills.some((searchSkill) =>
        userSkills.some((skill) =>
          skill.includes(searchSkill)
        )
      );
    });

    return res.status(200).json({
      success: true,
      count: matchedUsers.length,
      users: matchedUsers,
    });
  } catch (error) {
    console.error("Skill search error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export default getUsersBySkills;