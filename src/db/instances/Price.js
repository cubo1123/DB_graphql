import { findAll, findOne, create } from "../query";

const createPrice = (db, data) => create(db, data);
const getPrices = db => findAll(db);
const getPricesById = (db, id) => findOne(db, id);
export { getPricesById, getPrices, createPrice };
