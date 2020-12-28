import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { TertiaryButton } from "../UI/Links";
import Body from "../layout/Body";

import homepage1 from "../../assets/images/homepage1.jpg";

export const EnergyEfficiency = ({ imageSrc }) => {
  const image = imageSrc || homepage1;
  return (
    <Container simple>
      <ImageContainer>
        <Image src={image} objectFit="cover" layout="fill" />
      </ImageContainer>
      <Text simple>
        <Title>Energy Efficiency.</Title>
        <Body>
          <p>Rated Most efficient by Energy Star</p>

          <p>
            Warm edge spacers recessed between the panes of glass both minimize
            glass edge conductivity while optimally containing the argon gas
            within the sealed units, obtaining a 90% argon gas fill rate
          </p>
        </Body>
        <TertiaryButton href="/sub/learn">
          More on Energy Efficiency
        </TertiaryButton>
      </Text>
    </Container>
  );
};

export const EnergyEfficiencyProduct = ({
  imageSrc1,
  imageSrc2,
  imageSrc3,
}) => {
  return (
    <Container>
      <ImageContainer1>
        <Image src={imageSrc1} objectFit="cover" layout="fill" />
      </ImageContainer1>
      <Text>
        <Title>Energy Efficiency.</Title>
        <Body>
          <p>Rated Most efficient by Energy Star</p>

          <p>
            Warm edge spacers recessed between the panes of glass both minimize
            glass edge conductivity while optimally containing the argon gas
            within the sealed units, obtaining a 90% argon gas fill rate
          </p>
        </Body>
        <TertiaryButton href="/sub/learn">
          More on Energy Efficiency
        </TertiaryButton>
      </Text>
      <ImageContainer2>
        <Image src={imageSrc2} objectFit="cover" layout="fill" />
      </ImageContainer2>
      <ImageContainer3>
        <Image src={imageSrc3} objectFit="cover" layout="fill" />
      </ImageContainer3>
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

const ImageContainer1 = styled(ImageContainer)`
  grid-row: span 2;
  height: auto;
`;

const ImageContainer2 = styled(ImageContainer)``;

const ImageContainer3 = styled(ImageContainer)`
  grid-column: span 2;
`;

const Text = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.gap};
  padding: 2rem;
  color: ${(props) =>
    props.simple ? props.theme.color.secondary : props.theme.color.primary};
`;

const Title = styled.h3`
  display: grid;
`;
