import {
  createProduct as create,
  createCost,
  createPrice
} from "../../db/instances";
const createProduct = (
  parent,
  { data },
  { ProductPostgreSql, CostPostgreSql, PricePostgreSql },
  info
) => {
  return create(ProductPostgreSql, data)
    .then(product => {
      return createCost(CostPostgreSql, {
        value: data.cost,
        product: product.id
      })
        .then(cost => {
          return createPrice(PricePostgreSql, {
            value: data.price,
            product: product.id
          })
            .then(price => {
              return product;
            })
            .catch(err => err);
        })
        .catch(err => err);
    })
    .catch();
};
export { createProduct };
