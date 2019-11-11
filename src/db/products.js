import Sequelize from "sequelize";
import { ProviderPostgreSql } from "./providers";
import { UnitPostgreSql } from "./units";
import { CostPostgreSql } from "./costs";
import { PricePostgreSql } from "./prices";
class Product extends Sequelize.Model {
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
        provider: {
          allowNull: false,
          type: Sequelize.RANGE(Sequelize.BIGINT),
          validate: { isNumeric: true }
        },
        unit: {
          allowNull: false,
          type: Sequelize.RANGE(Sequelize.BIGINT),
          validate: { isNumeric: true }
        }
      },
      { sequelize, timestamps: false }
    );
  }

  static associate({ models }) {
    this.belongsTo(models.Unit, { foreignKey: "id" });
    this.belongsTo(models.Provider, { foreignKey: "id" });
    this.hasMany(models.Cost, { foreignKey: "product" });
    this.hasMany(models.Price, { foreignKey: "product" });
  }
}

export { Product as ProductPostgreSql };
