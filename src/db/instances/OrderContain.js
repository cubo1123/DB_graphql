import { OrderContainPostgreSql } from "../order_contains";
import { findAll, findOne } from "../query";

const getOrdersContain = () => findAll(OrderContainPostgreSql);
const getOrdersContainById = id => findOne(OrderContainPostgreSql, id);
export { getOrdersContainById, getOrdersContain };
