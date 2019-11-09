import { findAll, findOne, create } from "../query";
const createClient = (db, data) => create(db, data);
const getClients = db => findAll(db);
const getClientByID = (db, id) => findOne(db, id);

export { createClient, getClientByID, getClients };
