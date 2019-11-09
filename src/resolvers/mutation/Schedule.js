import { createSchedule as create } from "../../db/instances/Schedule";

const createSchedule = (parent, args, ctx, info) =>
  create({
    start: args.data.start,
    finish: args.data.finish
  });

export { createSchedule };
