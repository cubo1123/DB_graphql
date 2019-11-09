import { findAll, findOne, create } from "../query";

const createProvider = (db, data) => create(db, data);
const getProviders = db => findAll(db);
const getProviderById = (db, id) => findOne(db, id);
export { getProviderById, getProviders, createProvider };
