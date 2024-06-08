import { Sequelize } from "sequelize";
import "dotenv/config";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: 3306,
  dialect: "mysql",
});

async function connectToDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully.");
  } catch (error) {
    console.log(`Unable to connect to the database: ${error.message}`);
  }
}

async function disconnectFromDB() {
  try {
    await sequelize.close();
    console.log("Connection to the database has been closed successfully.");
  } catch (error) {
    console.log(`Error closing the connection: ${error.message}`);
  }
}

async function syncModels() {
  try {
    await sequelize.sync({ alter: true });
    console.log("Models have been synchronized successfully.");
  } catch (error) {
    console.log(`Error synchronizing models: ${error.message}`);
  }
}

export { connectToDB, disconnectFromDB, syncModels };
export default sequelize;
