import {
  createProduct as create,
  createCost,
  createPrice,
  updateProduct as update,
  getProductById,
  getProductByIdInObject
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

async function updateProduct(
  parent,
  { data, id },
  { ProductPostgreSql, CostPostgreSql, PricePostgreSql },
  info
) {
  let promises = [];
  if (data.cost) {
    await createCost(CostPostgreSql, { value: data.cost, product: id });
    delete data.cost;
  }

  if (data.price) {
    await createPrice(PricePostgreSql, { value: data.price, product: id });
    delete data.price;
  }

  if (data) {
    await update(ProductPostgreSql, data, id)
      .then(response => {
        return response;
      })
      .catch(err => err);
  }

  return getProductByIdInObject(ProductPostgreSql, id);
}
export { createProduct, updateProduct };
