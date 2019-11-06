import { NotePostgreSql } from "../notes";
import { findAll, findOne } from "../snippets";

const getNotes = () => findAll(NotePostgreSql);
const getNoteByID = id => findOne(NotePostgreSql, id);
export { getNoteByID, getNotes };
