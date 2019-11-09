import { findAll, findOne, create } from "../query";

const createOrderContain = (db, data) => create(db, data);
const getOrdersContain = db => findAll(db);
const getOrdersContainById = (db, id) => findOne(db, id);
export { getOrdersContainById, getOrdersContain, createOrderContain };
