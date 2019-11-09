import { getTypeByID } from "../db/instances";
import { getScheduleByID } from "../db/instances";
export default {
  async typeEmployee(parent, args, { TypeEmployeePostgreSql }, info) {
    return getTypeByID(TypeEmployeePostgreSql, parent.typeEmployee)
      .then(type => {
        return type;
      })
      .catch(err => {
        return err;
      });
  },
  async schedule(parent, args, { SchedulePostgreSql }, info) {
    return getScheduleByID(SchedulePostgreSql, parent.schedule)
      .then(schedule => {
        return schedule;
      })
      .then(err => {
        return err;
      });
  }
};
