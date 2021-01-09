import { useReducer } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";

import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Query } from "@keystonejs/apollo-helpers";
import { ApolloProvider, gql } from "@apollo/client";

import { primaryTheme } from "../styles/theme";
import GlobalStyle from "../styles/global";

import { GlobalContext } from "../context/context";
import { initialState, globalReducer } from "../context/reducer";

import Meta from "../components/global/Meta";
import { Header } from "../components/global/Header";
import Footer from "../components/global/Footer";
import Loading from "../components/global/Loading";

const MyApp = ({ Component, pageProps }) => {
  const client = new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_API_URL,

      fetchOptions: {
        mode: "cors",
      },
    }),
  });
  const [store, dispatch] = useReducer(globalReducer, initialState);
  const router = useRouter();

  return (
    <GlobalContext.Provider value={{ store, dispatch }}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={primaryTheme}>
          <Meta />
          {router.route !== "/" && <Header />}
          <Query query={QUERY}>
            {({ loading }) => {
              if (loading) {
                return <Loading />;
              } else {
                return <Component {...pageProps} />;
              }
            }}
          </Query>
          <Footer />
          <GlobalStyle />
        </ThemeProvider>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
};

const QUERY = gql`
  query {
    allOperations {
      id
      name
      defaultImage
      video
      place
    }
  }
`;

export default MyApp;
