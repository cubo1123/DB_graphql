import Sequelize from "sequelize";
import { Provider } from "./providers";

class Order extends Sequelize.Model {
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
        createdAt: {
          allowNull: true,
          type: Sequelize.DATE
        },
        arrivedAt: {
          type: Sequelize.DATE
        },
        provider: {
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
      { sequelize, timestamps: false }
    );
  }
}

export { Order as OrderPostgreSql };
