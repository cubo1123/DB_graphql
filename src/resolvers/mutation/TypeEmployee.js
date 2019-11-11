import {
  createTypeEmployee as create,
  updateTypeEmployee as update,
  getTypeByID,
  deleteType as deleteT
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

async function deleteTypeEmployee(
  parent,
  { id, newId },
  { TypeEmployeePostgreSql, EmployeePostgreSql },
  info
) {
  await EmployeePostgreSql.update(
    { typeEmployee: newId },
    { where: { typeEmployee: id } }
  );
  return deleteT(TypeEmployeePostgreSql, id);
  return true;
}
export { createTypeEmployee, updateTypeEmployee, deleteTypeEmployee };
