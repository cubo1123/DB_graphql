import { createProvider as create } from "../../db/instances/Provider";
const createProvider = (parent, args, ctx, info) =>
  create({
    name: args.data.name,
    telephone: args.data.telephone,
    address: args.data.address
  });

export { createProvider };
