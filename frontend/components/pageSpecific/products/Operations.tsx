import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { motion, AnimatePresence } from "framer-motion";

import Details from "./Details";
import { Container } from "../../layout/Container";

interface Props {
  list?: any;
  video?: Boolean;
  title: String;
  subTitle: String;
  children?: any;
}

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const Operations = ({
  list,
  video = false,
  title = "Operations",
  subTitle,
  children,
}: Props) => {
  const [videoSrc, setVideoSrc] = useState();
  const [imageSrc, setImageSrc] = useState();
  const [operationName, setOperationName] = useState();
  const [description, setDescription] = useState();
  const [active, setActive] = useState();
  useEffect(() => {
    setImageSrc(list && list[0]?.image);
    setVideoSrc(list && list[0]?.video);
    setOperationName(list && list[0]?.name);
  }, [list]);

  return (
    <Container>
      <Details title={title} subtitle={subTitle} transparent padding>
        {children}
      </Details>
      <Middle>
        <Left>
          {videoSrc && video ? (
            <ReactPlayer
              url={videoSrc}
              playing
              loop
              muted
              // controls
              width="100%"
              height="100%"
            />
          ) : (
            <AnimatePresence exitBeforeEnter>
              <ImageS
                alt={operationName}
                key={imageSrc}
                src={imageSrc}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.15 }}
              />
            </AnimatePresence>
          )}
          <AnimatePresence exitBeforeEnter>
            <h6>{operationName}</h6>
            <p>{description}</p>
          </AnimatePresence>
        </Left>
        <Right>
          {list?.map((item) => {
            return (
              <ImageContainer
                key={item.id}
                src={item.image}
                alt={item.name}
                active={item.id === active}
                onMouseEnter={() => {
                  item.video && setVideoSrc(item.video);
                  item.image && setImageSrc(item.image);
                  setOperationName(item.name);
                  setDescription(item.description);
                  setActive(item.id);
                }}
                onClick={() => {
                  setVideoSrc(item.video);
                  item.image && setImageSrc(item.image);
                  setDescription(item.description);
                  setActive(item.id);
                  setOperationName(item.name);
                }}
              />
            );
          })}
        </Right>
      </Middle>
    </Container>
  );
};

const Middle = styled.div`
  display: grid;
  padding: calc(var(--padding) / 2) var(--padding) var(--padding);

  gap: var(--gap);
  align-items: start;
  align-content: start;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: calc(var(--padding) / 4) var(--padding) var(--padding);
  }
`;

const Left = styled.div`
  display: grid;
  align-content: start;
  gap: calc(var(--gap) / 2);

  /* can be deleted after all of them set  */
  div {
    height: 400px;

    @media screen and (min-width: 768px) {
      max-height: 250px;
      height: 250px;
      min-height: 250px;
    }
  }
`;

const Right = styled.div`
  display: grid;
  gap: calc(var(--gap) / 4);
  grid-template-columns: repeat(auto-fit, minmax(4rem, 4rem));
  justify-content: center;
  align-content: start;
`;

const ImageContainer = styled.div`
  display: grid;
  height: 4rem;
  width: 4rem;
  background-color: #c3c3c3;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border: ${(props) =>
    props.active
      ? `1px solid var(--color-primary)`
      : `0px solid var(--color-primary)`};
  outline: ${(props) =>
    props.active
      ? `1px solid var(--color-white)`
      : `0px solid var(--color-primary)`};
  box-shadow: ${(props) => props.active && `var(--boxShadow)`};
  box-sizing: border-box;

  transition: box-shadow 0.35s ease-in-out, border 0.15s ease-in-out;
`;

const ImageS = styled(motion.div)`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;
