import { findAll, findOne, create, deleteOne } from "../query";

const createCost = (db, data) => create(db, data);
const getCostById = (db, id) =>
  db
    .findByPk(id)
    .then(data => (data ? [data] : []))
    .catch(err => {
      return err;
    });
const getCostByProductId = (db, id) =>
  db
    .findAll({ where: { product: id } })
    .then(data => (data ? data : []))
    .catch(err => {
      return err;
    });
const getCosts = db => findAll(db);
const deleteCost = (db, id) => {
  return deleteOne(db, id);
};
export { getCostById, getCosts, createCost, deleteCost, getCostByProductId };
