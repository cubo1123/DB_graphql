import { createProvider as create } from "../../db/instances/Provider";
const createProvider = (parent, args, { ProviderPostgreSql }, info) =>
  create(ProviderPostgreSql, {
    name: args.data.name,
    telephone: args.data.telephone,
    address: args.data.address
  });

export { createProvider };
