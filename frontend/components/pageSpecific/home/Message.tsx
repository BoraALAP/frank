import styled from "../styled-components";

const Message = () => {
  return (
    <Container image1="homepage4.jpg">
      <Top>
        <Left>
          Frank is proudly Made in Ontario and serves customers across Canada.
          Differentiating itself through unparalleled custom options, quality
          products, and customer driven innovation. This is what Frank does - we
          make windows and doors.
        </Left>
        <Right>
          With over four decades of experience, our values and beliefs remain
          true to the founding of the company. Learn more about us here.
        </Right>
      </Top>
      <Bottom>
        <p>Small blurb on photography used here.</p>
        <p>
          Placeholder: With over four decades of experience, our values and
          beliefs remain true to the founding of the company.
        </p>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.color.lightGrey2};
  background-image: url(${(props) => props.image1});
  padding: ${({ theme }) =>
    `  ${theme.padding} ${theme.paddingSm} calc(2* ${theme.padding})`};
  gap: calc(2 * ${({ theme }) => theme.gap});
  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    padding: ${({ theme }) =>
      ` calc(2* ${theme.padding}) ${theme.padding} calc(8* ${theme.padding})`};
  }
`;

const Top = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.gap};

  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    grid-template-columns: auto 25%;
  }
`;

const Left = styled.h3`
  display: grid;
  width: 80%;
`;

const Right = styled.p`
  display: grid;
  color: ${({ theme }) => theme.color.primary};
  margin: 0px;
`;

const Bottom = styled.div`
  display: grid;

  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    width: 50%;
  }
`;

export default Message;
