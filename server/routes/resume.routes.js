import express from "express";
import getUsersBySkills from "../services/findUsersFromSkills.js";

const router = express.Router();

router.get("/skills", getUsersBySkills);

export default router;