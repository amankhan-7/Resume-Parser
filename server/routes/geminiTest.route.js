import { Router } from "express";

import testGeminiAPI from "../services/test.js";

const router = Router();

router.get("/", testGeminiAPI);

export default router;