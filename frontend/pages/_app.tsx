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
import Graphql from "../components/layout/Graphql";

const MyApp = ({ Component, pageProps }) => {
  const [store, dispatch] = useReducer(globalReducer, initialState);
  const router = useRouter();

  return (
    <GlobalContext.Provider value={{ store, dispatch }}>
      <ThemeProvider theme={primaryTheme}>
        <Meta />
        <Graphql>
          <AuthProvider>
            {router.route !== "/" && <Header />}
            <ComponentS>
              <Component {...pageProps} />
            </ComponentS>
            <Footer />
          </AuthProvider>
        </Graphql>
        <GlobalStyle />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

const ComponentS = styled.main`
  display: grid;
`;

export default MyApp;
