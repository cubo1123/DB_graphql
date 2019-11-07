import { NoteContainPostgreSql } from "../";
import { findAll, findOne } from "../query";

const getNotesContain = () => findAll(NoteContainPostgreSql);
const getNoteContainByID = id => findOne(NoteContainPostgreSql, id);
export { getNoteContainByID, getNotesContain };
