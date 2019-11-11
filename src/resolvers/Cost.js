import { getProductByIdInObject } from "../db/instances";
export default {
  async product(parent, args, { ProductPostgreSql }, info) {
    return getProductByIdInObject(ProductPostgreSql, parent.product)
      .then(product => {
        return product;
      })
      .catch(err => {
        return err;
      });
  }
};
