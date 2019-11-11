import {
  createUnit as create,
  updateUnit as update,
  getUnitsById,
  deleteUnit as deleteU
} from "../../db/instances/Unit";

const createUnit = (parent, args, { UnitPostgreSql }, info) =>
  create(UnitPostgreSql, { name: args.data.name });

const updateUnit = (parent, { data, id }, { UnitPostgreSql }, info) => {
  return update(UnitPostgreSql, data, id)
    .then(response => {
      return getUnitsById(UnitPostgreSql, id);
    })
    .catch(err => err);
};
async function deleteUnit(
  parent,
  { id, newId },
  { ProductPostgreSql, UnitPostgreSql },
  info
) {
  await ProductPostgreSql.update({ unit: newId }, { where: { unit: id } });
  return deleteU(UnitPostgreSql, id);
}
export { createUnit, updateUnit, deleteUnit };
