
import styled from "styled-components";
import Image from "next/image";
import Body from "../layout/Body";
import { Container } from "../layout/Container";

const TwoColumn = ({ imageSrc, title, children, rev = false }) => {
  return (
    <Container>
      <Context>
        <ImageContainer rev={rev}>
          <Image src={imageSrc} objectFit="cover" layout="fill" />
        </ImageContainer>
        <Body>
          <h4>{title}</h4>
          {children}
        </Body>
      </Context>
    </Container>
  );
};

const Context = styled.div`
  display: grid;
  padding: 0 ${({ theme }) => theme.padding};
  gap: ${({ theme }) => theme.gap};

  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageContainer = styled.div`
  display: grid;
  position: relative;
  min-height: 300px;

  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    order: ${(props) => (props.rev ? "1" : "0")};
  }
`;

export default TwoColumn;
