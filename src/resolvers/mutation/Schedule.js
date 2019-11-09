import { createSchedule as create } from "../../db/instances/Schedule";

const createSchedule = (parent, args, { SchedulePostgreSql }, info) =>
  create(SchedulePostgreSql, {
    start: args.data.start,
    finish: args.data.finish
  });

export { createSchedule };
