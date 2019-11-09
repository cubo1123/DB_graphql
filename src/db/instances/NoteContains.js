import { NoteContainPostgreSql } from "../";
import { findAll, findOne, create } from "../query";

const createNoteContain = data => create(NoteContainPostgreSql, data);
const getNotesContain = () => findAll(NoteContainPostgreSql);
const getNoteContainByID = id => findOne(NoteContainPostgreSql, id);
export { getNoteContainByID, getNotesContain, createNoteContain };
