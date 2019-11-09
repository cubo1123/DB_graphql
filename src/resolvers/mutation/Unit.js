import { createUnit as create } from "../../db/instances/Unit";

const createUnit = (parent, args, { UnitPostgreSql }, info) =>
  create(UnitPostgreSql, { name: args.data.name });

export { createUnit };
