import { useReducer } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";

import { primaryTheme } from "../styles/theme";
import GlobalStyle from "../styles/global";

import { initialState, globalReducer } from "../context/reducer";

import Meta from "../components/global/Meta";
import { Header } from "../components/global/Header";
import { globalContext } from "../context/contex";
import Footer from "../components/global/Footer";

const MyApp = ({ Component, pageProps }) => {
  const [store, dispatch] = useReducer(globalReducer, initialState);
  const router = useRouter();

  return (
    <ThemeProvider theme={primaryTheme}>
      <Meta />
      {router.route !== "/" && <Header />}
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
