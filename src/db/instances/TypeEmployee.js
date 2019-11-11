import { findAll, findOne, create, updateOne, deleteOne } from "../query";

const createTypeEmployee = (db, data) => create(db, data);

const getTypes = db => findAll(db);

const getTypeByID = (db, id) => findOne(db, id);

const deleteType = (db, id) => deleteOne(db, id);

const updateTypeEmployee = (db, data, id) => updateOne(db, data, id);

export {
  getTypeByID,
  getTypes,
  createTypeEmployee,
  updateTypeEmployee,
  deleteType
};
