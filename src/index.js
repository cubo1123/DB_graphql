import express from "express";
import { makeExecutableSchema } from "graphql-tools";
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

// Start the server
app.listen(3000, () => {
  console.log("Go to http://localhost:3000/graphiql to run queries!");
});
