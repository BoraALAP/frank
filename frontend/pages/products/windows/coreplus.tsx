import React from "react";
import styled from "styled-components";
import { ImageOverlap } from "../../../components/pageSpecific/products/ImageOverlap";
import WindowsTemplate from "../../../template/WindowsTemplate";

const coreplus = () => {
  return (
    <WindowsTemplate title="Core+">
      <ImageOverlap />
    </WindowsTemplate>
  );
};

const Container = styled.div`
  display: grid;
`;

export default coreplus;
