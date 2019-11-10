import { findAll, findOne, create } from "../query";

const getProducts = db => findAll(db);
const getProductById = (db, id) => findOne(db, id);
const createProduct = (db, data) => create(db, data);
export { getProductById, getProducts, createProduct };
