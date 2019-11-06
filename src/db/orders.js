import Sequelize from "sequelize";
import { sequelize } from "./model";
import { Provider } from "./providers";

class Order extends Sequelize.Model {}
Order.init(
  {
    id: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    createdAt: {
      allowNull: false,
      type: "TIMESTAMP",
      validate: { isNumeric: true }
    },
    arrivedAt: {
      allowNull: false,
      type: "TIMESTAMP",
      validate: { isNumeric: true }
    },
    idProvider: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      references: {
        model: Provider,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      },
      validate: { isNumeric: true }
    }
  },
  { sequelize, timestamps: false, modelName: "orders" }
);

export { Order };
