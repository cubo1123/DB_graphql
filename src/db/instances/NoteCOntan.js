import { NoteContainPostgreSql } from "../note_contains";
import { findAll, findOne } from "../snippets";

const getNotesContain = () => findAll(NoteContainPostgreSql);
const getNoteContainByID = id => findOne(NoteContainPostgreSql, id);
export { getNoteContainByID, getNotesContain };
