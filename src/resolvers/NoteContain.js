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
};
