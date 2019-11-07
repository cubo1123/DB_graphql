import { getTypeByID } from "../db/instances";
import { getScheduleByID } from "../db/instances";
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
