import Sequelize from "sequelize";

class Price extends Sequelize.Model {
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
        value: {
          allowNull: false,
          type: Sequelize.FLOAT,
          validate: { isNumeric: true }
        },
        date: {
          allowNull: true,
          type: Sequelize.DATE,
          validate: { isDate: true }
        },
        product: {
          allowNull: false,
          type: Sequelize.RANGE(Sequelize.BIGINT),
          validate: {
            isNumeric: true
          }
        }
      },
      { sequelize, timestamps: false, modelName: "prices" }
    );
  }
}
Price;

export { Price as PricePostgreSql };
