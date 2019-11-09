import Sequelize from "sequelize";

class TypeEmployee extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.RANGE(Sequelize.BIGINT),
          allowNull: false,
          primaryKey: true,
          unique: true,
          autoIncrement: true
        },
        description: {
          type: Sequelize.STRING(30),
          allowNull: false,
          validate: { is: /^[a-zA-Z\s]*$/i, notEmpty: true }
        },
        job: {
          type: Sequelize.STRING(30),
          allowNull: false,
          validate: { is: /^[a-zA-Z\s]*$/i, notEmpty: true }
        }
      },
      { sequelize, timestamps: false, modelName: "type_employees" }
    );
  }
}

export { TypeEmployee as TypeEmployeePostgreSql };
