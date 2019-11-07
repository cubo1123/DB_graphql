import { NotePostgreSql } from "../notes";
import { findAll, findOne } from "../query";

const getNotes = () => findAll(NotePostgreSql);
const getNoteByID = id => findOne(NotePostgreSql, id);
export { getNoteByID, getNotes };
