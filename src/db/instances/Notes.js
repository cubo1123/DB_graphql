import { NotePostgreSql } from "../";
import { findAll, findOne, create } from "../query";

const createNote = data => create(NotePostgreSql, data);
const getNotes = () => findAll(NotePostgreSql);
const getNoteByID = id => findOne(NotePostgreSql, id);
export { getNoteByID, getNotes, createNote };
