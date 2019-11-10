import Sequelize from "sequelize";
import { ProviderPostgreSql } from "./providers";
import { UnitPostgreSql } from "./units";
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
      { sequelize, timestamps: false, modelName: "products" }
    );
  }
}

export { Product as ProductPostgreSql };
