import Image from "next/image";
import styled from "styled-components";

const TextWelcome = (props) => {
  return (
    <Container>
      <H1Big>
        Frank is a people person, and a real window and door guy. With
        <Inwrap>
          <Span>over four decades of</Span>
          <ImageS>
            <Image
              src="/homepage1.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </ImageS>
        </Inwrap>
        <Span>experience, Frank’s success is</Span>
        <Inwrap rev>
          <ImageS>
            <Image
              src="/homepage2.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </ImageS>
          <Span>all about strong industry</Span>
        </Inwrap>
        <Span>partnerships, loyal customers, and longstanding employees.</Span>
        <Inwrap>
          <Span>Frank is like family.</Span>
          <ImageS>
            <Image
              src="/homepage3.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </ImageS>
        </Inwrap>
      </H1Big>

      <H1Small>
        Frank is a people person, and a real window and door guy. With over four
        decades of experience, Frank’s success is all about strong industry
        partnerships, loyal customers, and longstanding employees. Frank is like
        family.
      </H1Small>
    </Container>
  );
};

const Container = styled.div``;

const Inwrap = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: calc(var(--gap) / 2);
    grid-template-columns: ${(props) =>
      props.rev ? ` auto max-content ` : `max-content auto`};
  }
`;

const H1 = styled.h1`
  display: grid;
  font-size: 8vw;
  line-height: 15vw;
  margin: 0;
  /* white-space: nowrap; */
  @media screen and (min-width: 414px) {
    font-size: 5.9vw;
    line-height: 10vw;
  }

  @media screen and (min-width: 768px) {
    font-size: 3.5vw;
    line-height: 8vw;
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
  @media screen and (min-width: 768px) {
    display: grid;
    height: 6vw;
    width: 100%;
    min-width: 60px;
    position: relative;
  }
`;

export default TextWelcome;
