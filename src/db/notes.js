import Sequelize from "sequelize";
import { Client } from "./clients";
import { Employee } from "./employees";

class Note extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          allowNull: false,
          type: Sequelize.RANGE(Sequelize.BIGINT),
          primaryKey: true,
          unique: true,
          autoIncrement: true
        },
        date: {
          allowNull: true,
          type: Sequelize.DATE
        },
        client: {
          allowNull: false,
          type: Sequelize.RANGE(Sequelize.BIGINT),
          references: {
            model: Client,
            key: "id",
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          },
          validate: { isNumeric: true }
        },
        employee: {
          allowNull: false,
          type: Sequelize.RANGE(Sequelize.BIGINT),
          references: {
            model: Employee,
            key: "id",
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          },
          validate: { isNumeric: true }
        }
      },
      { sequelize, timestamps: false }
    );
  }
}

export { Note as NotePostgreSql };
