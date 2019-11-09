import { findAll, findOne, create } from "../query";

const createUnit = (db, data) => create(UnitPostgreSql, data);
const getUnits = db => findAll(UnitPostgreSql);

const getUnitsById = (db, id) => findOne(UnitPostgreSql, id);

export { getUnitsById, getUnits, createUnit };
