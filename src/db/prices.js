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
        date: {
          allowNull: false,
          type: "TIMESTAMP",
          validate: { isNumeric: true }
        },
        value: {
          allowNull: false,
          type: Sequelize.FLOAT,
          validate: { isNumeric: true }
        }
      },
      { sequelize, timestamps: false, modelName: "prices" }
    );
  }
}
Price;

export { Price as PricePostgreSql };
