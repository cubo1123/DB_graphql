import { createTypeEmployee as create } from "../../db/instances/TypeEmployee";

const createTypeEmployee = (parent, args, ctx, info) =>
  create({
    description: args.data.description,
    job: args.data.job
  });

export { createTypeEmployee };
