import { findAll, findOne, create, updateOne } from "../query";

const createSchedule = (db, data) => create(db, data);
const getSchedules = db => findAll(db);
const getScheduleByID = (db, id) => findOne(db, id);
const updateSchedule = (db, data, id) => updateOne(db, data, id);

export { getSchedules, getScheduleByID, createSchedule, updateSchedule };
