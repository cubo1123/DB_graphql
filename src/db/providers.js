import Sequelize from "sequelize";

class Provider extends Sequelize.Model {
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
        },
        telephone: {
          allowNull: false,
          type: Sequelize.STRING(15),
          validate: { isNumeric: true }
        },
        address: {
          allowNull: false,
          type: Sequelize.STRING(50),
          validate: { is: /^[A-Za-z0-9\s]+$/g, notEmpty: true }
        }
      },
      { sequelize, timestamps: false, modelName: "providers" }
    );
  }
}

export { Provider as ProviderPostgreSql };
