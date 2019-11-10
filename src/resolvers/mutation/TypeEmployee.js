import {
  createTypeEmployee as create,
  updateTypeEmployee as update,
  getTypeByID
} from "../../db/instances/TypeEmployee";

const createTypeEmployee = (parent, args, { TypeEmployeePostgreSql }, info) =>
  create(TypeEmployeePostgreSql, {
    description: args.data.description,
    job: args.data.job
  });

const updateTypeEmployee = (
  parent,
  { data, id },
  { TypeEmployeePostgreSql },
  info
) => {
  return update(TypeEmployeePostgreSql, data, id)
    .then(response => {
      return getTypeByID(TypeEmployeePostgreSql, id);
    })
    .catch(err => err);
};
export { createTypeEmployee, updateTypeEmployee };
