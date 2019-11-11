import { findAll, findOne, create, updateOne, deleteOne } from "../query";

const createProvider = (db, data) => create(db, data);
const getProviders = db => findAll(db);
const getProviderById = (db, id) => findOne(db, id);
const updateProvider = (db, data, id) => updateOne(db, data, id);
const deleteProvider = (db, id) => deleteOne(db, id);
export {
  getProviderById,
  getProviders,
  createProvider,
  updateProvider,
  deleteProvider
};
