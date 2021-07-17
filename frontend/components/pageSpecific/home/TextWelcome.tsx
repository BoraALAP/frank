import Image from "next/image";
import styled from "styled-components";

const TextWelcome = (props) => {
  return (
    <Container>
      <H1Big>
        <Inwrap rev>
          <Span>
            FRANK has been in windows and doors for over four decades. He has
            made strong partnerships, built a trusted team, and designed
            products for everyone. Frank is like a family, we care about our
            customers.
          </Span>
        </Inwrap>
      </H1Big>
    </Container>
  );
};

const Container = styled.div``;

const Inwrap = styled.div`
  @media screen and (min-width: 991px) {
    display: grid;
    grid-auto-flow: column;
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
