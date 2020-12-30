import React from "react";
import styled from "styled-components";
import SlidingDoorTemplate from "../../../template/SlidingDoorTemplate";
import { ImageOverlap } from "../../../components/pageSpecific/products/ImageOverlap";

const foldingdoor = () => {
  return (
    <SlidingDoorTemplate title="Folding Door">
      <ImageOverlap />
    </SlidingDoorTemplate>
  );
};

const Container = styled.div`
  display: grid;
`;

export default foldingdoor;
