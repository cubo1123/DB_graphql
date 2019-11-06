import { getTypeByID } from "../db/instances/TypeEmployee";
import { getScheduleByID } from "../db/instances/Schedule";
export default {
  async typeEmployee(parent, args, ctx, info) {
    return getTypeByID(parent.typeEmployee)
      .then(type => {
        return type;
      })
      .catch(err => {
        return err;
      });
  },
  async schedule(parent, args, ctx, info) {
    return getScheduleByID(parent.schedule)
      .then(schedule => {
        return schedule;
      })
      .then(err => {
        return err;
      });
  }
};
