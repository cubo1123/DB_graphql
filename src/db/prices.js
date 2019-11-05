import Sequelize from "sequelize";
import { sequelize } from "./model";

class Price extends Sequelize.Model {}
Price.init(
  {
    id: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    date: { allowNull: false, type: "TIMESTAMP" },
    value: { allowNull: false, type: Sequelize.FLOAT }
  },
  { sequelize, timestamps: false, modelName: "prices" }
);

export { Price };
