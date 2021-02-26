import Image from "next/image";
import styled from "styled-components";
import { Body } from "../../layout/Body";
import Details from "./Details";

export const ImageOverlap = ({
  title,
  subtitle,
  image,
  imageTitle,
  imageDescription,
  spec,
}) => {
  console.log(image);

  return (
    <Container>
      <Details title={title} subtitle={subtitle} padding />
      <Bottom>
        <Left>
          {image && (
            <Image
              src={image.publicUrl}
              alt={image.originalFilename}
              layout="fill"
              objectFit="contain"
              objectPosition="center bottom"
            />
          )}
        </Left>
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
