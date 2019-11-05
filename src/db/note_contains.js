import Sequelize from "sequelize";
import { Note } from "./notes";
import { Product } from "./products";
import { Unit } from "./units";

import { sequelize } from "./model";

class NoteContain extends Sequelize.Model {}
NoteContain.init(
  {
    id: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    quantity: { allowNull: false, type: Sequelize.FLOAT },
    idUnit: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      references: {
        model: Unit,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    idProduct: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      references: {
        model: Product,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    idNote: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      references: {
        model: Note,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    }
  },
  { sequelize, timestamps: false, modelName: "note_contains" }
);

export { NoteContain };
