import Image from "next/image";
import styled from "styled-components";
import RotatingImage from "../../../UI/RotatingImage";
import { Body } from "../../layout/Body";
import Details from "./Details";

export const ImageOverlap = ({
  rotate,
  title,
  subtitle,
  image,
  imageTitle,
  imageDescription,
  spec,
}) => {
  const ImageContainer = () => {
    switch (rotate) {
      case "602b3e5732bba63fe0604257":
        return <RotatingImage location="core" frame="42" />;

      case "602b3fb0202390402b9faa65":
        return <RotatingImage location="coreplus" frame="43" />;

      case "602b4ac83a39a34164a5c2af":
        return <RotatingImage location="enersense" frame="40" />;

      case "602b4ac83a39a34164a5c2ae":
        return <RotatingImage location="prism" frame="42" />;

      default:
        return (
          <Image
            src={image.publicUrl}
            alt={image.originalFilename}
            layout="fill"
            objectFit="contain"
            objectPosition="center bottom"
          />
        );
    }
    return <p>no image provided</p>;
  };
  return (
    <Container>
      <Details title={title} subtitle={subtitle} padding />
      <Bottom>
        <Left>{image && <ImageContainer />}</Left>
        <Right>
          <Title>{imageTitle}</Title>
          <Body>{imageDescription.split("\n")}</Body>
          <List>
            {spec?.split("\n").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </List>
        </Right>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
`;

const Bottom = styled.div`
  display: grid;

  @media screen and (min-width: 768px) {
    margin-top: calc(-1 * var(--padding));
    grid-auto-flow: column;
    grid-template-columns: 50% 50%;
  }
`;

const Left = styled.div`
  display: grid;
  position: relative;
  min-height: 550px;

  @media screen and (min-width: 768px) {
    padding-right: var(--padding);
    order: 1;
  }
`;

const Title = styled.h2`
  display: grid;
`;

const List = styled.ul`
  display: grid;
`;

const Right = styled.div`
  display: grid;
  gap: var(--gap);
  align-content: start;
  padding: calc(2 * var(--padding)) var(--padding);

  @media screen and (min-width: 768px) {
    order: 0;
  }
`;
