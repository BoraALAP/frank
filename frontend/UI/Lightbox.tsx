import styled from "styled-components";
import Image from "next/image";
import { TertiaryButton } from "./Links";

import Close from "../assets/icons/lightboxCross";
import Prev from "../assets/icons/arrowLeft";
import Next from "../assets/icons/arrowRight";

interface Props {
  src: string;

  incNumber: any;
  decNumber: any;
  open: boolean;
  close: any;

  description?: string;
  productName?: string;
}

const Lightbox = ({
  src,
  incNumber,
  decNumber,
  open,
  close,
  description,
  productName,
}: Props) => {
  let url = "";
  let name = "";

  switch (productName) {
    case "CORE":
      url = "/products/windows/core";
      name = "Core";
      break;
    case "COREPLUS":
      url = "/products/windows/coreplus";
      name = "Core+";
      break;
    case "ENERSENSE":
      url = "/products/windows/enersense";
      name = "Enersense";
      break;
    case "PRISM":
      url = "/products/windows/prism";
      name = "Prism";
      break;
    case "DESIGNER":
      url = "/products/entrydoors/designer";
      name = "Designer";
      break;
    case "CLASSIC":
      url = "/products/entrydoors/classic";
      name = "Classic";
      break;
    case "ARTISAN":
      url = "/products/entrydoors/artisan";
      name = "Artisan";
      break;
    case "MOOSE":
      url = "/products/slidingdoors/moose";
      name = "Moose";
      break;
    case "MOOSEPLUS":
      url = "/products/slidingdoors/mooseplus";
      name = "Moose+";
      break;
    case "ORCHESTRADOOR":
      url = "/products/slidingdoors/orchestradoor";
      name = "Orchestra Door";
      break;
    case "FOLDINGDOOR":
      url = "/products/slidingdoors/foldingdoor";
      name = "Foldingd Door";
      break;
    case "LIFTANDSLIDE":
      url = "/products/slidingdoors/liftandslide";
      name = "Lift and Slide";
      break;

    default:
      break;
  }

  return (
    <Container open={open}>
      <Context>
        <Icon onClick={decNumber}>
          <Prev color="white" />
        </Icon>

        <Middle>
          <Icon onClick={close}>
            <Close color="white" />
          </Icon>
          <ImageContainer>
            <Image
              src={src}
              alt={description}
              layout="fill"
              objectFit="contain"
            />
          </ImageContainer>
          <Details>
            <p>{description}</p>
            <TertiaryButton href={url}>View {name}</TertiaryButton>
          </Details>
        </Middle>
        <Icon onClick={incNumber}>
          <Next color="white" />
        </Icon>
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
  gap: var(--gap);
`;

const Details = styled.div`
  display: grid;
  justify-content: start;
  justify-items: start;
  justify-self: start;
  color: var(--color-white);
  z-index: 10;
  width: 70vw;
  max-width: 900px;
  gap: calc(var(--gap) / 2);
  a {
    color: var(--color-white);
  }
`;

const BG = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  background-color: var(--color-overlay);
`;

const ImageContainer = styled.div`
  display: grid;
  position: relative;
  height: 60vh;
  min-width: 70vw;
  max-width: 900px;
  z-index: 3;
  div {
    max-width: 900px;
  }
`;

const Icon = styled.div`
  display: grid;
  height: 40px;
  width: 40px;
  padding: 8px;
  z-index: 10;
`;

export default Lightbox;
