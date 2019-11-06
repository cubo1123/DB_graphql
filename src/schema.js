import { gql } from "apollo-server-express";
export const typeDefs = gql`
  enum ENUMStatus {
    Active
    Inactive
  }

  type Mutation {
    createClient: String!
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
    paid: Float!
    endDate: String!
  }

  type TypeEmployee {
    id: ID!
    job: String!
    description: String!
  }

  type Schedule {
    id: ID!
    startTime: String!
    endTime: String!
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
    quantity: Int!
    type: Unit!
    product: Product!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    onStock: Int!
  }

  type Unit {
    id: ID!
    name: String!
  }

  type Cost {
    id: ID!
    value: Float
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
    creationDate: String!
    arriveDate: String
  }

  type OrderContain {
    id: ID!
    product: Product!
    order: Order!
    quantity: Int!
  }

  type Provider {
    id: ID!
    name: String!
    telephone: String!
  }
`;
