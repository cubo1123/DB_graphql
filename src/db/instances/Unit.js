import { findAll, findOne, create, updateOne, deleteOne } from "../query";

const createUnit = (db, data) => create(db, data);
const getUnits = db => findAll(db);

const getUnitsById = (db, id) => findOne(db, id);

const updateUnit = (db, data, id) => updateOne(db, data, id);

const deleteUnit = (db, id) => deleteOne(db, id);

export { getUnitsById, getUnits, createUnit, updateUnit, deleteUnit };
