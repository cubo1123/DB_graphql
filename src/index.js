import express from "express";
import { resolvers } from "./resolvers";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema";
import { sequelize } from "./db/model";
import {
  ClientPostgreSql,
  CostPostgreSql,
  EmployeePostgreSql,
  NoteContainPostgreSql,
  NotePostgreSql,
  OrderContainPostgreSql,
  OrderPostgreSql,
  PricePostgreSql,
  ProductPostgreSql,
  ProviderPostgreSql,
  SchedulePostgreSql,
  TypeEmployeePostgreSql,
  UnitPostgreSql
} from "./db";
import { from } from "apollo-link";

const schema = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: "/graphql"
  },
  context: {
    ClientPostgreSql: ClientPostgreSql.init(sequelize),
    CostPostgreSql: CostPostgreSql.init(sequelize),
    EmployeePostgreSql: EmployeePostgreSql.init(sequelize),
    NoteContainPostgreSql: NoteContainPostgreSql.init(sequelize),
    NotePostgreSql: NotePostgreSql.init(sequelize),
    OrderContainPostgreSql: OrderContainPostgreSql.init(sequelize),
    OrderPostgreSql: OrderPostgreSql.init(sequelize),
    PricePostgreSql: PricePostgreSql.init(sequelize),
    ProductPostgreSql: ProductPostgreSql.init(sequelize),
    ProviderPostgreSql: ProviderPostgreSql.init(sequelize),
    SchedulePostgreSql: SchedulePostgreSql.init(sequelize),
    TypeEmployeePostgreSql: TypeEmployeePostgreSql.init(sequelize),
    UnitPostgreSql: UnitPostgreSql.init(sequelize)
  }
});

const app = express();
schema.applyMiddleware({ app });

app.listen(3000, () => {
  console.log("Live on http://localhost:3000/graphql");
});
