import { useReducer } from "react";
import { Router, useRouter } from "next/router";
import styled from "styled-components";
import { ApolloProvider } from "@apollo/client";
import NProgress from "nprogress";
import { AnimatePresence, motion } from "framer-motion";
import CookieConsent from "react-cookie-consent";

import GlobalStyle from "../styles/global";
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
        <GlobalStyle />
        {router.route !== "/" && <Header />}

        <ComponentS>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} key={router.pathname} />
            <CookieConsent
              location="bottom"
              buttonText="Accept All"
              cookieName="acceptingCookies"
              style={{
                background: "var(--color-primary)",
                boxSizing: "border-box",
                width: "100%",
                padding: "16px 32px",
              }}
              buttonStyle={{
                backgroundColor: "var(--color-secondary)",
                color: "#fff",
                fontSize: "16px",
                padding: "8px 32px",
              }}
              expires={150}
            >
              This website uses cookies to ensure you get the best experience on
              our website.{" "}
            </CookieConsent>
          </AnimatePresence>
        </ComponentS>

        {router.route !== "/" && <Footer />}
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
