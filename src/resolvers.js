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
      if (args.id) {
        return employees.filter(employee => {
          return employee.id === args.id;
        });
      }
      return employees;
    },
    providers(parent, args, ctx, info) {
      if (args.id) {
        return providers.filter(provider => {
          return provider.id === args.id;
        });
      }
      return providers;
    },
    products(parent, args, ctx, info) {
      if (args.id) {
        return products.filter(product => {
          return product.id === args.id;
        });
      }
      return products;
    },
    notes(parent, args, ctx, info) {
      if (args.id) {
        return notes.filter(note => {
          return note.id === args.id;
        });
      }
      return notes;
    },
    clients(parent, args, ctx, info) {
      if (args.id) {
        return clients.filter(client => {
          return client.id === args.id;
        });
      }
      return clients;
    },
    orders(parent, args, ctx, info) {
      if (args.id) {
        return orders.filter(order => {
          return order.id === args.id;
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
        return employee.id === parent.employee;
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
      return providers.find(provider => {
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
