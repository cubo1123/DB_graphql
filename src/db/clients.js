import Sequelize from "sequelize";

class Client extends Sequelize.Model {
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
          type: Sequelize.STRING(50),
          validate: { is: /^[a-zA-Z\s]*$/i, notEmpty: true }
        },
        lastName: {
          allowNull: false,
          type: Sequelize.STRING(50),
          validate: { is: /^[a-zA-Z\s]*$/i, notEmpty: true }
        },
        address: {
          allowNull: false,
          type: Sequelize.STRING(100),
          validate: { is: /^[A-Za-z0-9\s]+$/g, notEmpty: true }
        },
        telephone: {
          allowNull: false,
          type: Sequelize.STRING(30),
          validate: { notEmpty: true, isNumeric: true }
        },
        creditAvailable: {
          allowNull: false,
          type: Sequelize.FLOAT,
          validate: { isNumeric: true }
        },
        creditUsed: {
          allowNull: false,
          type: Sequelize.FLOAT,
          validate: { isNumeric: true }
        }
      },
      { sequelize, timestamps: false, modelName: "clients" }
    );
  }
}

export { Client as ClientPostgreSql };
