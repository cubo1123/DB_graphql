import { createClient as create } from "../../db/instances";

const createClient = (parent, args, { ClientPostgreSql }, info) =>
  create(ClientPostgreSql, {
    name: args.data.name,
    lastName: args.data.lastName,
    address: args.data.address,
    telephone: args.data.telephone,
    creditAvailable: args.data.creditAvailable,
    creditUsed: args.data.creditUsed
  });

export { createClient };
