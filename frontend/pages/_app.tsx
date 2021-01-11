import { useReducer } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";

import { primaryTheme } from "../styles/theme";
import GlobalStyle from "../styles/global";

import { GlobalContext } from "../context/context";
import { initialState, globalReducer } from "../context/reducer";

import Meta from "../components/global/Meta";
import { Header } from "../components/global/Header";
import Footer from "../components/global/Footer";
import Loading from "../components/global/Loading";
import Graphql from "../components/layout/Graphql";

const MyApp = ({ Component, pageProps }) => {
  const [store, dispatch] = useReducer(globalReducer, initialState);
  const router = useRouter();

  return (
    <GlobalContext.Provider value={{ store, dispatch }}>
      <ThemeProvider theme={primaryTheme}>
        <Meta />
        <Graphql>
          {router.route !== "/" && <Header />}
          <Component {...pageProps} />
          <Footer />
        </Graphql>
        <GlobalStyle />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default MyApp;
