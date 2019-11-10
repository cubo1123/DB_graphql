import Sequelize from "sequelize";

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
      { sequelize, timestamps: false, modelName: "costs" }
    );
  }
}

export { Cost as CostPostgreSql };
