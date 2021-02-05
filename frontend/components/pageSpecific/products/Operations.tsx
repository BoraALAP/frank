import { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

import Details from "./Details";
import { Container } from "../../layout/Container";

interface Props {
  list?: any;
  video?: Boolean;
  title: String;
  subTitle: String;
  children?: any;
}

export const Operations = ({
  list,
  video = false,
  title = "Operations",
  subTitle,
  children,
}: Props) => {
  const [videoSrc, setVideoSrc] = useState(list && list[0]?.video);
  const [imageSrc, setImageSrc] = useState(list && list[0]?.defaultImage);
  const [operationName, setOperationName] = useState(list && list[0]?.name);

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
            <ImageS
              layout="fill"
              objectFit="cover"
              rel="preload"
              alt={operationName}
              src={imageSrc}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            />
          )}
          <h6>{operationName}</h6>
        </Left>
        <Right>
          {list?.map((item) => {
            return (
              <ImageContainer
                key={item.id}
                src={item.defaultImage}
                alt={item.name}
                onMouseEnter={() => {
                  item.video && setVideoSrc(item.video);
                  item.defaultImage && setImageSrc(item.defaultImage);
                  setOperationName(item.name);
                }}
                onClick={() => {
                  setVideoSrc(item.video);
                  item.defaultImage && setImageSrc(item.defaultImage);
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
  justify-content: start;
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
`;

const ImageS = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;
