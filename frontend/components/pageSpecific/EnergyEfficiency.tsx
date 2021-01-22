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
      <Text simple>
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
  padding: ${({ theme }) => theme.paddingSm};
  color: ${(props) =>
    props.simple ? props.theme.color.secondary : props.theme.color.primary};

  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    padding: ${({ theme }) => theme.padding};
  }
`;

const Title = styled.h3`
  display: grid;
`;
