import supabase from "../db/supabase.js";

const saveResumeToDB = async (parsedText) => {
  try {
    const {
      personalInfo = {},
      education = [],
      workExperience = [],
      skills = [],
      certifications = [],
    } = parsedText;

    const websites = personalInfo.websites || {};

    const resumePayload = {
      name: personalInfo.name || null,
      email: personalInfo.email || null,
      phone: personalInfo.phone || null,

      linkedin_url: websites.LinkedIn || null,
      github_url: websites.GitHub || null,

      education,
      work_experience: workExperience,
      skills,
      certifications,
    };

    const { data, error } = await supabase
      .from("resumes")
      .insert([resumePayload])
      .select();

    if (error) throw error;

    return data;
  } catch (error) {
    console.log("DB Save Error:", error);
    throw error;
  }
};

export default saveResumeToDB;