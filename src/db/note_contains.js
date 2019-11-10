import Sequelize from "sequelize";
import { Note } from "./notes";
import { Product } from "./products";
import { Unit } from "./units";

class NoteContain extends Sequelize.Model {
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
        quantity: {
          allowNull: false,
          type: Sequelize.FLOAT,
          validate: { isNumeric: true }
        },
        product: {
          allowNull: false,
          type: Sequelize.RANGE(Sequelize.BIGINT),
          references: {
            model: Product,
            key: "id",
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          },
          validate: { isNumeric: true }
        },
        note: {
          allowNull: false,
          type: Sequelize.RANGE(Sequelize.BIGINT),
          references: {
            model: Note,
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

export { NoteContain as NoteContainPostgreSql };
