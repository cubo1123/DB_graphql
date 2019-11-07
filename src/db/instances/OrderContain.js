import { OrderContainPostgreSql } from "../";
import { findAll, findOne } from "../query";

const getOrdersContain = () => findAll(OrderContainPostgreSql);
const getOrdersContainById = id => findOne(OrderContainPostgreSql, id);
export { getOrdersContainById, getOrdersContain };
