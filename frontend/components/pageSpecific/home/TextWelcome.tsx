import Image from "next/image";
import styled from "styled-components";

const TextWelcome = (props) => {
  return (
    <Container>
      <H1Big>
        <Inwrap rev>
          <ImageS>
            <Image
              src="/homepage1.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </ImageS>
          <Span>
            Frank is a real window and door guy and a people person. Over four
            decades, Frank has established strong partnerships, a trusted team,
            and loyal customers. Frank is like a family.
          </Span>
        </Inwrap>
      </H1Big>

      <H1Small>
        Frank is a real window and door guy and a people person. Over four
        decades, Frank has established strong partnerships, a trusted team, and
        loyal customers. Frank is like a family.
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
    grid-template-columns: ${(props) =>
      props.rev ? ` 1fr 2fr ` : `max-content auto`};
  }
`;

const H1 = styled.h1`
  display: grid;
  font-size: 8vw;
  line-height: 15vw;
  margin: 0;
  /* white-space: nowrap; */
  @media screen and (min-width: 414px) {
    font-size: 2rem;
    line-height: 2.25rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 2.75rem;
  }

  @media screen and (min-width: var(--mq-desktop)) {
    line-height: 7vw;
  }

  @media screen and (min-width: var(--mq-xl)) {
    font-size: 3.9rem;
    line-height: 7rem;
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
