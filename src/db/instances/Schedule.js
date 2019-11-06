import { SchedulePostgreSql } from "../schedules";
import { findAll, findOne } from "../snippets";

const getSchedules = () => findAll(SchedulePostgreSql);

const getScheduleByID = id => findOne(SchedulePostgreSql, id);

export { getSchedules, getScheduleByID };
