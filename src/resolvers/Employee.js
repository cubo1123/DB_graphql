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
};
