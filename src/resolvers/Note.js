import { getClientByID, getClients } from "../db/instances/Clients";
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
    return employees.find(employee => {
      return employee.id === parent.employee;
    });
  }
};
