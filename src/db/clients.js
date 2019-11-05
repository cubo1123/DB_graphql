import Sequelize from "sequelize";
import { sequelize } from "./model";

class Client extends Sequelize.Model {}
Client.init(
  {
    id: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    name: { allowNull: false, type: Sequelize.STRING(50) },
    lastName: { allowNull: false, type: Sequelize.STRING(50) },
    address: { allowNull: false, type: Sequelize.STRING(100) },
    telephone: { allowNull: false, type: Sequelize.STRING(30) },
    creditAvailable: { allowNull: false, type: Sequelize.FLOAT },
    creditUsed: { allowNull: false, type: Sequelize.FLOAT }
  },
  { sequelize, timestamps: false, modelName: "clients" }
);

export { Client as ClientPostgreSql };
