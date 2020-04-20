import { GraphQLServer } from "graphql-yoga";
import resolver from "./graphql/resolver";

const server = new GraphQLServer({
  typeDefs: "./graphql/schema.graphql",
  resolvers: resolver,
});

// graphQL 기본 포트는 4000번
const PORT = 4000;

server.start(() =>
  console.log(`graphQL server Running on : http://localhost:${PORT}`)
);
