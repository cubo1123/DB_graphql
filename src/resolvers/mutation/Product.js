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
  console.log("AQUI");
  console.log(data);

  return create(ProductPostgreSql, data)
    .then(product => {
      console.log("se creo un producto");
      console.log(product);
      return createCost(CostPostgreSql, {
        value: data.cost,
        date: "2019/12/12",
        product: product.id
      })
        .then(cost => {
          console.log("Se creo un cost");
          console.log(cost);
          return createPrice(PricePostgreSql, {
            value: data.price,
            date: "2019/12/12",
            product: product.id
          })
            .then(price => {
              console.log("Se creo un price");
              console.log(price);
              return product;
            })
            .catch(err => err);
        })
        .catch(err => err);
    })
    .catch();
};
export { createProduct };
