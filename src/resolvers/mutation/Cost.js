import { createCost as create } from "../../db/instances";

const createCost = (parent, args, { CostPostgreSql }, info) =>
  create(CostPostgreSql, {
    date: args.data.date,
    value: args.data.value,
    product: args.data.product
  });

export { createCost };
