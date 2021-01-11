import { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

import Details from "./Details";
import { Container } from "../../layout/Container";

export const Operations = ({ list }) => {
  const [videoSrc, setVideoSrc] = useState(list && list[0].video);
  const [operationName, setOperationName] = useState("");

  return (
    <Container>
      <Details
        title="Operations"
        subtitle="Placeholder Copy (Addressing this with Marco)"
        transparent
      >
        <p>
          Placeholder - Marco please advise. The choice of colour can have a big
          impact, or be a subtle accent to your home’s exterior. Select from our
          wide range of standard colour coating options, or request a custom
          colour match – the options are endless.
        </p>
      </Details>
      <Middle>
        <Left>
          <ReactPlayer
            url={videoSrc}
            playing
            loop
            muted
            width="100%"
            height="100%"
          />
          <h6>{operationName}</h6>
        </Left>
        <Right>
          {list?.map((item) => {
            return (
              <ImageContainer
                key={item.id}
                src={item.defaultImage}
                onMouseEnter={() => {
                  setVideoSrc(item.video);
                  setOperationName(item.name);
                }}
                onClick={() => {
                  setVideoSrc(item.video);
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
  padding: ${({ theme }) =>
    `calc(${theme.padding} / 4 ) ${theme.padding} ${theme.padding} `};

  gap: ${({ theme }) => theme.gap};
  align-items: start;
  align-content: start;
  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Left = styled.div`
  display: grid;
  align-content: start;
  gap: ${({ theme }) => `calc(${theme.gap} / 2)`};
`;

const Right = styled.div`
  display: grid;
  gap: calc(${({ theme }) => theme.gap} / 4);
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
`;
