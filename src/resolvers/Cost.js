import { getCostById } from "../db/instances";
export default {
  async product(parent, args, ctx, info) {
    return getCostById(parent.product)
      .then(cost => {
        return cost;
      })
      .catch(err => {
        return err;
      });
  }
};
