import {
  createOrder as create,
  createOrderContainsMany
} from "../../db/instances";
const createOrder = (
  parent,
  { data },
  { OrderPostgreSql, OrderContainPostgreSql },
  info
) => {
  return create(OrderPostgreSql, {
    provider: data.provider,
    createdAt: data.createdAt
  })
    .then(order => {
      let productsToSave = data.products.map(product => {
        return Object.assign(product, { belongTo: order.id });
      });
      return createOrderContainsMany(OrderContainPostgreSql, productsToSave)
        .then(contains => {
          return order;
        })
        .catch(err => err);
    })
    .catch(err => err);
};

export { createOrder };
