import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

import frank_logo from "../assets/branding/frank_logo";
import ArrowRight from "../assets/icons/arrowRight";

import Meta from "../components/global/Meta";
import { useEffect } from "react";
import Router from "next/router";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/home");
    }, 3000);
  }, []);
  return (
    <Container
      bg="/videography.jpg"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.35, duration: 0.75 }}
    >
      <Meta title="Welcome to Frank" />
      <Header>
        <LogoS
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -20, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.75 }}
        />
        <Link href="/home">
          <Right
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 20, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.5, duration: 0.75 }}
          >
            <H1>Continue to Frank</H1>
            <ArrowRight color="black" />
          </Right>
        </Link>
      </Header>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: grid;
  background-image: ${(props) => `url(${props.bg})`};
  background-position: center center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const Header = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  padding: 2.5vh var(--padding);
  box-sizing: border-box;
  justify-content: center;
  align-content: center;
  background-color: var(--color-whiteBg);
  gap: var(--gap);
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    grid-auto-flow: column;
    border-bottom: 1px solid var(--color-primary);
  }
`;

const LogoS = styled(motion.custom(frank_logo))`
  display: grid;
  height: 80px;
  width: auto;
`;

const Right = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: var(--gap);
`;

const H1 = styled.h1`
  font-size: 1.25em;
`;

export default Home;
