import { findAll, findOne, create, updateOne } from "../query";

const createEmployee = (db, data) => create(db, data);
const getEmployees = db => findAll(db);
const getEmployeeByID = (db, id) => findOne(db, id);
const updateEmployee = (db, data, id) => {
  return updateOne(db, data, id)
    .then(result => {
      return findOne(db, id);
    })
    .catch(err => err);
};
export { getEmployeeByID, getEmployees, createEmployee, updateEmployee };
