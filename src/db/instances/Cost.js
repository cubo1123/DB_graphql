import { CostPostgreSql } from "../";
import { findAll, findOne, create } from "../query";

const createCost = data => create(CostPostgreSql, data);
const getCostById = id => findOne(CostPostgreSql, id);
const getCosts = () => findAll(CostPostgreSql);
export { getCostById, getCosts, createCost };
