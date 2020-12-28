import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Lightbox = ({ src, alt, incNumber, decNumber, open, close }) => {
  return (
    <Container open={open}>
      <Context>
        <Prev onClick={decNumber} />
        <Middle>
          <Close onClick={close} />
          <ImageContainer>
            <Image src={src} alt={alt} layout="fill" objectFit="contain" />
          </ImageContainer>
        </Middle>
        <Next onClick={incNumber} />
      </Context>
      <BG onClick={close} />
    </Container>
  );
};

const Container = styled.div`
  display: ${(props) => (props.open ? "grid" : "none")};
  width: 100vw;
  height: 100vh;

  position: fixed;
`;
const Context = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  justify-content: space-between;
`;

const Middle = styled.div`
  display: grid;
  justify-items: end;
`;

const BG = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  background-color: ${({ theme }) => theme.color.overlay};
`;

const ImageContainer = styled.div`
  display: grid;
  position: relative;
  height: 80vh;
  width: 80vw;
  z-index: 3;
`;

const Icon = styled.div`
  display: grid;
  height: 32px;
  width: 32px;
  background-color: ${({ theme }) => theme.color.secondary};
  z-index: 3;
`;

const Prev = styled(Icon)`
  display: grid;
`;

const Next = styled(Icon)`
  display: grid;
`;

const Close = styled(Icon)`
  display: grid;
`;

export default Lightbox;
