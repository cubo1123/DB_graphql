import { PricePostgreSql } from "../";
import { findAll, findOne, create } from "../query";

const createPrice = data => create(PricePostgreSql, data);
const getPrices = () => findAll(PricePostgreSql);
const getPricesById = id => findOne(PricePostgreSql, id);
export { getPricesById, getPrices, createPrice };
