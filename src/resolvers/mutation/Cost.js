import { deleteCost as deleteC } from "../../db/instances";
const deleteCost = (parent, { id }, { CostPostgreSql }, info) => {
  return deleteC(CostPostgreSql, id);
};

export { deleteCost };
