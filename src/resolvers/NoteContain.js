import { getProductById } from "../db/instances";
import { getUnitsById } from "../db/instances";
export default {
  async product(parent, args, ctx, info) {
    return getProductById(parent.product);
  },
  async type(parent, args, ctx, info) {
    return getUnitsById(parent.type);
  }
};
