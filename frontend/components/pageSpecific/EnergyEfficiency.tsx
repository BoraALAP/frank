import styled from "styled-components";
import Image from "next/image";
import { TertiaryButton } from "../../UI/Links";
import { Body } from "../layout/Body";

interface EnergyOptionsProps {
  EnergyBodyTitle?: string;
  EnergyBodyCopy?: any;
}
export const EnergyEfficiency = ({
  EnergyBodyTitle,
  EnergyBodyCopy,
}: EnergyOptionsProps) => {
  const image =
    "https://res.cloudinary.com/arttic-fox/image/upload/v1615356721/frank/general/Energy_Efficiency_nnts3b.jpg";
  return (
    <Container simple>
      <ImageContainer>
        <Image src={image} objectFit="cover" layout="fill" />
      </ImageContainer>
      <EnergyText simple>
        <Title>{EnergyBodyTitle ? EnergyBodyTitle : "Energy Efficiency"}</Title>

        {EnergyBodyCopy ? (
          <Body>{EnergyBodyCopy} </Body>
        ) : (
          <Body>
            <>Rated Most efficient by Energy Star</>

            <>
              Our innovative window design includes a sealed argon gas layer and
              warm edge spacers to add insulation, making your home more energy
              efficient and saving you money on monthly utilities.
            </>
          </Body>
        )}
        <TertiaryButton href="/sub/learn">
          More on Energy Efficiency
        </TertiaryButton>
      </EnergyText>
    </Container>
  );
};

interface DesignOptionsProps {
  DesignBodyTitle?: string;
  DesignBodyCopy?: any;
}
export const DesignOptions = ({
  DesignBodyTitle,
  DesignBodyCopy,
}: DesignOptionsProps) => {
  const image =
    "https://res.cloudinary.com/arttic-fox/image/upload/v1615355729/frank/general/design_options_lny9zq.jpg";
  return (
    <Container simple>
      <ImageContainer>
        <Image src={image} objectFit="cover" layout="fill" />
      </ImageContainer>
      <Text simple>
        <Title> {DesignBodyTitle ? DesignBodyTitle : "Design Options"}</Title>

        {DesignBodyCopy ? (
          <Body> {DesignBodyCopy} </Body>
        ) : (
          <Body>
            <>
              Deciding on the product that’s right for your project is just the
              beginning. With an extensive array of design options to choose
              from, you can customize your windows and doors to reflect your
              home’s architecture, character, and personality.
            </>
          </Body>
        )}

        <TertiaryButton href="/designoptions">
          See Design Options
        </TertiaryButton>
      </Text>
    </Container>
  );
};

export const DesignEfficiency = () => {
  return (
    <BigContainer>
      <DesignOptions />
      <EnergyEfficiency />
    </BigContainer>
  );
};

const BigContainer = styled.div`
  display: grid;
  gap: var(--gap);
  @media screen and (min-width: 768px) {
    grid-template-columns: ${(props) => (props.simple ? "auto" : "1fr 1fr")};
    gap: calc(var(--gap) / 2);
  }
`;

const Container = styled.div`
  display: grid;

  grid-auto-flow: row;
  grid-template-rows: min-content;
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
`;

const Title = styled.h3`
  display: grid;
`;

const EnergyText = styled.div`
  display: grid;
  gap: var(--gap);

  color: ${(props) =>
    props.simple ? `var(--color-secondary)` : `var(--color-primary)`};
  padding: var(--padding);
`;
