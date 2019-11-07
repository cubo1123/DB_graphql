import { Cost } from "../costs";
import { findAll, findOne } from "../query";

const getCostById = id => findOne(Cost, id);
const getCosts = () => findAll(Cost);
export { getCostById, getCosts };
