import styled from "styled-components";
import Image from "next/image";
import { TertiaryButton } from "../../UI/Links";
import { Body } from "../layout/Body";

export const EnergyEfficiency = ({ imageSrc = "" }) => {
  const image = imageSrc || "/homepage1.jpg";
  return (
    <Container simple>
      <ImageContainer>
        <Image src={image} objectFit="cover" layout="fill" />
      </ImageContainer>
      <EnergyText simple>
        <Title>Energy Efficiency.</Title>
        <Body>
          <>
            <p>Rated Most efficient by Energy Star</p>

            <p>
              Warm edge spacers recessed between the panes of glass both
              minimize glass edge conductivity while optimally containing the
              argon gas within the sealed units, obtaining a 90% argon gas fill
              rate
            </p>
          </>
        </Body>
        <TertiaryButton href="/sub/learn">
          More on Energy Efficiency
        </TertiaryButton>
      </EnergyText>
    </Container>
  );
};

export const DesignOptions = ({ imageSrc = "" }) => {
  const image = imageSrc || "/homepage2.jpg";
  return (
    <Container simple>
      <ImageContainer>
        <Image src={image} objectFit="cover" layout="fill" />
      </ImageContainer>
      <Text simple>
        <Title>Design Options</Title>
        <Body>
          <>
            <p>Rated Most efficient by Energy Star</p>

            <p>
              Deciding on the product that’s right for your project is just the
              beginning. With an extensive array of design options to choose
              from, you can customize your windows and doors to reflect your
              home’s architecture, character, and personality.
            </p>
          </>
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
  grid-auto-flow: ${(props) => (props.simple ? "row" : "column")};
  grid-template-rows: min-content;
  gap: calc(var(--gap) / 2);
`;

const ImageContainer = styled.div`
  display: grid;
  position: relative;
  height: 400px;
`;

const Text = styled.div`
  display: grid;
  gap: var(--gap);
  padding: var(--padding);
  color: var(--color-primary);

  @media screen and (min-width: 768px) {
    padding: var(--padding);
  }
`;

const Title = styled.h3`
  display: grid;
`;

const EnergyText = styled.div`
  display: grid;
  gap: var(--gap);

  color: ${(props) =>
    props.simple ? `var(--color-secondary)` : `var(--color-primary)`};
  padding: var(--padding); ;
`;
