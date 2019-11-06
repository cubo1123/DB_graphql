import { findProductById } from "../db/instances/Products";
export default {
  product(parent, args, ctx, info) {
    return findProductById(parent.product);
  }
};
