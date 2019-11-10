import { findAll, findOne, create } from "../query";

const createNote = (db, data) => create(db, data);
const getNotes = db => findAll(db);
const getNoteByID = (db, id) => findOne(db, id);
const createNoteContainsMany = (db, data) => {
  let products = [];
  data.forEach(product => {
    const prom = create(db, product);
    products.push(prom);
  });
  return Promise.all(products);
};
export { getNoteByID, getNotes, createNote, createNoteContainsMany };
