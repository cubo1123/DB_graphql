import { Product } from "../products";
const findProductById = id => {
  Product.findByPk(id)
    .then(product => {
      console.log({ product });
    })
    .catch(err => {
      console.log({ err });
    });
};
export { findProductById };
