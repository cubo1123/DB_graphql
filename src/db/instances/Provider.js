import { findAll, findOne, create, updateOne } from "../query";

const createProvider = (db, data) => create(db, data);
const getProviders = db => findAll(db);
const getProviderById = (db, id) => findOne(db, id);
const updateProvider = (db, data, id) => updateOne(db, data, id);
export { getProviderById, getProviders, createProvider, updateProvider };
