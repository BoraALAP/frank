import styled from "styled-components";
import Image from "next/image";
import { Body } from "../../layout/Body";

export const ThreeImages = ({
  imageSrc1,
  imageSrc2,
  imageSrc3,
  title,
  description,
}) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={imageSrc1} objectFit="cover" layout="fill" />
      </ImageContainer>
      <Text>
        <Title>{title}</Title>
        <Body>{description}</Body>
      </Text>
      <ImageContainer>
        <Image src={imageSrc2} objectFit="cover" layout="fill" />
      </ImageContainer>
      <ImageContainer>
        <Image src={imageSrc3} objectFit="cover" layout="fill" />
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  gap: calc(var(--gap) / 2);

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: columns;
    grid-template-rows: min-content;
  }
`;

const ImageContainer = styled.div`
  display: grid;
  position: relative;
  min-height: 400px;
`;

const Text = styled.div`
  display: grid;
  gap: var(--gap);
  padding: var(--padding) var(--padding) calc(2 * var(--padding));
`;

const Title = styled.h3`
  display: grid;
`;
