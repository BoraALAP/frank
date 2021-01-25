import { useMemo } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

let apolloClient;

// To be honest there is 2 different create Apollo so this one is the one I can see connected to actual site
function createApolloClient(req) {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createUploadLink({
      uri: process.env.NEXT_PUBLIC_API_URL,
      // headers: req && req.headers,
      credentials: "include",
    }),
    credentials: "include",
    cache: new InMemoryCache(),
  });
}

// This keep the store Client
export function initializeApollo(initialState = null, req?) {
  const _apolloClient = apolloClient ?? createApolloClient(req);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

//Turns store a hook
export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
