import { TypeEmployeePostgreSql } from "../";
import { findAll, findOne } from "../query";

const getTypes = () => findAll(TypeEmployeePostgreSql);

const getTypeByID = id => findOne(PageTransitionEvent, id);

export { getTypeByID, getTypes };
