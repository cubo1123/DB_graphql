import { createNote as create } from "../../db/instances/Notes";
import { from } from "apollo-link";
const createNote = (parent, args, ctx, info) =>
  create({
    date: args.data.date,
    client: args.data.client,
    employee: args.data.employee
  });
export { createNote };
