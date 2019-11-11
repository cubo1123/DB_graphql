import {
  createProvider as create,
  updateProvider as update,
  getProviderById
} from "../../db/instances/Provider";
const createProvider = (parent, args, { ProviderPostgreSql }, info) =>
  create(ProviderPostgreSql, {
    name: args.data.name,
    telephone: args.data.telephone,
    address: args.data.address
  });

const updateProvider = (parent, { data, id }, { ProviderPostgreSql }, info) => {
  return update(ProviderPostgreSql, data, id)
    .then(response => {
      return getProviderById(ProviderPostgreSql, id);
    })
    .catch(err => err);
};

async function deleteProvider(
  parent,
  { id, newId },
  { ProviderPostgreSql, ProductPostgreSql },
  info
) {
  console.log(id);
  console.log(newId);
  return true;
}
export { createProvider, updateProvider, deleteProvider };
