import {
  createSchedule as create,
  updateSchedule as update,
  getScheduleByID
} from "../../db/instances/Schedule";

const createSchedule = (parent, args, { SchedulePostgreSql }, info) =>
  create(SchedulePostgreSql, {
    start: args.data.start,
    finish: args.data.finish
  });
const updateSchedule = (parent, { data, id }, { SchedulePostgreSql }, info) => {
  return update(SchedulePostgreSql, data, id)
    .then(response => {
      return getScheduleByID(SchedulePostgreSql, id);
    })
    .catch(err => err);
};

export { createSchedule, updateSchedule };
