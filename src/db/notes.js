import Sequelize from "sequelize";
import { sequelize } from "./model";
import { Client } from "./clients";
import { Employee } from "./employees";

class Note extends Sequelize.Model {}
Note.init(
  {
    id: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    date: { allowNull: false, type: "TIMESTAMP" },
    idClient: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      references: {
        model: Client,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    idEmployee: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      references: {
        model: Employee,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    }
  },
  { sequelize, timestamps: false, modelName: "notes" }
);

export { Note };
