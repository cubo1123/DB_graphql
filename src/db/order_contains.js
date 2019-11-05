import Sequelize from "sequelize";
import { sequelize } from "./model";
import { Unit } from "./units";
import { Product } from "./products";
import { Order } from "./orders";

class OrderContain extends Sequelize.Model {}
OrderContain.init(
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
    idOrder: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      references: {
        model: Order,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    }
  },
  { sequelize, timestamps: false, modelName: "order_contains" }
);

export { OrderContain };
