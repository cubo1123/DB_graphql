import { findAll, findOne, create } from "../query";

const createNote = (db, data) => create(db, data);
const getNotes = db => findAll(db);
const getNoteByID = (db, id) => findOne(db, id);
export { getNoteByID, getNotes, createNote };
