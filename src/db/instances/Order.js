import { OrderPostgreSql } from "../";
import { findAll, findOne } from "../query";

const getOrder = () => findAll(OrderPostgreSql);
const getOrderById = id => findOne(OrderPostgreSql, id);
export { getOrderById, getOrder };
