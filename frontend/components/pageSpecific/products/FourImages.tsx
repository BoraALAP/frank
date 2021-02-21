import styled from "styled-components";
import Image from "next/image";
import { Body } from "../../layout/Body";

export const FourImages = ({
  imageSrc1,
  imageSrc2,
  imageSrc3,
  imageSrc4,
  title,
  description,
}) => {
  return (
    <Container>
      {imageSrc1?.publicUrl && (
        <ImageContainer>
          <Image src={imageSrc1.publicUrl} objectFit="cover" layout="fill" />
        </ImageContainer>
      )}
      <Text>
        <Title>{title}</Title>
        <Body>{description.split("\n")}</Body>
      </Text>
      {imageSrc2?.publicUrl && (
        <ImageContainer>
          <Image src={imageSrc2.publicUrl} objectFit="cover" layout="fill" />
        </ImageContainer>
      )}
      {imageSrc3?.publicUrl && (
        <ImageContainer>
          <Image src={imageSrc3.publicUrl} objectFit="cover" layout="fill" />
        </ImageContainer>
      )}
      {imageSrc4?.publicUrl && (
        <ImageContainerCover>
          <Image src={imageSrc4.publicUrl} objectFit="cover" layout="fill" />
        </ImageContainerCover>
      )}
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

const ImageContainerCover = styled(ImageContainer)`
  @media screen and (min-width: 768px) {
    grid-column: span 2;
  }
`;

const Text = styled.div`
  display: grid;
  gap: var(--gap);
  padding: var(--padding) var(--padding) calc(2 * var(--padding));
`;

const Title = styled.h3`
  display: grid;
`;
