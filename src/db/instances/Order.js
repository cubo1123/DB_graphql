import { OrderPostgreSql } from "../";
import { findAll, findOne, create } from "../query";

const createOrder = data => create(OrderPostgreSql, data);
const getOrder = () => findAll(OrderPostgreSql);
const getOrderById = id => findOne(OrderPostgreSql, id);
export { getOrderById, getOrder, createOrder };
