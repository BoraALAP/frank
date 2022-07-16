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

import MessengerCustomerChat, {
  showMessenger,
  hideMessenger,
  showDialog,
  hideDialog,
  setMessengerHeight,
} from "react-messenger-customer-chat";

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
          {/* <AnimatePresence exitBeforeEnter initial={false}> */}
          <Component {...pageProps} key={router.pathname} />
          <MessengerCustomerChat
            pageId="101384518267099"
            appId="1912941222249658"
          />
          <CookieConsent
            location="bottom"
            buttonText="Accept All"
            declineButtonText="Decline All"
            cookieName="localhost"
            declineCookieValue="localhost"
            enableDeclineButton
            sameSite="none"
            acceptOnScrollPercentage={50}
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
            declineButtonStyle={{
              backgroundColor: "var(--color-error)",
              color: "#fff",
              fontSize: "16px",
              padding: "8px 32px",
            }}
            expires={150}
          >
            This website uses cookies to ensure you get the best experience on
            our website.{" "}
            <a style={{ color: "#FFF" }} href="/sub/cookiePolicy">
              Read More
            </a>
          </CookieConsent>
          {/* </AnimatePresence> */}
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
