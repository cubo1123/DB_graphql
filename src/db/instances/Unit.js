import { UnitPostgreSql } from "../units";
import { findAll, findOne } from "../snippets";

const getUnits = () => findAll(UnitPostgreSql);

const getUnitsById = id => findOne(UnitPostgreSql, id);

export { getUnitsById, getUnits };
