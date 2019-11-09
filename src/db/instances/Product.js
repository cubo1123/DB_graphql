import { ProductPostgreSql } from "../";
import { findAll, findOne, create } from "../query";

const createProduct = (db, data) => create(db, data);
const getProducts = db => findAll(db);
const getProductById = (db, id) => findOne(db, id);
export { getProductById, getProducts, createProduct };
