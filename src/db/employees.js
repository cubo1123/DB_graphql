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
    name: { unique: true, type: Sequelize.STRING(30) },
    lastName: { unique: true, type: Sequelize.STRING(50) },
    address: { unique: true, type: Sequelize.STRING(100) },
    idTypeEmployee: {
      unique: true,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      references: {
        model: TypeEmployee,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    idSchedule: {
      unique: true,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      references: {
        model: Schedule,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    startDate: { unique: true, type: "TIMESTAMP" },
    status: { unique: true, type: Sequelize.STRING(30) },
    salary: { unique: true, type: Sequelize.FLOAT },
    endDate: { unique: true, type: "TIMESTAMP" }
  },
  { sequelize, timestamps: false, modelName: "employees" }
);

export { Employee };
