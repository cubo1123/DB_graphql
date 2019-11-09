import { createTypeEmployee as create } from "../../db/instances/TypeEmployee";

const createTypeEmployee = (parent, args, { TypeEmployeePostgreSql }, info) =>
  create(TypeEmployeePostgreSql, {
    description: args.data.description,
    job: args.data.job
  });

export { createTypeEmployee };
