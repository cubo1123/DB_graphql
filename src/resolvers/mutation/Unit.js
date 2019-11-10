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
export { createUnit, updateUnit };
