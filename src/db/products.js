import Sequelize from "sequelize";
import { sequelize } from "./model";
import { Cost } from "./costs";
import { Price } from "./prices";
import { Provider } from "./providers";
class Product extends Sequelize.Model {}
Product.init(
  {
    id: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    name: { allowNull: false, type: Sequelize.STRING(30) },
    description: { allowNull: false, type: Sequelize.STRING(30) },
    onStock: { allowNull: false, type: Sequelize.FLOAT },
    idCost: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      references: {
        model: Cost,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    idPrice: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      references: {
        model: Price,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    idProvider: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      references: {
        model: Provider,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    }
  },
  { sequelize, timestamps: false, modelName: "products" }
);

export { Product };
