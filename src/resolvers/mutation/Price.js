import { deletePrice as deleteP } from "../../db/instances";
const deletePrice = (parent, { id }, { PricePostgreSql }, info) => {
  return deleteP(PricePostgreSql, id);
};

export { deletePrice };
