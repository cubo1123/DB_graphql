import { getCostById } from "../db/instances";
export default {
  async product(parent, args, { CostPostgreSql }, info) {
    return getCostById(CostPostgreSql, parent.product)
      .then(cost => {
        return cost;
      })
      .catch(err => {
        return err;
      });
  }
};
