import { PricePostgreSql } from "../";
import { findAll, findOne } from "../query";

const getPrices = () => findAll(PricePostgreSql);
const getPricesById = id => findOne(PricePostgreSql, id);
export { getPricesById, getPrices };
