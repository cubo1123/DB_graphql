import {
  employees,
  providers,
  ordersContain,
  products,
  contains,
  notes,
  schedules,
  typeEmployee,
  orders,
  prices,
  clients,
  costs,
  units
} from "../mockup";
import { getClients, getClientByID } from "../db/instances/Clients";
export default {
  async clients(parent, args, ctx, info) {
    let AllClients = [];
    return getClients()
      .then(clients => {
        clients.forEach(client => {
          AllClients.push(client.dataValues);
        });
        console.log(AllClients);
        return AllClients;
      })
      .catch(err => {
        return err;
      });
    /*if (args.id) {
      return clients.filter(client => {
        return client.id === args.id;
      });
    }
    return clients;*/
  },
  costs(parent, args, ctx, info) {
    if (args.id) {
      return costs.filter(cost => {
        return cost.id === args.id;
      });
    }
    return costs;
  },
  employees(parent, args, ctx, info) {
    if (args.id) {
      return employees.filter(employee => {
        return employee.id === args.id;
      });
    }
    return employees;
  },
  noteContains(parent, args, ctx, info) {
    if (args.id) {
      return contains.filter(noteContain => {
        return noteContain.id === args.id;
      });
    }
    return contains;
  },
  notes(parent, args, ctx, info) {
    if (args.id) {
      return notes.filter(note => {
        return note.id === args.id;
      });
    }
    return notes;
  },
  orderContains(parent, args, ctx, info) {
    if (args.id) {
      return ordersContain.filter(orderContain => {
        return orderContain.id === args.id;
      });
    }
    return ordersContain;
  },
  orders(parent, args, ctx, info) {
    if (args.id) {
      return orders.filter(order => {
        return order.id === args.id;
      });
    }
    return orders;
  },
  prices(parent, args, ctx, info) {
    if (args.id) {
      return prices.filter(price => {
        return price.id === args.id;
      });
    }
    return prices;
  },
  products(parent, args, ctx, info) {
    if (args.id) {
      return products.filter(product => {
        return product.id === args.id;
      });
    }
    return products;
  },
  providers(parent, args, ctx, info) {
    if (args.id) {
      return providers.filter(provider => {
        return provider.id === args.id;
      });
    }
    return providers;
  },
  schedules(parent, args, ctx, info) {
    if (args.id) {
      return schedules.filter(schedule => {
        return schedule.id === args.id;
      });
    }
    return schedules;
  },
  typeEmployees(parent, args, ctx, info) {
    if (args.id) {
      return typeEmployee.filter(type => {
        return type.id === args.id;
      });
    }
    return typeEmployee;
  },
  units(parent, args, ctx, info) {
    if (args.id) {
      return units.filter(unit => {
        return unit.id === args.id;
      });
    }
    return units;
  }
};
