import { CostPostgreSql } from "../";
import { findAll, findOne } from "../query";

const getCostById = id => findOne(CostPostgreSql, id);
const getCosts = () => findAll(CostPostgreSql);
export { getCostById, getCosts };
