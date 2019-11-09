import { SchedulePostgreSql } from "../";
import { findAll, findOne, create } from "../query";

const createSchedule = data => create(SchedulePostgreSql, data);
const getSchedules = () => findAll(SchedulePostgreSql);

const getScheduleByID = id => findOne(SchedulePostgreSql, id);

export { getSchedules, getScheduleByID, createSchedule };
