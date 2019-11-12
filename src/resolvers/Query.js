import {
  getClients,
  getClientByID,
  getCosts,
  getCostById,
  getEmployeeByID,
  getEmployees,
  getNoteByID,
  getNotes,
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
  async clients(parent, args, { ClientPostgreSql }, info) {
    return args.id
      ? getClientByID(ClientPostgreSql, args.id)
          .then(client => [client])
          .catch(err => err)
      : getClients(ClientPostgreSql)
          .then(clients => clients)
          .catch(err => err);
  },
  async costs(parent, args, { CostPostgreSql }, info) {
    return args.id
      ? getCostById(CostPostgreSql, args.id)
          .then(cost => cost)
          .catch(err => err)
      : getCosts(CostPostgreSql)
          .then(costs => costs)
          .catch(err => err);
  },
  async employees(parent, args, { EmployeePostgreSql }, info) {
    return args.id
      ? getEmployeeByID(EmployeePostgreSql, args.id)
          .then(employee => [employee])
          .catch(err => err)
      : getEmployees(EmployeePostgreSql)
          .then(employees => employees)
          .catch(err => err);
  },
  async notes(parent, args, { NotePostgreSql }, info) {
    return args.id
      ? getNoteByID(NotePostgreSql, args.id)
          .then(note => [note])
          .catch(err => err)
      : getNotes(NotePostgreSql)
          .then(notes => notes)
          .catch(err => err);
  },
  async orders(parent, args, { OrderPostgreSql }, info) {
    return args.id
      ? getOrderById(OrderPostgreSql, args.id)
          .then(order => [order])
          .catch(err => err)
      : getOrder(OrderPostgreSql)
          .then(orders => orders)
          .catch(err => err);
  },
  async prices(parent, args, { PricePostgreSql }, info) {
    return args.id
      ? getPricesById(PricePostgreSql, args.id)
          .then(price => price)
          .catch(err => err)
      : getPrices(PricePostgreSql)
          .then(prices => prices)
          .catch(err => err);
  },
  async products(parent, args, { ProductPostgreSql }, info) {
    return args.id
      ? getProductById(ProductPostgreSql, args.id)
          .then(product => product)
          .catch(err => err)
      : getProducts(ProductPostgreSql)
          .then(products => products)
          .catch(err => err);
  },
  async providers(parent, args, { ProviderPostgreSql }, info) {
    return args.id
      ? getProviderById(ProviderPostgreSql, args.id)
          .then(provider => [provider])
          .catch(err => err)
      : getProviders(ProviderPostgreSql)
          .then(providers => providers)
          .catch(err => err);
  },
  async schedules(parent, args, { SchedulePostgreSql }, info) {
    return args.id
      ? getScheduleByID(SchedulePostgreSql, args.id)
          .then(schedule => [schedule])
          .catch(err => err)
      : getSchedules(SchedulePostgreSql)
          .then(schedules => schedules)
          .catch(err => err);
  },
  async typeEmployees(parent, args, { TypeEmployeePostgreSql }, info) {
    return args.id
      ? getTypeByID(TypeEmployeePostgreSql, args.id)
          .then(type => [type])
          .catch(err => err)
      : getTypes(TypeEmployeePostgreSql)
          .then(types => types)
          .catch(err => err);
  },
  async units(parent, args, { UnitPostgreSql }, info) {
    return args.id
      ? getUnitsById(UnitPostgreSql, args.id)
          .then(unit => [unit])
          .catch(err => err)
      : getUnits(UnitPostgreSql)
          .then(units => units)
          .catch(err => err);
  }
};
