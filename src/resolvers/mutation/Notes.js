import {
  createNote as create,
  createNoteContainsMany
} from "../../db/instances";
const createNote = (
  parent,
  { data },
  { NotePostgreSql, NoteContainPostgreSql },
  info
) => {
  return create(NotePostgreSql, {
    client: data.client,
    employee: data.employee,
    products: data.products
  })
    .then(note => {
      let productsToSave = data.products.map(product => {
        return Object.assign(product, { note: note.id });
      });
      return createNoteContainsMany(
        NoteContainPostgreSql,
        productsToSave,
        note.id
      )
        .then(contains => {
          return note;
        })
        .catch(err => {
          return err;
        });
    })
    .catch(err => {
      return err;
    });
};

export { createNote };
