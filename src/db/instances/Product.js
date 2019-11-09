import { ProductPostgreSql } from "../";
import { findAll, findOne, create } from "../query";

const createProduct = data => create(ProductPostgreSql, data);
const getProducts = () => findAll(ProductPostgreSql);
const getProductById = id => findOne(ProductPostgreSql, id);
export { getProductById, getProducts, createProduct };
