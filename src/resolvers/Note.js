import { getClientByID } from "../db/instances";
import { getEmployeeByID } from "../db/instances";
export default {
  async client(parent, args, ctx, info) {
    return getClientByID(parent.client)
      .then(client => {
        return client;
      })
      .catch(err => {
        return err;
      });
  },
  async employee(parent, args, ctx, info) {
    return getEmployeeByID()
      .then(employee => {
        return employee;
      })
      .catch(err => {
        return err;
      });
  }
};
