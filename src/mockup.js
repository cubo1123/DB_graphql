const employees = [
  {
    id: "11",
    name: "Enrique",
    lastName: "Perez",
    address: "la verga",
    typeEmployee: "235813",
    schedule: "813",
    startDate: "Date!",
    status: "Enum!",
    paid: 5000,
    endDate: "Date!"
  },
  {
    id: "112",
    name: "Alguien",
    lastName: "Mas",
    address: "La chingada",
    typeEmployee: "2358",
    schedule: "81321",
    startDate: "Date!",
    status: "Enum!",
    paid: 3000,
    endDate: "Date!"
  },
  {
    id: "1123",
    name: "Otro",
    lastName: "nuevo",
    address: "la misma que los otros dos",
    typeEmployee: "235",
    schedule: "81321",
    startDate: "Date!",
    status: "Enum!",
    paid: 15000,
    endDate: "Date!"
  }
];
const typeEmployee = [
  { id: "235", job: "Encargado", description: "es el vergas" },
  { id: "2358", job: "Despachador", description: "el que te da las cosas" },
  { id: "235813", job: "Vendedor", description: "el que te las vende" }
];
const schedules = [
  { id: "813", startTime: "Date!", endTime: "Date!" },
  { id: "81321", startTime: "Date!", endTime: "Date!" },
  { id: "8132134", startTime: "Date!", endTime: "Date!" }
];
const clients = [
  {
    id: "2134",
    name: "La do;a pelos",
    lastName: "peluca",
    address: "en la casa de adobe",
    telephone: "231456975",
    creditAvailable: 5000,
    creditUsed: 3000
  },
  {
    id: "213455",
    name: "la abuelita",
    lastName: "cabezablanca",
    address: "la casa con arboles",
    telephone: "75315964",
    creditAvailable: 10000,
    creditUsed: 0
  },
  {
    id: "21345594",
    name: "el morrito",
    lastName: "del vecindario",
    address: "la casa sola",
    telephone: "78895325",
    creditAvailable: 500,
    creditUsed: 500
  }
];
const notes = [
  {
    id: "5594",
    date: "Date!",
    client: "21345594",
    employee: "1123"
  },
  {
    id: "94149",
    date: "Date!",
    client: "213455",
    employee: "11"
  },
  {
    id: "149243",
    date: "Date!",
    client: "213455",
    employee: "112"
  }
];
const contains = [
  { id: "243392", quantity: 5, type: "Unit!", product: "753" },
  { id: "392635", quantity: 7, type: "Unit!", product: "357" },
  { id: "6351027", quantity: 9, type: "Unit!", product: "159" }
];
const products = [
  {
    id: "753",
    name: "Picafresas",
    description: "estan bien chidoris",
    onStock: 20
  },
  {
    id: "357",
    name: "Chetos rojos",
    description: "pinche cancer en bolsa",
    onStock: 15
  },
  {
    id: "159",
    name: "llavesitas de goma",
    description: "anuma mi infancia",
    onStock: 15
  }
];
const units = [
  { id: "856", name: "Gramos" },
  { id: "698", name: "Kilos" },
  { id: "753", name: "Producto" }
];
const costs = [
  { id: "213", value: 5, date: "Date!", product: "753" },
  { id: "3456", value: 253.5, date: "Date!", product: "357" },
  { id: "978565", value: 756.452123, date: "Date!", product: "159" }
];
const prices = [
  { id: "963147", value: 758.6, date: "Date!", product: "753" },
  { id: "6789876", value: 10.5, date: "Date!", product: "357" },
  { id: "75315", value: 986, date: "Date!", product: "159" }
];
const orders = [
  {
    id: "4",
    provider: "Provider!",
    creationDate: "Date!",
    arriveDate: "Date"
  },
  {
    id: "5",
    provider: "Provider!",
    creationDate: "Date!",
    arriveDate: "Date"
  },
  {
    id: "6",
    provider: "Provider!",
    creationDate: "Date!",
    arriveDate: "Date"
  }
];
const ordersContain = [
  {
    id: "1001",
    product: "753",
    order: "4",
    quantity: 5
  },
  {
    id: "1002",
    product: "357",
    order: "4",
    quantity: 27
  },
  {
    id: "1003",
    product: "159",
    order: "4",
    quantity: 1
  },
  ,
  {
    id: "1003",
    product: "159",
    order: "5",
    quantity: 2
  },
  {
    id: "1003",
    product: "159",
    order: "6",
    quantity: 3
  }
];
const providers = [
  { id: "5000", name: "La Rosa", telephone: "7589" },
  { id: "5001", name: "Nico", telephone: "753159" },
  { id: "666", name: "Tinajitas", telephone: "75896" }
];

export {
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
};
