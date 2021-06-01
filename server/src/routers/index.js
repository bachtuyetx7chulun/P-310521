import { Router } from "express";
import youtubeRouter from "./youtube.router.js";
import githubRouter from "./github.router.js";

const router = Router();
router.use("/youtube", youtubeRouter);
router.use("/github", githubRouter);

export default router;
