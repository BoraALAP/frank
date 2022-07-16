import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";

import Logo from "../assets/branding/frank_logo";
import { ArrowRight } from "../assets/icons/Arrow";

import Meta from "../components/global/Meta";

const Home = () => {
  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "arttic-fox",
    },
  });

  const myVideo = cld.video(
    "frank/Downsized_3_Ostaco_Website_2_dcle5g_1_tdqwp2"
  );

  return (
    <Container
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.35, duration: 0.75 }}
    >
      <Meta title="Welcome to Frank™" />
      <Header>
        <Link href="/home">
          <A>
            <Logo height="160px" />

            <Right
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 20, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.5, duration: 0.75 }}
            >
              {/* <H1>Continue to Frank™</H1> */}
              <ArrowRight color="var(--color-primary)" />
            </Right>
          </A>
        </Link>
      </Header>

      <VideoS cldVid={myVideo} autoPlay muted loop />
    </Container>
  );
};

const Container = styled(motion.div)`
  display: grid;

  height: 100vh;
  width: 100vw;
`;

const A = styled.div`
  display: grid;
  gap: var(--gap);
  cursor: pointer;
`;

const VideoS = styled(AdvancedVideo)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  justify-content: center;

  object-fit: cover;
  video {
    width: 100vw;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  align-items: center;
  padding: 2.5vh var(--padding);
  box-sizing: border-box;
  grid-auto-flow: row;
  justify-items: center;
  z-index: 10;
  align-content: center;
  background-color: var(--color-whiteBg);
  gap: var(--gap);
  @media screen and (min-width: 768px) {
    border-bottom: 1px solid var(--color-primary);
  }
`;

const Right = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap);
`;

const H1 = styled.h1`
  font-size: 1.25em;
`;

export default Home;
