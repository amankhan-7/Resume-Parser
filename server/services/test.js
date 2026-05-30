import model from "./gemini.js";

const testGeminiAPI = async (req, res) => {
  try {
    const result = await model.generateContent(
      "Say hello in one short sentence."
    );

    const text = result.response.text();

    return res.status(200).json({
      success: true,
      response: text,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Gemini API failed",
      error: error.message,
    });
  }
};

export default testGeminiAPI;