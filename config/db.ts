import { Sequelize } from "sequelize";
import logger from "@/utils/logger";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/url.db",
});

sequelize
  .authenticate()
  .then(() => logger.info("Connection has been established successfully."))
  .catch((error) => logger.fatal("Unable to connect to the database:", error));

export default sequelize;
