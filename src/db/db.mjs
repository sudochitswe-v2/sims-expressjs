import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const { DB_INSTANCE, DB_HOST, DB_CONNECT, DB_USER, DB_PW, DB_PORT } = process.env;

const configs = {
    dialect: "mssql",
    host: DB_HOST,
    port: DB_PORT,
    dialectOptions: {
        options: {
            instanceName: DB_INSTANCE,
            encrypt: true,
        }
    }
};
const createConnection = () => new Sequelize(DB_CONNECT, DB_USER, DB_PW, configs);
export { createConnection };


