import { findAll, findOne, create } from "../query";

const createOrderContain = (db, data) => create(db, data);
const getOrdersContain = db => findAll(db);
const createOrderContainsMany = (db, data) => {
  let products = [];
  data.forEach(product => {
    const prom = create(db, product);
    products.push(prom);
  });
  return Promise.all(products);
};
const getOrdersContainById = (db, id) => findOne(db, id);
export {
  getOrdersContainById,
  getOrdersContain,
  createOrderContain,
  createOrderContainsMany
};
