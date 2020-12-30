import React from "react";
import styled from "styled-components";
import SlidingDoorTemplate from "../../../template/SlidingDoorTemplate";
import { ImageOverlap } from "../../../components/pageSpecific/products/ImageOverlap";

const liftandslide = () => {
  return (
    <SlidingDoorTemplate title="Lift and Slide">
      <ImageOverlap />
    </SlidingDoorTemplate>
  );
};

const Container = styled.div`
  display: grid;
`;

export default liftandslide;
