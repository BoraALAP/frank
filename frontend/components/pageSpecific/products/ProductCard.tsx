import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { TertiaryButton } from "../../../UI/Links";
import { Body } from "../../layout/Body";
import { Slugify } from "../../../lib/Stringer";

export const ProductCard = ({ product, side }) => {
  return (
    <Link href={`/products/${Slugify(product.name)}`}>
      <Container side={side}>
        <ImageContainer>
          <Image
            src={product?.image?.publicUrl}
            alt={product?.image?.originalFilename}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </ImageContainer>
        <Text side={side}>
          <Title>{product.name}</Title>
          <Subtitle>{product.subtitle}</Subtitle>
          <Body>{product.excerpt.split("\n")}</Body>
          <TertiaryButton
            rev={side ? false : true}
            href={`/products/${Slugify(product.name)}`}
          >
            View {product.name}
          </TertiaryButton>
        </Text>
      </Container>
    </Link>
  );
};

const ImageContainer = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  height: 300px;
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

const Text = styled.div`
  display: grid;
  gap: calc(var(--gap) / 2);
  padding: var(--padding);
  align-items: center;
  align-content: center;

  @media screen and (min-width: 768px) {
    order: ${(props) => (props.side ? 0 : -1)};
    padding: var(--padding);
  }
`;

const Title = styled.h2`
  display: grid;
  font-size: 2.5rem;
  @media screen and (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const Subtitle = styled.h4`
  display: grid;
  max-width: 35rem;
`;

const Container = styled.div`
  display: grid;

  box-sizing: border-box;

  color: ${(props) =>
    props.side ? `var(--color-primary)` : `var(--color-white)`};
  background-color: ${(props) =>
    props.side ? `var(--color-bg)` : `var(--color-primary)`};

  @media screen and (min-width: 768px) {
    grid-template-columns: ${(props) => (props.side ? "2fr 3fr" : "3fr 2fr")};
    min-height: ${(props) => (props.side ? "50rem" : "31rem")};
  }
`;
