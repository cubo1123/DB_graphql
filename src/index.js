import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import { TypeEmployee } from "./db/type_employees";
import { employees } from "./mockup";

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log("im awake bitches");
});
