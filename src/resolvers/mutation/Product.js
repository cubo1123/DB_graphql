import {
  createProduct as create,
  createCost,
  createPrice,
  updateProduct as update,
  getCostById,
  getPricesById
} from "../../db/instances";
import { response } from "express";
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

const updateProduct = (
  parent,
  { data, id },
  { ProductPostgreSql, CostPostgreSql, PricePostgreSql },
  info
) => {
  return getCostById(CostPostgreSql, id)
    .then(response => {})
    .catch(err => {});
};
export { createProduct };
