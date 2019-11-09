import { getProductById } from "../db/instances";
import { getUnitsById } from "../db/instances";
export default {
  async product(parent, args, { ProductPostgreSql }, info) {
    return getProductById(ProductPostgreSql, parent.product);
  },
  async unit(parent, args, { UnitPostgreSql }, info) {
    return getUnitsById(UnitPostgreSql, parent.type);
  }
};
