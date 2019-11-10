import {
  createClient as create,
  updateClient as update,
  getClientByID
} from "../../db/instances";

const createClient = (parent, args, { ClientPostgreSql }, info) => {
  return create(ClientPostgreSql, {
    name: args.data.name,
    lastName: args.data.lastName,
    address: args.data.address,
    telephone: args.data.telephone,
    creditAvailable: args.data.creditAvailable,
    creditUsed: args.data.creditUsed
  });
};
const updateClient = (parent, { data, id }, { ClientPostgreSql }, info) => {
  return update(ClientPostgreSql, data, id)
    .then(response => {
      return getClientByID(ClientPostgreSql, id);
    })
    .catch(err => {
      return err;
    });
};
export { createClient, updateClient };
