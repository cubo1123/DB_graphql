import { findAll, findOne, create } from "../query";

const createOrder = (db, data) => create(db, data);
const getOrder = db => findAll(db);
const getOrderById = (db, id) => findOne(db, id);
export { getOrderById, getOrder, createOrder };
