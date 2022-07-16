import Image from "next/image";
import styled from "styled-components";
import { Loading } from "../../../UI/Loading";

const TextWelcome = ({ message }) => {
  const str = message?.split("\n");

  return (
    <Container>
      <Inwrap rev>
        {message ? (
          str.map((st, index) => <H1Big key={index}>{st}</H1Big>)
        ) : (
          <Loading />
        )}
      </Inwrap>
    </Container>
  );
};

const Container = styled.div``;

const Inwrap = styled.div`
  @media screen and (min-width: 991px) {
    display: grid;

    align-items: center;
    gap: calc(var(--gap));
  }
`;

const H1 = styled.h1`
  display: grid;
  font-size: 2rem;
  line-height: 3.5rem;
  margin: 0;
  /* white-space: nowrap; */
  @media screen and (min-width: 414px) {
    font-size: 2.25rem;
    line-height: 4.25rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
    line-height: 4.25rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 3.25rem;
    line-height: 4.75rem;
  }
`;

const H1Big = styled(H1)`
  display: grid;
  gap: var(--gap);
  @media screen and (min-width: 768px) {
  }
`;

const Span = styled.span`
  display: grid;
  justify-self: start;
`;

const ImageS = styled.div`
  display: none;
  @media screen and (min-width: 991px) {
    display: grid;
    height: 100%;
    width: 100%;
    min-width: 60px;
    position: relative;
  }
`;

export default TextWelcome;
