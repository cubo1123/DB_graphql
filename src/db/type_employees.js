import Sequelize from "sequelize";
import { sequelize } from "./model";

class TypeEmployee extends Sequelize.Model {}
TypeEmployee.init(
  {
    id: {
      type: Sequelize.RANGE(Sequelize.BIGINT),
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    description: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    job: {
      type: Sequelize.STRING(30),
      allowNull: false
    }
  },
  { sequelize, timestamps: false, modelName: "type_employees" }
);

export { TypeEmployee };
