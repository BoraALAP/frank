import React from "react";
import styled from "styled-components";
import PatioDoorTemplate from "../../../template/PatioDoorTemplate";
import ImageOverlap from "../../../components/pageSpecific/products/ImageOverlap";

const liftandslide = () => {
  return (
    <PatioDoorTemplate title="Lift and Slide">
      <ImageOverlap />
    </PatioDoorTemplate>
  );
};

const Container = styled.div`
  display: grid;
`;

export default liftandslide;
