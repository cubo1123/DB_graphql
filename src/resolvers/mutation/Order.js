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
      console.log("se creo la orden");
      console.log(order.id);
      console.log(data.products);
      let productsToSave = data.products.map(product => {
        return Object.assign(product, { belongTo: order.id });
      });
      console.log("como quedaron los productos");
      console.log(productsToSave);
      return createOrderContainsMany(OrderContainPostgreSql, productsToSave)
        .then(contains => {
          console.log(contains);
          return order;
        })
        .catch(err => err);
    })
    .catch(err => err);
};

export { createOrder };
