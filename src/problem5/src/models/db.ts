import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASS!,
  {
    host: process.env.DB_HOST_SQLITE,
    dialect: "sqlite", // Change to "postgresql" if PostgreSQL will be used
    logging: false,
  }
);

export default sequelize;
