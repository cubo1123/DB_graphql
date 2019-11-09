import { findAll, findOne, create } from "../query";

const createSchedule = (db, data) => create(db, data);
const getSchedules = db => findAll(db);
const getScheduleByID = (db, id) => findOne(db, id);

export { getSchedules, getScheduleByID, createSchedule };
