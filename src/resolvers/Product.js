import {
  getUnitsById,
  getProviderById,
  getPricesById,
  getCostByProductId
} from "../db/instances";
export default {
  async provider(parent, args, { ProviderPostgreSql }, info) {
    return getProviderById(ProviderPostgreSql, parent.provider);
  },
  async unit(parent, args, { UnitPostgreSql }, info) {
    return getUnitsById(UnitPostgreSql, parent.unit);
  },
  async price(parent, args, { PricePostgreSql }, info) {
    return getPricesById(PricePostgreSql, parent.id);
  },
  async cost(parent, args, { CostPostgreSql }, ctx) {
    return getCostByProductId(CostPostgreSql, parent.id);
  }
};
