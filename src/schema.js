import { gql } from "apollo-server-express";
export const typeDefs = gql`
  enum ENUMStatus {
    Active
    Inactive
  }

  type Mutation {
    createClient(data: CreateClient!): Client!
    createEmployee(data: CreateEmployee!): Employee!
  }

  input CreateEmployee {
    name: String!
    lastName: String!
    address: String!
    typeEmployee: ID!
    schedule: ID!
    startDate: String!
    status: String!
    salary: Float!
    endDate: String!
  }

  input CreateClient {
    name: String!
    lastName: String!
    address: String!
    telephone: String!
    creditAvailable: Float!
    creditUsed: Float!
  }

  input CreateCost {
    value: Float!
    date: String!
    product: ID!
  }

  type Query {
    clients(id: String): [Client!]!
    costs(id: String): [Cost!]!
    employees(id: String): [Employee!]!
    noteContains(id: String): [NoteContain!]!
    notes(id: String): [Note!]!
    orderContains(id: String): [OrderContain!]!
    orders(id: String): [Order!]!
    prices(id: String): [Price!]!
    products(id: String): [Product]!
    providers(id: String): [Provider!]!
    schedules(id: String): [Schedule!]!
    typeEmployees(id: String): [TypeEmployee!]!
    units(id: String): [Unit!]!
  }
  type Employee {
    id: ID!
    name: String!
    lastName: String!
    address: String!
    typeEmployee: TypeEmployee!
    schedule: Schedule!
    startDate: String!
    status: ENUMStatus!
    salary: Float!
    endDate: String!
  }

  type TypeEmployee {
    id: ID!
    job: String!
    description: String!
  }

  type Schedule {
    id: ID!
    start: String!
    finish: String!
  }

  type Client {
    id: ID!
    name: String!
    lastName: String!
    address: String!
    telephone: String!
    creditAvailable: Float!
    creditUsed: Float!
  }

  type Note {
    id: ID!
    date: String!
    client: Client!
    employee: Employee!
  }

  type NoteContain {
    id: ID!
    quantity: Float!
    unit: Unit!
    product: Product!
    note: Note!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    onStock: Float!
    cost: [Cost!]!
    price: [Price!]!
    provider: Provider
    unit: Unit!
  }

  type Unit {
    id: ID!
    name: String!
  }

  type Cost {
    id: ID!
    value: Float!
    date: String!
    product: Product!
  }

  type Price {
    id: ID!
    value: Float!
    date: String!
    product: Product!
  }

  type Order {
    id: ID!
    provider: Provider!
    createdAt: String!
    arrivedAt: String
  }

  type OrderContain {
    id: ID!
    product: Product!
    belongTo: Order!
    quantity: Float!
    unit: Unit!
  }

  type Provider {
    id: ID!
    name: String!
    telephone: String!
    address: String!
  }
`;
