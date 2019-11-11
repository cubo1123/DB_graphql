import { findAll, findOne, create } from "../query";

const createCost = (db, data) => create(db, data);
const getCostById = (db, id) =>
  db
    .findAll({ where: { id } })
    .then(data => (data ? data : []))
    .catch(err => {
      return err;
    });
const getCosts = db => findAll(db);
export { getCostById, getCosts, createCost };
