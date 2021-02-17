import Image from "next/image";
import styled from "styled-components";
import Details from "./Details";

export const ImageOverlap = ({
  title,
  subtitle
  imageSrc,
  imageTitle,
  imageChildren,
  spec
}) => {
  return (
    <Container>
      <Details title={title} padding>
        {detailsChildren?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Details>
      <Bottom>
        <Left>
          {imageSrc && (
            <Image
              src={imageSrc}
              layout="fill"
              objectFit="contain"
              objectPosition="center bottom"
            />
          )}
        </Left>
        <Right>
          <Title>{imageTitle}</Title>
          <List>
            {imageChildren?.map((item, index) => (
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
