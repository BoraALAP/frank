import React from "react";
import styled from "styled-components";
import { Container } from "../../layout/Container";

interface TableProps {
  id?: string;
  product?: boolean;
  data: any;
}

const Table = ({ id, product = false, data }: TableProps) => {
  return (
    <Container id={id}>
      <Scrollable>
        <TableContainer>
          <TableLabel product={product} />
          {data.map((item, index) => {
            return (
              <TableItem
                data={item}
                key={index}
                index={index}
                product={product}
              />
            );
          })}
        </TableContainer>
      </Scrollable>
    </Container>
  );
};

const TableLabel = ({ product = false }) => {
  return (
    <LabelContainer product={product}>
      {!product && <h6>SERIES</h6>}
      {!product && <h6>TYPE</h6>}
      <h6>OPTION</h6>
      <h6>U</h6>
      <h6>SHGC</h6>
      <h6>ER</h6>
      <h6>EST. SAVING</h6>
    </LabelContainer>
  );
};

const TableItem = ({ data, index, product }) => {
  const { series, type, option, u, shgc, er, estSaving }: any = { ...data };

  return (
    <ItemContainer odd={index % 2 == 0} product={product}>
      {series && <span>{series}</span>}
      {type && <span>{type}</span>}
      <span>{option}</span>
      <span>{u}</span>
      <span>{shgc}</span>
      <span>{er}</span>
      <span>{estSaving}</span>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.product
      ? `3fr 0.5fr 0.5fr 0.5fr 1fr`
      : `1fr 2fr 3fr 0.5fr 0.5fr 0.5fr 1fr`};
  background-color: ${(props) =>
    props.odd ? "var(--color-highlight)" : "inherit"};
  padding: calc(var(--gap) / 4) calc(var(--gap) / 2);
  gap: var(--gap);
`;

const LabelContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.product
      ? `3fr 0.5fr 0.5fr 0.5fr 1fr`
      : `1fr 2fr 3fr 0.5fr 0.5fr 0.5fr 1fr`};
  background-color: var(--color-lightGrey2);
  padding: calc(var(--gap) / 4) calc(var(--gap) / 2);
  gap: var(--gap);
`;

const TableContainer = styled.div`
  display: grid;
  overflow-x: auto;
  min-width: 1136px;
`;

const Scrollable = styled.div`
  overflow-x: auto;
`;

export default Table;
