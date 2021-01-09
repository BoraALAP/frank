import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

import VideoImage from "../assets/images/videography.jpg";
import Logo from "../assets/branding/frank_logo";
import ArrowRight from "../assets/icons/arrowRight";

import Meta from "../components/global/Meta";

const Home = () => {
  return (
    <Container
      bg={VideoImage}
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
            <ArrowRight />
          </Right>
        </Link>
      </Header>
    </Container>
  );
};

const Container = styled(motion.div)`
  background-image: ${(props) => `url(${props.bg})`};
  background-position: center center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const Header = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 2.5vh ${({ theme }) => theme.pagePaddingW};
  background-color: ${({ theme }) => theme.color.whiteBg};
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
`;

const LogoS = styled(motion.custom(Logo))`
  display: grid;
  height: 80px;
  width: auto;
`;

const Right = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: calc(${({ theme }) => theme.padding} / 2);
`;

const H1 = styled.h1`
  font-size: 1.25em;
`;

export default Home;
