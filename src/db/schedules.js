import Sequelize from "sequelize";
import { sequelize } from "./model";

class Schedule extends Sequelize.Model {}
Schedule.init(
  {
    id: {
      allowNull: false,
      type: Sequelize.RANGE(Sequelize.BIGINT),
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    start: {
      allowNull: false,
      type: Sequelize.TIME,
      validate: { isNumeric: true }
    },
    end: {
      allowNull: false,
      type: Sequelize.TIME,
      validate: { isNumeric: true }
    }
  },
  { sequelize, timestamps: false, modelName: "schedules" }
);

export { Schedule };
