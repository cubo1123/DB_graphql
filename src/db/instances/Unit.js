import { UnitPostgreSql } from "../";
import { findAll, findOne, create } from "../query";

const createUnit = data => create(UnitPostgreSql, data);
const getUnits = () => findAll(UnitPostgreSql);

const getUnitsById = id => findOne(UnitPostgreSql, id);

export { getUnitsById, getUnits, createUnit };
