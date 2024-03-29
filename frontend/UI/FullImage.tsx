import styled from "styled-components";
import Image from "next/image";
import { Container } from "../components/layout/Container";

export const FullImage = ({ imageSrc, height = "100%" }) => {
  return (
    <Container>
      <AnotherContainer>
        <ImageContainer height={height}>
          <Image
            src={imageSrc}
            layout="fill"
            objectFit="cover"
            objectPosition="30% 50%"
          />
        </ImageContainer>
      </AnotherContainer>
    </Container>
  );
};

const AnotherContainer = styled.div`
  display: grid;
  padding: 0 0 calc(var(--padding));
`;

const ImageContainer = styled.div`
  display: grid;
  position: relative;
  height: ${(props) => props.height};
  min-height: 300px;
`;
