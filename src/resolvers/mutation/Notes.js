import { createNote as create } from "../../db/instances/Notes";
import { createContainsMany } from "../../db/instances/NoteContains";
const createNote = (
  parent,
  { data },
  { NotePostgreSql, NoteContainPostgreSql },
  info
) => {
  return create(NotePostgreSql, {
    date: data.date,
    client: data.client,
    employee: data.employee,
    products: data.products
  })
    .then(note => {
      let productsToSave = data.products.map(product => {
        return Object.assign(product, { note: note.id });
      });
      return createContainsMany(NoteContainPostgreSql, productsToSave, note.id)
        .then(contains => {
          console.log("TODO BIEN");
          console.log(contains);
          return note;
        })
        .catch(err => {
          console.log("ERROR");
          return err;
        });
    })
    .catch(err => {
      return err;
    });
};

export { createNote };
