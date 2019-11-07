import { getProductById } from "../db/instances";

export default {
  async product(parent, args, ctx, info) {
    return getProductById(parent.product);
  }
};
