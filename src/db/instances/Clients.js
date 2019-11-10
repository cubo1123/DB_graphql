import { findAll, findOne, create, updateOne } from "../query";
const createClient = (db, data) => create(db, data);
const getClients = db => findAll(db);
const getClientByID = (db, id) => findOne(db, id);
const updateClient = (db, data, id) => updateOne(db, data, id);

export { createClient, getClientByID, getClients, updateClient };
