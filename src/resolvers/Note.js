import {
  employees,
  providers,
  ordersContain,
  products,
  contains,
  notes,
  clients,
  schedules,
  typeEmployee,
  orders,
  prices,
  costs,
  units
} from "../mockup";
export default {
  client(parent, args, ctx, info) {
    return clients.find(client => {
      return client.id === parent.client;
    });
  },
  employee(parent, args, ctx, info) {
    return employees.find(employee => {
      return employee.id === parent.employee;
    });
  }
};
