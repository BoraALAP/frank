import React from "react";
import styled from "styled-components";
import ImageOverlap from "../../../components/pageSpecific/products/ImageOverlap";
import WindowsTemplate from "../../../template/WindowsTemplate";

const enersense = () => {
  return (
    <WindowsTemplate title="Enersense">
      <ImageOverlap />
    </WindowsTemplate>
  );
};

const Container = styled.div`
  display: grid;
`;

export default enersense;
