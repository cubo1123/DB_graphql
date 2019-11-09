import { findAll, findOne, create } from "../query";

const createEmployee = (db, data) => create(db, data);
const getEmployees = db => findAll(db);
const getEmployeeByID = (db, id) => findOne(db, id);
export { getEmployeeByID, getEmployees, createEmployee };
