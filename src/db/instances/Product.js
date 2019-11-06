import { ProductPostgreSql } from "../products";
import { findAll, findOne } from "../snippets";

const getProducts = () => findAll(ProductPostgreSql);
const getProductById = id => findOne(ProductPostgreSql, id);
export { getProductById, getProducts };
