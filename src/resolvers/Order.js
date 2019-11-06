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
  provider(parent, args, ctx, info) {
    return providers.find(provider => {
      return provider.id === parent.provider;
    });
  }
};
