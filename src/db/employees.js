import Sequelize from "sequelize";
import { sequelize } from "./model";
import { TypeEmployee } from "./type_employees";
import { Schedule } from "./schedules";

class Employee extends Sequelize.Model {}
Employee.init(
  {
    id: {
      type: Sequelize.RANGE(Sequelize.BIGINT),
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    name: {
      unique: true,
      type: Sequelize.STRING(30),
      validate: { isAlpha: true, notEmpty: true }
    },
    lastName: {
      unique: true,
      type: Sequelize.STRING(50),
      validate: { isAlpha: true, notEmpty: true }
    },
    address: {
      unique: true,
      type: Sequelize.STRING(100),
      validate: { notEmpty: true, isAlpha: true }
    },
    idTypeEmployee: {
      unique: true,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      references: {
        model: TypeEmployee,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      },
      validate: { isNumeric: true }
    },
    idSchedule: {
      unique: true,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      references: {
        model: Schedule,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      },
      validate: { isNumeric: true }
    },
    startDate: {
      unique: true,
      type: "TIMESTAMP",
      validate: { isNumeric: true }
    },
    status: {
      unique: true,
      type: Sequelize.STRING(30),
      validate: { isAlpha: true, notEmpty: true }
    },
    salary: {
      unique: true,
      type: Sequelize.FLOAT,
      validate: { isNumeric: true }
    },
    endDate: { unique: true, type: "TIMESTAMP", validate: { isNumeric: true } }
  },
  { sequelize, timestamps: false, modelName: "employees" }
);

export { Employee };
