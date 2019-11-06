import { OrderPostgreSql } from "../orders";
import { findAll, findOne } from "../snippets";

const getOrder = () => findAll(OrderPostgreSql);
const getNoteById = id => findOne(OrderPostgreSql, id);
export { getNoteById, getOrder };
