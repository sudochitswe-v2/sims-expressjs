import { DataTypes } from "sequelize";
export default {
    CreatedBy: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CreatedAt: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ModifiedBy: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ModifiedAt: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    IsDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}