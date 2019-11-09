import { EmployeePostgreSql } from "../";
import { findAll, findOne, create } from "../query";

const createEmployee = data => create(EmployeePostgreSql, data);
const getEmployees = () => findAll(EmployeePostgreSql);
const getEmployeeByID = id => findOne(EmployeePostgreSql, id);
export { getEmployeeByID, getEmployees, createEmployee };
