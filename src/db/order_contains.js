import Sequelize from "sequelize";
import { Product } from "./products";
import { Order } from "./orders";

class OrderContain extends Sequelize.Model {
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
        belongTo: {
          allowNull: false,
          type: Sequelize.RANGE(Sequelize.BIGINT),
          references: {
            model: Order,
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

export { OrderContain as OrderContainPostgreSql };
