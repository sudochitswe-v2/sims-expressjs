import { Router } from "express";
import { asyncErrorHandle } from "../../../middleware/asyncErrorHandle.mjs"
import { createGrade, deleteGrade, getGrades, updateGrade } from "../controllers/gradesController.mjs"



const router = Router();
const endPoint = "/api/grades";
router
    .get(endPoint, asyncErrorHandle(getGrades))
    .post(endPoint, asyncErrorHandle(createGrade))
    .put(`${endPoint}/:id`, asyncErrorHandle(updateGrade))
    .delete(`${endPoint}/:id`, asyncErrorHandle(deleteGrade))

export default router;