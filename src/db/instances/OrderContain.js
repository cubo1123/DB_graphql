import { OrderContainPostgreSql } from "../";
import { findAll, findOne, create } from "../query";

const createOrderContain = data => create(OrderContainPostgreSql, data);
const getOrdersContain = () => findAll(OrderContainPostgreSql);
const getOrdersContainById = id => findOne(OrderContainPostgreSql, id);
export { getOrdersContainById, getOrdersContain, createOrderContain };
