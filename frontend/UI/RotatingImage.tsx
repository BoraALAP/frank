import React from "react";
import styled from "styled-components";
import { Container } from "../components/layout/Container";
import Tridi from "react-tridi";
import "react-tridi/dist/index.css";

interface Props {
  location: string;
  frame: string;
}

const RotatingImage = ({ location, frame }: Props) => {
  return (
    <ImgCont>
      <Tridi
        location={`/${location}`}
        format="jpg"
        count={frame}
        autoplay
        hintOnStartUp
        stopAutoplayOnMouseEnter
        resumeAutoplayOnMouseLeave
      />
    </ImgCont>
  );
};

const ImgCont = styled.div`
  display: grid;
  width: 100%;
  height: 600px;
`;

export default RotatingImage;
