import React from "react";
import styled from "styled-components";
import EntryDoorTemplate from "../../../template/EntryDoorTemplate";
import ImageOverlap from "../../../components/pageSpecific/products/ImageOverlap";

const artisan = () => {
  return (
    <EntryDoorTemplate title="Artisan">
      <ImageOverlap />
    </EntryDoorTemplate>
  );
};

const Container = styled.div`
  display: grid;
`;

export default artisan;
