import React from "react";
import styled from "styled-components";
import EntryDoorTemplate from "../../../template/EntryDoorTemplate";
import ImageOverlap from "../../../components/pageSpecific/products/ImageOverlap";

const modo = () => {
  return (
    <EntryDoorTemplate title="Modo">
      <ImageOverlap />
    </EntryDoorTemplate>
  );
};

const Container = styled.div`
  display: grid;
`;

export default modo;
