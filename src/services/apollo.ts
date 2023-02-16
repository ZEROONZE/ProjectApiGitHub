import { ApolloClient, InMemoryCache } from "@apollo/client";

import { token } from "./Api";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  cache: new InMemoryCache(),
});
export default client;
