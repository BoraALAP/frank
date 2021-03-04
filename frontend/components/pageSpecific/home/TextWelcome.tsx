import Image from "next/image";
import styled from "styled-components";

const TextWelcome = (props) => {
  return (
    <Container>
      <H1Big>
        <Inwrap rev>
          {/* <ImageS>
            <Image
              src="/homepage1.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </ImageS> */}
          <Span>
            FRANK has been in windows and doors for over four decades. He has
            made strong partnerships, built a trusted team, and designed
            products for everyone. Frank is like a family, we care about our
            customers.
          </Span>
        </Inwrap>
      </H1Big>

      <H1Small>
        Frank has been working on windows and doors for over 40 years. But even
        more than windows and doors, he loves people. Over four decades, Frank
        has built the business bearing his name into a trusted team with loyal
        customers and strong partnerships. FRANK is like a family.
      </H1Small>
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
    /* grid-template-columns: ${(props) =>
      props.rev ? ` 1fr 2fr ` : `max-content auto`}; */
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

const H1Small = styled(H1)`
  display: grid;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const H1Big = styled(H1)`
  display: none;
  gap: var(--gap);
  @media screen and (min-width: 768px) {
    display: grid;
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
