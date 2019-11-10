import Sequelize from "sequelize";

class Unit extends Sequelize.Model {
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
          validate: { is: /^[a-zA-Z\s]*$/i, notEmpty: true }
        }
      },
      { sequelize, timestamps: false }
    );
  }
}

export { Unit as UnitPostgreSql };
