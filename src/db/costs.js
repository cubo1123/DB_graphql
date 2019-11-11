import Sequelize from "sequelize";
import { ProductPostgreSql } from "./products";
class Cost extends Sequelize.Model {
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
          type: Sequelize.DATE,
          validate: { isDate: true }
        },
        value: {
          allowNull: false,
          type: Sequelize.FLOAT,
          validate: { isNumeric: true }
        },
        product: {
          allowNull: false,
          type: Sequelize.RANGE(Sequelize.BIGINT),
          validate: {
            isNumeric: true
          }
        }
      },
      { sequelize, timestamps: false }
    );
  }

  static associate({ models }) {
    this.belongsTo(models.Product, { foreignKey: "id" });
  }
}

export { Cost as CostPostgreSql };
