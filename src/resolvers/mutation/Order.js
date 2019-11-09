import { createOrder as create } from "../../db/instances/Order";
const createOrder = (parent, args, { OrderPostgreSql }, info) =>
  create(OrderPostgreSql, {
    provider: args.data.provider,
    createdAt: args.data.createdAt
  });

export { createOrder };
