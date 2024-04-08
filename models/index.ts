import sequelize from "@/config/db";
import { DataTypes } from "sequelize";

import UrlModel from "@/models/Url";

const models = {
  Url: UrlModel(sequelize, DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

export default models;
