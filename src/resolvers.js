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
} from "./mockup";
const resolvers = {
  Query: {
    employees(parent, args, ctx, info) {
      if (args.query) {
        return employees.find(employee => {
          return employee.id === args.query;
        });
      }
      return employees;
    },
    providers(parent, args, ctx, info) {
      if (args.query) {
        return providers.find(provider => {
          return provider.id === args.query;
        });
      }
      return providers;
    },
    products(parent, args, ctx, info) {
      if (args.query) {
        return products.find(product => {
          return product.id === args.query;
        });
      }
      return products;
    },
    notes(parent, args, ctx, info) {
      if (args.query) {
        return notes.find(note => {
          return note.id === args.query;
        });
      }
      return notes;
    },
    clients(parent, args, ctx, info) {
      if (args.query) {
        return clients.find(client => {
          return client.id === args.query;
        });
      }
      return clients;
    },
    orders(parent, args, ctx, info) {
      if (args.query) {
        return orders.find(order => {
          return order.id === args.query;
        });
      }
      return orders;
    }
  },
  Employee: {
    typeEmployee(parent, args, ctx, info) {
      return typeEmployee.find(type => {
        return type.id === parent.typeEmployee;
      });
    },
    schedule(parent, args, ctx, info) {
      return schedules.find(schedule => {
        return schedule.id === parent.schedule;
      });
    }
  },
  Note: {
    client(parent, args, ctx, info) {
      return clients.find(client => {
        return client.id === parent.client;
      });
    },
    employee(parent, args, ctx, info) {
      return employees.find(employee => {
        return employee === parent.employee;
      });
    }
  },
  NoteContain: {
    product(parent, args, ctx, info) {
      products.find(product => {
        return product.id === parent.product;
      });
    },
    type(parent, args, ctx, info) {
      units.find(unit => {
        return unit.id === parent.type;
      });
    }
  },
  Cost: {
    product(parent, args, ctx, info) {
      products.find(product => {
        return product.id === parent.product;
      });
    }
  },
  Price: {
    product(parent, args, ctx, info) {
      products.find(product => {
        return product.id === parent.product;
      });
    }
  },
  Order: {
    provider(parent, args, ctx, info) {
      providers.find(provider => {
        return provider.id === parent.provider;
      });
    }
  },
  OrderContain: {
    product(parent, args, ctx, info) {
      products.find(product => {
        return product.id === parent.product;
      });
    }
  }
};

export { resolvers };
