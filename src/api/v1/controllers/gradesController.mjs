
import { Grade } from "../../../db/models/grade.mjs";
import { createStamp, makeIsDeleted, updateStamp } from "../../../utils/stampUtils.mjs";
import { defaultDbFilter } from "../../../utils/dbFilterUtils.mjs";

const getGrades = async (request, response, _) => {
    const { query } = request;
    const where = { where: { ...defaultDbFilter() } };
    const grades = await Grade.findAll(where);
    response.status(200).json(grades);
}
const createGrade = async (request, response, _) => {
    const { body } = request;
    const model = createStamp(body);
    const data = new Grade(model);
    const res = await data.save();
    response.status(201).json(res);
}

const updateGrade = async (request, response, _) => {
    const { body, params } = request;
    const gradeId = parseInt(params.id);
    const grade = await Grade.findOne({ where: { GradeId: gradeId } });
    const data = updateStamp(grade.dataValues);
    grade.dataValues = { ...data, ...body };
    const updateModel = await grade.save();
    const res = await Grade.update(updateModel.dataValues, { where: { GradeId: gradeId } });
    response.status(200).json(updateModel);
}

const deleteGrade = async (request, response, _) => {
    const { params } = request;
    const gradeId = parseInt(params.id);
    const grade = await Grade.findOne({ where: { GradeId: gradeId } });
    const data = makeIsDeleted(grade.dataValues);
    grade.dataValues = { ...data };
    const updateModel = await grade.save();
    const res = await Grade.update(updateModel.dataValues, { where: { GradeId: gradeId } });
    response.status(200).json(updateModel);
}
export { getGrades, createGrade, updateGrade, deleteGrade };