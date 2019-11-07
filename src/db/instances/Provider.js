import { ProviderPostgreSql } from "../";
import { findAll, findOne } from "../query";

const getProviders = () => findAll(ProviderPostgreSql);
const getProviderById = id => findOne(ProviderPostgreSql, id);
export { getProviderById, getProviders };