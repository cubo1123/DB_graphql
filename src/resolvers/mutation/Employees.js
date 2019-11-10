import {
  createEmployee as create,
  updateEmployee as update
} from "../../db/instances/Employees";
const createEmployee = (parent, args, { EmployeePostgreSql }, info) =>
  create(EmployeePostgreSql, {
    name: args.data.name,
    lastName: args.data.lastName,
    address: args.data.address,
    typeEmployee: args.data.typeEmployee,
    schedule: args.data.schedule,
    startDate: args.data.startDate,
    status: args.data.status,
    salary: args.data.salary,
    endDate: args.data.endDate
  });
const updateEmployee = (parent, { data, id }, { EmployeePostgreSql }, info) =>
  update(EmployeePostgreSql, data, id);

export { createEmployee, updateEmployee };
