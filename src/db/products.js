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
    name: {
      allowNull: false,
      type: Sequelize.STRING(30),
      validate: { isAlpha: true, notEmpty: true }
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING(30),
      validate: { isAlpha: true, notEmpty: true }
    },
    onStock: {
      allowNull: false,
      type: Sequelize.FLOAT,
      validate: { isNumeric: true }
    },
    idCost: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      references: {
        model: Cost,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      },
      validate: { isNumeric: true }
    },
    idPrice: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      references: {
        model: Price,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      },
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
  { sequelize, timestamps: false, modelName: "products" }
);

export { Product as ProductPostgreSql };
