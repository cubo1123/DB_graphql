import { getClientByID } from "../db/instances";
import { getEmployeeByID } from "../db/instances";
export default {
  async client(parent, args, { ClientPostgreSql }, info) {
    return getClientByID(ClientPostgreSql, parent.client)
      .then(client => client)
      .catch(err => err);
  },
  async employee(parent, args, { EmployeePostgreSql }, info) {
    return getEmployeeByID(EmployeePostgreSql, parent.employee)
      .then(employee => {
        return employee;
      })
      .catch(err => {
        return err;
      });
  }
};
