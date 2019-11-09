import { findAll, findOne, create } from "../query";

const createNoteContain = (db, data) => create(db, data);
const createContainsMany = (db, data) => {
  let products = [];
  console.log("LA DATA QUE RECIBO");
  console.log(data);
  console.log("PRODUCT BY PRODUCT");
  data.forEach(product => {
    console.log(product);
    const prom = create(db, {
      product: product.product,
      quantity: product.quantity,
      note: product.note
    });
    products.push(prom);
    console.log("PROMISE PRODUCT");
    console.log(prom);
  });
  return Promise.all(products);
};
const getNotesContain = db => findAll(db);
const getNoteContainByID = (db, id) => findOne(db, id);
export {
  getNoteContainByID,
  getNotesContain,
  createNoteContain,
  createContainsMany
};
