import { useReducer } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { ApolloProvider } from "@apollo/client";

import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";
import GlobalStyle from "../styles/global";
import { AuthProvider } from "../lib/Authentication";

import { GlobalContext } from "../context/context";
import { initialState, globalReducer } from "../context/reducer";

import { Header } from "../components/global/Header";
import Footer from "../components/global/Footer";
import { useApollo } from "../lib/ApolloClient";

const MyApp = ({ Component, pageProps }) => {
  const [store, dispatch] = useReducer(globalReducer, initialState);
  const router = useRouter();
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <GlobalContext.Provider value={{ store, dispatch }}>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <GlobalStyle />
          {router.route !== "/" && <Header />}

          <ComponentS>
            <AnimatePresence exitBeforeEnter initial={false}>
              <Component {...pageProps} key={router.pathname} />
            </AnimatePresence>
          </ComponentS>

          {router.route !== "/" && <Footer />}
        </AuthProvider>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
};

const ComponentS = styled(motion.main)`
  display: grid;
`;

export default MyApp;
