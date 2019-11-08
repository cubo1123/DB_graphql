import { ClientPostgreSql } from "../";
import { findAll, findOne, create } from "../query";
const createClient = data => create(ClientPostgreSql, data);
const getClients = () => findAll(ClientPostgreSql);
const getClientByID = id => findOne(ClientPostgreSql, id);

export { createClient, getClientByID, getClients };
