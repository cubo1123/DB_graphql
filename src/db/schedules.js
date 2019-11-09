import Sequelize from "sequelize";

class Schedule extends Sequelize.Model {
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
        start: {
          allowNull: false,
          type: Sequelize.TIME
        },
        finish: {
          allowNull: false,
          type: Sequelize.TIME
        }
      },
      { sequelize, timestamps: false, modelName: "schedules" }
    );
  }
}

export { Schedule as SchedulePostgreSql };
