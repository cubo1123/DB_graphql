import { findAll, findOne, create, updateOne } from "../query";
import { CostPostgreSql } from "../costs";
import { PricePostgreSql } from "../prices";
import Sequelize from "sequelize";
const getProducts = db => findAll(db);
const getProductById = (db, id) => {
  return db
    .findAll({
      include: [
        {
          model: CostPostgreSql,
          where: { id: Sequelize.col("product.id") }
        },
        {
          model: PricePostgreSql,
          where: { id: Sequelize.col("product.id") }
        }
      ]
    })
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};
const createProduct = (db, data) => create(db, data);
const updateProduct = (db, data, id) => {
  return findOne(db, id)
    .then(response => {})
    .catch();
};
export { getProductById, getProducts, createProduct };
