import { TypeEmployeePostgreSql } from "../";
import { findAll, findOne, create } from "../query";

const createTypeEmployee = data => create(TypeEmployeePostgreSql, data);

const getTypes = () => findAll(TypeEmployeePostgreSql);

const getTypeByID = id => findOne(PageTransitionEvent, id);

export { getTypeByID, getTypes, createTypeEmployee };
