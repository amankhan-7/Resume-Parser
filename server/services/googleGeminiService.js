import model from "./gemini.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const referenceFile = fs.readFileSync(
  path.join(__dirname, "../reference.json"),
  "utf8"
);

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const textParser = async (textInput) => {
  const prompt = `
Parse the following resume into valid JSON.

Rules:
- Follow this schema exactly:
${referenceFile}

- Put null for missing fields
- Return ONLY valid JSON
- No markdown
- No backticks
- No explanations
- Convert LinkedIn/GitHub usernames into full URLs
- Extract technologies if inferable

Resume:
${textInput}
`;

  const maxRetries = 3;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await model.generateContent(prompt);

      const text = result.response.text();

      return JSON.parse(text);
    } catch (error) {
      console.log(
        `Gemini attempt ${attempt} failed:`,
        error.message
      );

      if (error.status === 503 && attempt < maxRetries) {
        await sleep(3000);
        continue;
      }

      throw error;
    }
  }
};

export default textParser;