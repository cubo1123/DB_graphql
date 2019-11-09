import { createUnit as create } from "../../db/instances/Unit";

const createUnit = (parent, args, ctx, info) =>
  create({ name: args.data.name });

export { createUnit };
