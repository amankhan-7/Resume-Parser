import "dotenv/config";
import express from "express";
import cors from "cors";
import upload from "express-fileupload";

import parserRoutes from "./routes/parser.route.js"
import testRoute from "./routes/geminiTest.route.js";
import getUser from "./routes/resume.routes.js"

const app = express();

app.use(express.json());
app.use(cors());
app.use(upload());

app.use("/llm-api-test", testRoute);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "server is running",
  });
});

app.use("/", parserRoutes);
app.use("/browse", getUser)

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
