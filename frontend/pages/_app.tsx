import { useReducer } from "react";
import { useRouter } from "next/router";
import styled, { ThemeProvider } from "styled-components";

import { primaryTheme } from "../styles/theme";
import GlobalStyle from "../styles/global";
import { AuthProvider } from "../lib/Authentication";

import { GlobalContext } from "../context/context";
import { initialState, globalReducer } from "../context/reducer";

import Meta from "../components/global/Meta";
import { Header } from "../components/global/Header";
import Footer from "../components/global/Footer";
import { useApollo } from "../lib/ApolloClient";
import { ApolloProvider } from "@apollo/client";


const MyApp = ({ Component, pageProps }) => {
  const [store, dispatch] = useReducer(globalReducer, initialState);
  const router = useRouter();
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <GlobalContext.Provider value={{ store, dispatch }}>
      <ThemeProvider theme={primaryTheme}>
        <Meta />
        <ApolloProvider client={apolloClient}>
          <AuthProvider>
            {router.route !== "/" && <Header />}
            <ComponentS>
              <Component {...pageProps} />
            </ComponentS>
            <Footer />
          </AuthProvider>
        </ApolloProvider>
        <GlobalStyle />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

const ComponentS = styled.main`
  display: grid;
`;

export default MyApp;
