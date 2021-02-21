import { useReducer } from "react";
import { Router, useRouter } from "next/router";
import styled from "styled-components";
import { ApolloProvider } from "@apollo/client";
import NProgress from "nprogress";

import { AnimatePresence, motion } from "framer-motion";
import GlobalStyle from "../styles/global";
import { AuthProvider } from "../lib/Authentication";
import withApollo from "../lib/withApollo";

import { GlobalContext } from "../context/context";
import { initialState, globalReducer } from "../context/reducer";

import { Header } from "../components/global/Header";
import Footer from "../components/global/Footer";

const MyApp = ({ Component, pageProps, apollo }) => {
  const [store, dispatch] = useReducer(globalReducer, initialState);
  const router = useRouter();

  Router.events.on("routerChangeStart", () => NProgress.start());
  Router.events.on("routerChangeComplete", () => NProgress.done());
  Router.events.on("routerChangeError", () => NProgress.done());

  return (
    <ApolloProvider client={apollo}>
      <GlobalContext.Provider value={{ store, dispatch }}>
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
      </GlobalContext.Provider>
    </ApolloProvider>
  );
};

const ComponentS = styled(motion.main)`
  display: grid;
`;

MyApp.getInitialProps = async function ({ Component, ctx }: any) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  // @ts-ignore
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withApollo(MyApp);
