import { createOrder as create } from "../../db/instances/Order";
const createOrder = (parent, args, ctx, info) =>
  create({
    provider: args.data.provider,
    createdAt: args.data.createdAt
  });

export { createOrder };
