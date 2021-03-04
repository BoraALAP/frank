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
  description?: any;
  padding?: Boolean;
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
  description,
  padding = false,
}: Props) => {
  const [videoSrc, setVideoSrc] = useState();
  const [imageSrc, setImageSrc] = useState();
  const [operationName, setOperationName] = useState();
  const [descriptions, setDescription] = useState();
  const [id, setId] = useState();
  const [active, setActive] = useState();
  useEffect(() => {
    setImageSrc(list && list[0]?.image?.publicUrl);
    setVideoSrc(list && list[0]?.video);
    setOperationName(list && list[0]?.name);
    setId(list && list[0]?.id);
  }, [list]);

  return (
    <Container gap padding={padding && true}>
      <Details title={title} subtitle={subTitle} transparent>
        {description}
      </Details>
      <Middle>
        <Left>
          {videoSrc && video ? (
            <ReactPlayer
              url={videoSrc}
              playing
              loop
              muted
              controls
              width="100%"
              // height="100%"
            />
          ) : (
            <AnimatePresence exitBeforeEnter>
              <ImageS
                alt={operationName}
                key={id}
                src={imageSrc}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.15 }}
              />
            </AnimatePresence>
          )}
          <h6>{operationName}</h6>
          <p>{descriptions}</p>
        </Left>
        <Right>
          {list?.map((item) => {
            return (
              <ImageContainer
                key={item.id}
                src={item.image?.publicUrl}
                alt={item.image?.originalFilename}
                active={item.id === active}
                onMouseEnter={() => {
                  item.video && setVideoSrc(item.video);
                  item.image && setImageSrc(item.image?.publicUrl);
                  setOperationName(item.name);
                  setDescription(item.description);
                  setActive(item.id);
                  setId(item.id);
                }}
                onClick={() => {
                  setVideoSrc(item.video);
                  item.image && setImageSrc(item.image?.publicUrl);
                  setDescription(item.description);
                  setActive(item.id);
                  setOperationName(item.name);
                  setId(item.id);
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

  gap: var(--gap);
  align-items: start;
  align-content: start;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Left = styled.div`
  display: grid;
  align-content: start;
  gap: calc(var(--gap) / 2);

  /* can be deleted after all of them set  */
  div {
    height: 300px;

    @media screen and (min-width: 768px) {
      max-height: 450px;
      height: 50vw;
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
  background-color: var(--color-white);
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
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
`;
