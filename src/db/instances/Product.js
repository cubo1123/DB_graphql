import { ProductPostgreSql } from "../";
import { findAll, findOne } from "../query";

const getProducts = () => findAll(ProductPostgreSql);
const getProductById = id => findOne(ProductPostgreSql, id);
export { getProductById, getProducts };
