import { Model, DataTypes } from "sequelize";
import baseModel from "./base.mjs";
import { createConnection } from "../db.mjs";

export class Grade extends Model {
}
Grade.init(
    {
        GradeId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            autoIncrement: true,
            primaryKey: true,
        },
        GradeName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ...baseModel
    },
    {
        sequelize: createConnection(),
        tableName: "tbl_Grade",
        createdAt: false,
        updatedAt: false,
    }

);