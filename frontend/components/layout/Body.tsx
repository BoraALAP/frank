import React from "react";
import styled from "styled-components";

const Body = ({ children }) => {
  return (
    <Container>
      {Array.isArray(children)
        ? children.map((parag, index) => <p key={index}>{parag}</p>)
        : children}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  gap: calc(${({ theme }) => theme.gap} / 2);
`;

export default Body;
