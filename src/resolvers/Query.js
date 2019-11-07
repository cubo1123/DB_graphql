import {
  getClients,
  getClientByID,
  getCosts,
  getCostById,
  getEmployeeByID,
  getEmployees,
  getNoteContainByID,
  getNotesContain,
  getNoteByID,
  getNotes,
  getOrdersContain,
  getOrdersContainById,
  getOrder,
  getOrderById,
  getPrices,
  getPricesById,
  getProducts,
  getProductById,
  getProviders,
  getProviderById,
  getSchedules,
  getScheduleByID,
  getTypeByID,
  getTypes,
  getUnits,
  getUnitsById
} from "../db/instances";

export default {
  async clients(parent, args, ctx, info) {
    return args.id
      ? getClientByID(args.id)
          .then(client => client)
          .catch(err => err)
      : getClients()
          .then(clients => clients)
          .catch(err => err);
  },
  async costs(parent, args, ctx, info) {
    return args.id
      ? getCostById(args.id)
          .then(cost => cost)
          .catch(err => err)
      : getCosts()
          .then(costs => costs)
          .catch(err => err);
  },
  async employees(parent, args, ctx, info) {
    return args.id
      ? getEmployeeByID(args.id)
          .then(employee => employee)
          .catch(err => err)
      : getEmployees()
          .then(employees => employees)
          .catch(err => err);
  },
  async noteContains(parent, args, ctx, info) {
    return args.id
      ? getNoteContainByID(args.id)
          .then(noteContain => noteContain)
          .catch(err => err)
      : getNotesContain()
          .then(notesContain => notesContain)
          .catch(err => err);
  },
  async notes(parent, args, ctx, info) {
    return args.id
      ? getNoteByID(args.id)
          .then(note => note)
          .catch(err => err)
      : getNotes()
          .then(notes => notes)
          .catch(err => err);
  },
  async orderContains(parent, args, ctx, info) {
    return args.id
      ? getOrdersContainById(args.id)
          .then(orderContain => orderContain)
          .catch(err => err)
      : getOrdersContain()
          .then(orderContains => orderContains)
          .catch(err => err);
  },
  async orders(parent, args, ctx, info) {
    return args.id
      ? getOrderById(args.id)
          .then(order => order)
          .catch(err => err)
      : getOrder()
          .then(orders => orders)
          .catch(err => err);
  },
  async prices(parent, args, ctx, info) {
    return args.id
      ? getPricesById(args.id)
          .then(price => price)
          .catch(err => err)
      : getPrices()
          .then(prices => prices)
          .catch(err => err);
  },
  async products(parent, args, ctx, info) {
    return args.id
      ? getProductById(args.id)
          .then(product => product)
          .catch(err => err)
      : getProducts()
          .then(products => products)
          .catch(err => err);
  },
  async providers(parent, args, ctx, info) {
    return args.id
      ? getProviderById(args.id)
          .then(provider => provider)
          .catch(err => err)
      : getProviders()
          .then(providers => providers)
          .catch(err => err);
  },
  async schedules(parent, args, ctx, info) {
    return args.id
      ? getScheduleByID(args.id)
          .then(schedule => schedule)
          .catch(err => err)
      : getSchedules()
          .then(schedules => schedules)
          .catch(err => err);
  },
  async typeEmployees(parent, args, ctx, info) {
    return args.id
      ? getTypeByID(args.id)
          .then(type => type)
          .catch(err => err)
      : getTypes()
          .then(types => types)
          .catch(err => err);
  },
  async units(parent, args, ctx, info) {
    return args.id
      ? getUnitsById(args.id)
          .then(unit => unit)
          .catch(err => err)
      : getUnits()
          .then(units => units)
          .catch(err => err);
  }
};
