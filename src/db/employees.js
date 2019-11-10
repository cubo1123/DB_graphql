import Sequelize from "sequelize";
import { TypeEmployee } from "./type_employees";
import { Schedule } from "./schedules";

class Employee extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
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
          validate: { is: /^[a-zA-Z\s]*$/i, notEmpty: true }
        },
        lastName: {
          unique: true,
          type: Sequelize.STRING(50),
          validate: { is: /^[a-zA-Z\s]*$/i, notEmpty: true }
        },
        address: {
          unique: true,
          type: Sequelize.STRING(100),
          validate: { notEmpty: true, is: /^[A-Za-z0-9\s]+$/g }
        },
        typeEmployee: {
          unique: true,
          type: Sequelize.RANGE(Sequelize.BIGINT),
          references: {
            model: TypeEmployee,
            key: "id",
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          },
          validate: { isNumeric: true, notEmpty: true }
        },
        schedule: {
          unique: true,
          type: Sequelize.RANGE(Sequelize.BIGINT),
          references: {
            model: Schedule,
            key: "id",
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          },
          validate: { isNumeric: true, notEmpty: true }
        },
        startDate: {
          unique: true,
          type: "TIMESTAMP",
          validate: { isDate: true, notEmpty: true }
        },
        status: {
          unique: true,
          type: Sequelize.STRING(30),
          validate: { isAlpha: true, notEmpty: true }
        },
        salary: {
          unique: true,
          type: Sequelize.FLOAT,
          validate: { isNumeric: true, notEmpty: true }
        },
        endDate: {
          unique: true,
          type: "TIMESTAMP",
          validate: { isDate: true, notEmpty: true }
        }
      },
      { sequelize, timestamps: false }
    );
  }
}
export { Employee as EmployeePostgreSql };
