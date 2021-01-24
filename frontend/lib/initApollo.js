import fetch from "isomorphic-unfetch";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

let apolloClient;

// Second Apollo Client which I couldn't find really good connection with the actial app
function create(initialState, req) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: createUploadLink({
      uri: `${process.env.NEXT_PUBLIC_API}`, // Server URL (must be absolute)
      credentials: "include", // Additional fetch() options like `credentials` or `headers`
      fetch,
      headers: req && req.headers,
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

// Initializing above client
export default function initApollo(initialState, req) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, req);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
