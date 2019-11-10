import { findAll, findOne, create, updateOne } from "../query";

const createUnit = (db, data) => create(db, data);
const getUnits = db => findAll(db);

const getUnitsById = (db, id) => findOne(db, id);

const updateUnit = (db, data, id) => updateOne(db, data, id);

export { getUnitsById, getUnits, createUnit, updateUnit };
