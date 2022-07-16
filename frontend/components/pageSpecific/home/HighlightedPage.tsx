import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { TertiaryButton } from "../../../UI/Links";
import { Loading } from "../../../UI/Loading";
import { Body } from "../../layout/Body";
import { Container } from "../../layout/Container";

const HighlightedPage = ({ page }) => {
  console.log(page?.pageHighlightUrl);

  if (!page) {
    return <Loading />;
  }
  return (
    <Container>
      <ImageContainer>
        <Image
          src={page?.pageHighlightImage?.publicUrl}
          alt={page?.pageHighlightImage?.originalFilename}
          layout="fill"
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </ImageContainer>
      <Container padding>
        <Text>
          <Title>{page?.pageHighlightTitle}</Title>
          <Body>{page?.pageHighlightCopy}</Body>
          <TertiaryButton>Go to the page</TertiaryButton>
        </Text>
      </Container>
    </Container>
  );
};

const ImageContainer = styled.div`
  display: grid;
  position: relative;
  width: 100%;

  height: 100%;
  min-height: 150px;
  @media screen and (min-width: 768px) {
    min-height: 300px;
  }
`;

const Text = styled.div`
  display: grid;
  gap: calc(var(--gap) / 2);
  padding: var(--padding) 0;
  align-items: center;
  align-content: center;

  @media screen and (min-width: 768px) {
    padding: var(--padding) 0;
  }
`;

const Title = styled.h2`
  display: grid;
`;

const Subtitle = styled.h4`
  display: grid;
  max-width: 35rem;
`;

export default HighlightedPage;
