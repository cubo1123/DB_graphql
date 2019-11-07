import { getProductById } from "../db/instances/Product";

export default {
  async product(parent, args, ctx, info) {
    return getProductById(parent.product);
  }
};
