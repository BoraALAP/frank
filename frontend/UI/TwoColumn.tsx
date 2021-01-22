import styled from "styled-components";
import Image from "next/image";
import { Body } from "../components/layout/Body";
import { Container } from "../components/layout/Container";

interface Props {
  imageSrc: string;
  children: any;
  id?: string;
  rev?: boolean;
}

export const TwoColumn = ({ imageSrc, children, rev = false, id }: Props) => {
  return (
    <Container>
      <Context id={id}>
        <ImageContainer rev={rev}>
          <Image src={imageSrc} objectFit="cover" layout="fill" />
        </ImageContainer>

        <Text>{children}</Text>
      </Context>
    </Container>
  );
};

const Context = styled.div`
  display: grid;
  padding: 0 ${({ theme }) => theme.paddingSm};
  gap: ${({ theme }) => theme.gap};

  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    padding: 0 ${({ theme }) => theme.padding};
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

const Text = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.gap};
  align-items: start;
  align-content: start;
  div {
    display: grid;
    gap: ${({ theme }) => `calc(${theme.gap} /2)`};
  }
`;
