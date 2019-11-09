import Sequelize from "sequelize";
import { sequelize } from "./model";
import { ProductPostgreSql } from "./products";
import { from } from "apollo-link";
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
      type: Sequelize.DATE,
      validate: { isDate: true }
    },
    value: {
      allowNull: false,
      type: Sequelize.FLOAT,
      validate: { isNumeric: true }
    },
    product: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      validate: {
        isNumeric: true
      }
    }
  },
  { sequelize, timestamps: false, modelName: "costs" }
);

export { Cost as CostPostgreSql };
