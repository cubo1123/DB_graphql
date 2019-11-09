import { getProductById } from "../db/instances";

export default {
  async product(parent, args, { ProductPostgreSql }, info) {
    return getProductById(ProductPostgreSql, parent.product);
  }
};
