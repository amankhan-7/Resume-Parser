import { Router } from "express";
import extractTextFromPDF from "../services/textExtractionService.js";
import textParser from "../services/googleGeminiService.js";
import saveResumeToDB from "../services/save2DB.js";

const router = Router();

router.post("/", async (req, res) => {
  const fileData = req.files?.inputFile?.data;

  try {
    if (!fileData) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // extract text from pdf
    const text = await extractTextFromPDF(fileData);

    // gemini parsing
    const parsedText = await textParser(text);

    // save to database
    const savedResume = await saveResumeToDB(parsedText);

    return res.status(200).json({
      success: true,
      message: "Resume parsed and saved",
      parsedData: parsedText,
      savedData: savedResume,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Parsing failed!",
      error: error.message,
    });
  }
});

export default router;
