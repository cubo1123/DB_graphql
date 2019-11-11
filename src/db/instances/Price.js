import { findAll, findOne, create } from "../query";

const createPrice = (db, data) => create(db, data);
const getPrices = db => findAll(db);
const getPricesById = (db, id) =>
  db
    .findAll({ where: { id } })
    .then(data => (data ? data : []))
    .catch(err => {
      return err;
    });
export { getPricesById, getPrices, createPrice };
