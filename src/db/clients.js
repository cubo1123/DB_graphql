import Sequelize from "sequelize";
import { sequelize } from "./model";

class Client extends Sequelize.Model {}
Client.init(
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
      type: Sequelize.STRING(50),
      validate: { isAlpha: true, notEmpty: true }
    },
    lastName: {
      allowNull: false,
      type: Sequelize.STRING(50),
      validate: { isAlpha: true, notEmpty: true }
    },
    address: {
      allowNull: false,
      type: Sequelize.STRING(100),
      validate: { isAlphanumeric: true }
    },
    telephone: {
      allowNull: false,
      type: Sequelize.STRING(30),
      validate: { notEmpty: true, isAlphanumeric: true }
    },
    creditAvailable: {
      allowNull: false,
      type: Sequelize.FLOAT,
      validate: { isNumeric: true }
    },
    creditUsed: {
      allowNull: false,
      type: Sequelize.FLOAT,
      validate: { isNumeric: true }
    }
  },
  { sequelize, timestamps: false, modelName: "clients" }
);

export { Client as ClientPostgreSql };
