import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log("im awake bitches");
});
