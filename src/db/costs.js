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
    date: {
      allowNull: false,
      type: "TIMESTAMP",
      validate: { isNumeric: true }
    },
    value: {
      allowNull: false,
      type: Sequelize.FLOAT,
      validate: { isNumeric: true }
    }
  },
  { sequelize, timestamps: false, modelName: "costs" }
);

export { Cost as CostPostgreSql };
