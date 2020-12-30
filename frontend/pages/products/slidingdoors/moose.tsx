import React from "react";
import styled from "styled-components";
import SlidingDoorTemplate from "../../../template/SlidingDoorTemplate";
import { ImageOverlap } from "../../../components/pageSpecific/products/ImageOverlap";

const moose = () => {
  return (
    <SlidingDoorTemplate title="Moose">
      <ImageOverlap />
    </SlidingDoorTemplate>
  );
};

const Container = styled.div`
  display: grid;
`;

export default moose;
