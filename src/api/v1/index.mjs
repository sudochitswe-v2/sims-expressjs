import { Router } from "express";
import gradesRouter from "./routes/grades.mjs";
const router = Router();
router.use(gradesRouter);

export default router;