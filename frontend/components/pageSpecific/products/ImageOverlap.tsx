
import Image from "next/image";
import styled from "styled-components";
import Details from "./Details";

export const ImageOverlap = ({
  detailsTitle,
  detailsChildren,
  imageSrc,
  imageTitle,
  imageChildren,
}) => {
  return (
    <Container>
      <Details title={detailsTitle}>
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

  margin-top: ${({ theme }) => `-${theme.padding}`};
  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    grid-auto-flow: column;
    grid-template-columns: 50% 50%;
  }
`;

const Left = styled.div`
  display: grid;
  position: relative;
  min-height: 550px;
  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
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
  gap: ${({ theme }) => theme.gap};
  align-content: start;
  padding: ${({ theme }) => ` calc(2* ${theme.padding}) ${theme.padding}`};

  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    order: 0;
  }
`;
