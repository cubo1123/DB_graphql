import { createCost as create } from "../../db/instances";

const createCost = (parent, args, ctx, info) =>
  create({
    date: args.data.date,
    value: args.data.value
  });

export { createCost };
