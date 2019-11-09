import { findAll, findOne, create } from "../query";

const createCost = (db, data) => create(db, data);
const getCostById = (db, id) => findOne(db, id);
const getCosts = db => findAll(db);
export { getCostById, getCosts, createCost };
