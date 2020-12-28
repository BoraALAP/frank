import React from "react";
import styled from "styled-components";
import EntryDoorTemplate from "../../../template/EntryDoorTemplate";
import ImageOverlap from "../../../components/pageSpecific/products/ImageOverlap";

const classic = () => {
  return (
    <EntryDoorTemplate title="Classic">
      <ImageOverlap />
    </EntryDoorTemplate>
  );
};

export default classic;
