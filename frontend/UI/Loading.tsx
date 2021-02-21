import styled from "styled-components";
import { Container } from "../components/layout/Container";

export const Loading = () => {
  return (
    <Container padding space pageGap>
      <Context>Loading</Context>
    </Container>
  );
};

const Context = styled.div`
  display: grid;
  height: 50vh;
  justify-content: center;
  align-content: center;
  width: 100%;
`;
