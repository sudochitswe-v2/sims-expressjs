import { Router } from "express";
import gradesRouterV2 from "./routes/grades.mjs"
const router = Router();

router.use(gradesRouterV2);

export default router;