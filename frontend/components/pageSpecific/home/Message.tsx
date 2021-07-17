import Image from "next/image";
import styled from "styled-components";

const Message = () => {
  return (
    <Container>
      <Bottom>
        <Image
          src="https://res.cloudinary.com/arttic-fox/image/upload/v1615432918/frank/general/frank_factory_bbxhxa.jpg"
          layout="fill"
          objectFit="cover"
          loading="lazy"
          objectPosition="center -40px"
        />
      </Bottom>
      <Top>
        <Left>
          <Image
            src="/ontarioMadeLogo.png"
            layout="responsive"
            width={80}
            height={80}
            objectFit="contain"
            objectPosition="50% 50%"
            loading="lazy"
          />
        </Left>
        <Right>
          <h3>
            FRANK is proudly made in Ontario and services an exclusive network
            of dealers across Canada. What differentiates us from our
            competitors is our ability to customize each order, deliver a
            quality product every time, and innovate ahead of the curve.
          </h3>
          <p>
            Learn more about us{" "}
            <a href="https://www.supportontariomade.ca/search-results?query=ostaco">
              here.
            </a>
          </p>
        </Right>
      </Top>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  padding: 0 var(--padding) calc(2 * var(--padding));
  gap: calc(2 * var(--gap));
  /* border-bottom: 1px solid var(--color-grey); */
`;

const Top = styled.div`
  display: grid;
  gap: var(--gap);

  padding-top: var(--padding);
  @media screen and (min-width: 768px) {
    grid-template-columns: 25% auto;
  }
`;

const Bottom = styled.div`
  display: none;
  position: relative;
  height: 375px;

  @media screen and (min-width: 768px) {
    display: grid;
  }
`;

const Right = styled.div`
  display: grid;
  width: 80%;
  gap: var(--gap);
`;

const Left = styled.div`
  display: grid;
  color: var(--color-primary);
  margin: 0px;
  padding: 2rem;
  align-content: start;
`;

export default Message;
