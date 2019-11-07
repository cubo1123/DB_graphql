import express from "express";
import { resolvers } from "./resolvers";
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./schema";

const schema = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: "/graphql"
  }
});

const app = express();
schema.applyMiddleware({ app });

app.listen(3000, () => {
  console.log("Live on http://localhost:3000/graphql");
});
