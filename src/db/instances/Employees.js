import { EmployeePostgreSql } from "../";
import { findAll, findOne } from "../query";

const getEmployees = () => findAll(EmployeePostgreSql);
const getEmployeeByID = id => findOne(EmployeePostgreSql, id);
export { getEmployeeByID, getEmployees };
