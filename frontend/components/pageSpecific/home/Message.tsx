import Image from "next/image";
import styled from "styled-components";

const Message = () => {
  return (
    <Container image1="/homepage4.jpg">
      <Top>
        <Left>
          <h3>
            Frank is proudly Made in Ontario and services an exclusive network
            of dealers across Canada. What differentiates us from our
            competitors is our ability to customize each order, deliver a
            quality product everytime, and innovate ahead of the curve.
          </h3>
          <p>
            Learn more about us{" "}
            <a href="https://www.supportontariomade.ca/search-results?query=ostaco">
              here.
            </a>{" "}
          </p>
        </Left>
        <Right>
          <Image
            src="/ontarioMadeLogo.png"
            layout="fixed"
            width={96}
            height={96}
          />
        </Right>
      </Top>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  background-color: var(--color-lightGrey2);
  background: url(${(props) => `${props.image1}`});
  padding: var(--padding) var(--padding) calc(2 * var(--padding));
  gap: calc(2 * var(--gap));
  @media screen and (min-width: 768px) {
    padding: calc(2 * var(--padding)) var(--padding) calc(8 * var(--padding));
  }
`;

const Top = styled.div`
  display: grid;
  gap: var(--gap);

  @media screen and (min-width: 768px) {
    grid-template-columns: auto 25%;
  }
`;

const Left = styled.div`
  display: grid;
  width: 80%;
  gap: var(--gap);
`;

const Right = styled.div`
  display: grid;
  color: var(--color-primary);
  margin: 0px;
`;

export default Message;
