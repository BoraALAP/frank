import { useReducer } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";

import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { KeystoneProvider } from "@keystonejs/apollo-helpers";
// import { ApolloProvider } from "react-apollo";
import { ApolloProvider } from "@apollo/client";

import { primaryTheme } from "../styles/theme";
import GlobalStyle from "../styles/global";

import { initialState, globalReducer } from "../context/reducer";

import Meta from "../components/global/Meta";
import { Header } from "../components/global/Header";
import { globalContext } from "../context/contex";
import Footer from "../components/global/Footer";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:3000/admin/api",
    fetchOptions: {
      credentials: "include",
    },
  }),
  cache: new InMemoryCache(),
});

const MyApp = ({ Component, pageProps }) => {
  const [store, dispatch] = useReducer(globalReducer, initialState);
  const router = useRouter();

  return (
    <ApolloProvider client={client}>
      <KeystoneProvider>
        <ThemeProvider theme={primaryTheme}>
          <Meta />
          {router.route !== "/" && <Header />}
          <Component {...pageProps} />
          <Footer />
          <GlobalStyle />
        </ThemeProvider>
      </KeystoneProvider>
    </ApolloProvider>
  );
};

export default MyApp;
