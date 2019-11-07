import Sequelize from "sequelize";
import { sequelize } from "./model";

class Unit extends Sequelize.Model {}
Unit.init(
  {
    id: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING(30),
      validate: { isAlpha: true, notEmpty: true }
    }
  },
  { sequelize, timestamps: false, modelName: "units" }
);

export { Unit as UnitPostgreSql };
