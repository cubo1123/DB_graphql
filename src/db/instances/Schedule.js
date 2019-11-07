import { SchedulePostgreSql } from "../";
import { findAll, findOne } from "../query";

const getSchedules = () => findAll(SchedulePostgreSql);

const getScheduleByID = id => findOne(SchedulePostgreSql, id);

export { getSchedules, getScheduleByID };