import { findAll, findOne, create } from "../query";

const createTypeEmployee = (db, data) => create(db, data);

const getTypes = db => findAll(db);

const getTypeByID = (db, id) => findOne(db, id);

export { getTypeByID, getTypes, createTypeEmployee };
