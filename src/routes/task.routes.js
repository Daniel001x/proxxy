import express from "express";
import { verifyToken } from "../middleware/auth.middleware.js";
import { createTask, getOpenTasks, acceptTask } from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", verifyToken, createTask);
router.get("/", verifyToken, getOpenTasks);
router.put("/:id/accept", verifyToken, acceptTask);

export default router;
