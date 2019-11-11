import { findAll, findOne, create, updateOne } from "../query";
import { CostPostgreSql } from "../costs";
import { PricePostgreSql } from "../prices";
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
      return response ? response : [];
    })
    .catch(err => {
      return err;
    });
};
const getProductByIdInObject = (db, id) => {
  return db.findOne({
    where: { id },
    include: [
      {
        model: CostPostgreSql
      },
      {
        model: PricePostgreSql
      }
    ]
  });
};
const createProduct = (db, data) => create(db, data);
const updateProduct = (db, data, id) => {
  return updateOne(db, data, id)
    .then(response => response)
    .catch(err => err);
};
export {
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
  getProductByIdInObject
};
