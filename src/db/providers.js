import Sequelize from "sequelize";
import { sequelize } from "./model";

class Provider extends Sequelize.Model {}
Provider.init(
  {
    id: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    name: { allowNull: false, type: Sequelize.STRING(30) },
    telephone: { allowNull: false, type: Sequelize.STRING(15) },
    address: { allowNull: false, type: Sequelize.STRING(50) }
  },
  { sequelize, timestamps: false, modelName: "providers" }
);

export { Provider };
