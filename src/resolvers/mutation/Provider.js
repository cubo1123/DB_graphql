import {
  createProvider as create,
  updateProvider as update,
  getProviderById,
  deleteProvider as deleteP
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
  { ProviderPostgreSql, ProductPostgreSql, OrderPostgreSql },
  info
) {
  let promises = [];
  await ProductPostgreSql.update(
    { provider: newId },
    { where: { provider: id } }
  );

  await OrderPostgreSql.update(
    { provider: newId },
    { where: { provider: id } }
  );
  return deleteP(ProviderPostgreSql, id);
}
export { createProvider, updateProvider, deleteProvider };
