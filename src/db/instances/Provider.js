import { ProviderPostgreSql } from "../providers";
import { findAll, findOne } from "../snippets";

const getProviders = () => findAll(ProviderPostgreSql);
const getProviderById = id => findOne(ProviderPostgreSql, id);
export { getProviderById, getProviders };
