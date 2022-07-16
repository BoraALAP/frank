import React from "react";
import styled from "styled-components";

const Tabs = ({ tabs, onClick, active }) => {
  return (
    <Container>
      {tabs.map((item, index) => {
        return (
          <Tab
            key={index}
            active={active === index}
            onClick={() => onClick(index)}
          >
            <h6>{item}</h6>
          </Tab>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  gap: calc(var(--gap) / 2);
  grid-auto-flow: column;
  width: 100%;
  overflow-x: auto;
  cursor: move;
  justify-content: start;
  cursor: grab;
  &::-webkit-scrollbar {
    height: 8px;
  }
`;

const Tab = styled.div`
  display: grid;
  padding: 0.5rem 1rem;
  width: fit-content;
  white-space: nowrap;
  cursor: grab;
  border-bottom: ${(props) =>
    props.active
      ? `3px solid var(--color-secondary)`
      : `1px solid var(--color-lightGrey)`}; ;
`;

export default Tabs;
