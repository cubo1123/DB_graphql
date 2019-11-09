import { ProviderPostgreSql } from "../";
import { findAll, findOne, create } from "../query";

const createProvider = data => create(ProviderPostgreSql, data);
const getProviders = () => findAll(ProviderPostgreSql);
const getProviderById = id => findOne(ProviderPostgreSql, id);
export { getProviderById, getProviders, createProvider };
