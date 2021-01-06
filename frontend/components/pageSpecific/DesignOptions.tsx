
import styled from "styled-components";
import Image from "next/image";
import { TertiaryButton } from "../UI/Links";
import Body from "../layout/Body";

import homepage2 from "../../assets/images/homepage2.jpg";

export const DesignOptions = ({ imageSrc= "" }) => {
  const image = imageSrc || homepage2;
  return (
    <Container simple>
      <ImageContainer>
        <Image src={image} objectFit="cover" layout="fill" />
      </ImageContainer>
      <Text simple>
      <Title>Design Options</Title>
        <Body>
          <p>Rated Most efficient by Energy Star</p>

          <p>
          Deciding on the product that’s right for your project is just the beginning. With an extensive array of design options to choose from, you can customize your windows and doors to reflect your home’s architecture, character, and personality.
          </p>
        </Body>
        <TertiaryButton href="/sub/designOptions">
          More on Energy Efficiency
        </TertiaryButton>
      </Text>
    </Container>
  );
};



const Container = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.simple ? "inherit" : "1fr 1fr")};
  grid-auto-flow: ${(props) => (props.simple ? "rows" : "columns")};
  grid-template-rows: min-content;
  gap: calc(${({ theme }) => theme.gap} / 2);
`;

const ImageContainer = styled.div`
  display: grid;
  position: relative;
  height: 400px;
`;

const Text = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.gap};
  padding: 2rem;
  color: ${({ theme }) => theme.color.primary};;
`;

const Title = styled.h3`
  display: grid;
`;
