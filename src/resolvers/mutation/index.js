import { createClient, updateClient } from "./Clients";
import { createSchedule, updateSchedule } from "./Schedule";
import { createEmployee, updateEmployee } from "./Employees";
import { createNote } from "./Notes";
import { createOrder } from "./Order";
import { createProvider, updateProvider, deleteProvider } from "./Provider";
import { deletePrice } from "./Price";
import {
  createTypeEmployee,
  updateTypeEmployee,
  deleteTypeEmployee
} from "./TypeEmployee";
import { createUnit, updateUnit, deleteUnit } from "./Unit";
import { createProduct, updateProduct } from "./Product";
import { deleteCost } from "./Cost";
export default {
  createClient,
  createEmployee,
  createSchedule,
  createNote,
  createOrder,
  createProvider,
  createTypeEmployee,
  createUnit,
  updateClient,
  updateEmployee,
  updateSchedule,
  updateProvider,
  updateTypeEmployee,
  updateUnit,
  createProduct,
  updateProduct,
  deleteProvider,
  deleteTypeEmployee,
  deleteUnit,
  deletePrice,
  deleteCost
};
