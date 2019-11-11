import {
  createUnit as create,
  updateUnit as update,
  getUnitsById
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
async function deleteUnit(parent, { id, newId }, ctx, info) {
  console.log(id);
  console.log(newId);
  return true;
}
export { createUnit, updateUnit, deleteUnit };
