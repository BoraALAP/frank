import React from "react";
import styled from "styled-components";
import Details from "./Details";

const Operations = ({ list }) => {
  return (
    <Container>
      <Details
        title="Operations"
        subtitle="Placeholder Copy (Addressing this with Marco)"
        transparent
      >
        <p>
          Placeholder - Marco please advise. The choice of colour can have a big
          impact, or be a subtle accent to your home’s exterior. Select from our
          wide range of standard colour coating options, or request a custom
          colour match – the options are endless.{" "}
        </p>
      </Details>
      <Middle>
        <Left></Left>
        <Right>
          {list.map((item, index) => {
            return (
              <div>
                <li key={index}>{item}</li>
              </div>
            );
          })}
        </Right>
      </Middle>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
`;

const Middle = styled.div`
  display: grid;
`;

const Left = styled.div`
  display: grid;
`;

const Right = styled.div`
  display: grid;
`;

export default Operations;
