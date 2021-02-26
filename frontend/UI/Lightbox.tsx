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

  console.log(src, description, productName);

  switch (productName) {
    case "Core":
      url = "/products/core";
      name = "Core";
      break;
    case "Core+":
      url = "/products/coreplus";
      name = "Core+";
      break;
    case "Enersense":
      url = "/products/enersense";
      name = "Enersense";
      break;
    case "Prism":
      url = "/products/prism";
      name = "Prism";
      break;
    case "Designer":
      url = "/products/designer";
      name = "Designer";
      break;
    case "Classic":
      url = "/products/classic";
      name = "Classic";
      break;
    case "Artisan":
      url = "/products/artisan";
      name = "Artisan";
      break;
    case "Moose":
      url = "/products/moose";
      name = "Moose";
      break;
    case "Moose+":
      url = "/products/mooseplus";
      name = "Moose+";
      break;
    case "Orchestra Door":
      url = "/products/orchestradoor";
      name = "Orchestra Door";
      break;
    case "Folding Door":
      url = "/products/foldingdoor";
      name = "Folding Door";
      break;
    case "Lift and Slide":
      url = "/products/liftandslide";
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
            {productName && (
              <TertiaryButton rev href={url}>
                View {name}
              </TertiaryButton>
            )}
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
  justify-content: center;

  justify-self: center;
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
