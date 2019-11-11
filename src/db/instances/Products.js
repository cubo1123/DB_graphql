import { findAll, findOne, create, updateOne } from "../query";
import { CostPostgreSql } from "../costs";
import { PricePostgreSql } from "../prices";
import Sequelize from "sequelize";
const getProducts = db => findAll(db);
const getProductById = (db, id) => {
  return db
    .findAll({
      where: { id },
      include: [
        {
          model: CostPostgreSql
        },
        {
          model: PricePostgreSql
        }
      ]
    })
    .then(response => {
      console.log("Exito");
      console.log(JSON.stringify(response));
      return response;
    })
    .catch(err => {
      console.log("fracaso");
      console.log(err);
      return err;
    });
};
const createProduct = (db, data) => create(db, data);
const updateProduct = (db, data, id) => {
  return updateOne(db, id)
    .then(response => {})
    .catch();
};
export { getProductById, getProducts, createProduct, updateProduct };
