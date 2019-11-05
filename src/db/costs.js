import Sequelize from "sequelize";
import { sequelize } from "./model";

class Cost extends Sequelize.Model {}
Cost.init(
  {
    id: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    date: { allowNull: false, type: "TIMESTAMP" },
    value: { allowNull: false, type: Sequelize.FLOAT }
  },
  { sequelize, timestamps: false, modelName: "costs" }
);

export { Cost };
