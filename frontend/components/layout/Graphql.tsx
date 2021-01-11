import React from "react";
import styled from "styled-components";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const Graphql = ({ children }) => {
  const client = new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache(),
    uri: process.env.NEXT_PUBLIC_API_URL,
  });
  return (
    <ApolloProvider client={client}>
      <Container>{children}</Container>
    </ApolloProvider>
  );
};

const Container = styled.div`
  display: grid;
`;

export default Graphql;
