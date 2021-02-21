import styled from "styled-components";
import Image from "next/image";
import { TertiaryButton } from "../../../UI/Links";

interface Props {
  image: any;
  title: String;
  subtitle: String;
  description?: String;
  href: String;
  rev: Boolean;
}

const Category = ({
  image,
  title,
  subtitle,
  description,
  href,
  rev = false,
}: Props) => {
  const hrefFixed = href.replace(/\s+/g, "").toLowerCase();
  return (
    <Container rev={rev}>
      <Left rev={rev}>
        <Image src={image} objectFit="cover" layout="fill" />
      </Left>
      <Right>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Body>
          <p>{description}</p>
        </Body>
        <TertiaryButton href={hrefFixed}>View {title}</TertiaryButton>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  @media screen and (min-width: 768px) {
    margin-top: calc(-2 * var(--padding));
    grid-template-columns: ${(props) => (props.rev ? "2fr 3fr" : "3fr 2fr")};
  }
`;

const Left = styled.div`
  display: grid;
  position: relative;
  height: 300px;
  @media screen and (min-width: 768px) {
    height: 100%;
    order: ${(props) => (props.rev ? "1" : "0")};
  }
`;

const Right = styled.div`
  display: grid;
  align-content: start;
  gap: var(--gap);
  padding: var(--padding) var(--padding) var(--padding);
  @media screen and (min-width: 768px) {
    padding: calc(3 * var(--padding)) var(--padding) calc(6 * var(--padding));
  }
`;

const Title = styled.h3`
  display: grid;
`;

const Subtitle = styled.h6`
  display: grid;
`;

const Body = styled.div`
  display: grid;
  gap: calc(var(--gap) / 4);
`;

export default Category;
