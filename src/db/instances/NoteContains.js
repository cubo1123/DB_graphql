import { findAll, findOne, create } from "../query";

const createNoteContain = (db, data) => create(db, data);
const getNotesContain = db => findAll(db);
const getNoteContainByID = (db, id) => findOne(db, id);
export { getNoteContainByID, getNotesContain, createNoteContain };
