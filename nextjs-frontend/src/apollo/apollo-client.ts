import { ApolloClient, InMemoryCache } from "@apollo/client";
import { typeDefs } from "./typeDefs";

const client = new ApolloClient({
  typeDefs,
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
