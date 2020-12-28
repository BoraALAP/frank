import React, { useState } from "react";
import styled from "../products/windows/node_modules/styled-components";
import Image from "next/image";
import Masonry from "react-masonry-css";

import { Container } from "../../components/layout/Container";

import imagine1 from "../../assets/images/imagine/imagine1.jpg";
import imagine2 from "../../assets/images/imagine/imagine2.jpg";
import imagine3 from "../../assets/images/imagine/imagine3.jpg";
import imagine4 from "../../assets/images/imagine/imagine4.jpg";
import imagine5 from "../../assets/images/imagine/imagine5.jpg";
import imagine6 from "../../assets/images/imagine/imagine6.jpg";
import imagine7 from "../../assets/images/imagine/imagine7.jpg";
import imagine8 from "../../assets/images/imagine/imagine8.jpg";
import imagine9 from "../../assets/images/imagine/imagine9.jpg";
import imagine10 from "../../assets/images/imagine/imagine10.jpg";
import imagine11 from "../../assets/images/imagine/imagine11.jpg";
import imagine12 from "../../assets/images/imagine/imagine12.jpg";
import imagine13 from "../../assets/images/imagine/imagine13.jpg";
import imagine14 from "../../assets/images/imagine/imagine14.jpg";
import imagine15 from "../../assets/images/imagine/imagine15.jpg";
import imagine16 from "../../assets/images/imagine/imagine16.jpg";
import imagine17 from "../../assets/images/imagine/imagine17.jpg";
import imagine18 from "../../assets/images/imagine/imagine18.jpg";
import imagine19 from "../../assets/images/imagine/imagine19.jpg";
import imagine20 from "../../assets/images/imagine/imagine20.jpg";
import imagine21 from "../../assets/images/imagine/imagine21.jpg";
import imagine22 from "../../assets/images/imagine/imagine22.jpg";
import imagine23 from "../../assets/images/imagine/imagine23.jpg";
import imagine24 from "../../assets/images/imagine/imagine24.jpg";
import imagine25 from "../../assets/images/imagine/imagine25.jpg";
import imagine26 from "../../assets/images/imagine/imagine26.jpg";
import imagine27 from "../../assets/images/imagine/imagine27.jpg";
import imagine28 from "../../assets/images/imagine/imagine28.jpg";
import imagine29 from "../../assets/images/imagine/imagine29.jpg";
import imagine30 from "../../assets/images/imagine/imagine30.jpg";
import imagine31 from "../../assets/images/imagine/imagine31.jpg";
import imagine32 from "../../assets/images/imagine/imagine32.jpg";
import imagine33 from "../../assets/images/imagine/imagine33.jpg";
import imagine34 from "../../assets/images/imagine/imagine34.jpg";
import imagine35 from "../../assets/images/imagine/imagine35.jpg";
import imagine36 from "../../assets/images/imagine/imagine36.jpg";
import imagine37 from "../../assets/images/imagine/imagine37.jpg";
import imagine38 from "../../assets/images/imagine/imagine38.jpg";
import imagine39 from "../../assets/images/imagine/imagine39.jpg";
import imagine40 from "../../assets/images/imagine/imagine40.jpg";
import Lightbox from "../../components/UI/Lightbox";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const imagine = () => {
  const imagelist = [
    {
      name: "",
      src: imagine1,
    },
    {
      name: "",
      src: imagine2,
    },
    {
      name: "",
      src: imagine3,
    },
    {
      name: "",
      src: imagine4,
    },
    {
      name: "",
      src: imagine5,
    },
    {
      name: "",
      src: imagine6,
    },
    {
      name: "",
      src: imagine7,
    },
    {
      name: "",
      src: imagine8,
    },
    {
      name: "",
      src: imagine9,
    },
    {
      name: "",
      src: imagine11,
    },
    {
      name: "",
      src: imagine12,
    },
    {
      name: "",
      src: imagine13,
    },
    {
      name: "",
      src: imagine14,
    },
    {
      name: "",
      src: imagine15,
    },
    {
      name: "",
      src: imagine16,
    },
    {
      name: "",
      src: imagine17,
    },
    {
      name: "",
      src: imagine18,
    },
    {
      name: "",
      src: imagine19,
    },
    {
      name: "",
      src: imagine20,
    },
    {
      name: "",
      src: imagine21,
    },
    {
      name: "",
      src: imagine22,
    },
    {
      name: "",
      src: imagine23,
    },
    {
      name: "",
      src: imagine24,
    },
    {
      name: "",
      src: imagine25,
    },
    {
      name: "",
      src: imagine26,
    },
    {
      name: "",
      src: imagine27,
    },
    {
      name: "",
      src: imagine28,
    },
    {
      name: "",
      src: imagine29,
    },
    {
      name: "",
      src: imagine30,
    },
    {
      name: "",
      src: imagine31,
    },
    {
      name: "",
      src: imagine32,
    },
    {
      name: "",
      src: imagine33,
    },
    {
      name: "",
      src: imagine34,
    },
    {
      name: "",
      src: imagine35,
    },
    {
      name: "",
      src: imagine36,
    },
    {
      name: "",
      src: imagine37,
    },
    {
      name: "",
      src: imagine38,
    },
    {
      name: "",
      src: imagine39,
    },
    {
      name: "",
      src: imagine40,
    },
  ];

  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(0);

  const handleModal = (index) => {
    setSelected(index);

    setModal(!modal);
  };
  const handleClose = () => {
    console.log("close");

    setModal(!modal);
  };

  const incNumber = () => {
    console.log("inc");

    setSelected(selected + 1 !== imagelist.length ? selected + 1 : 0);
  };

  const decNumber = () => {
    console.log("dec");
    setSelected(selected !== 0 ? selected - 1 : imagelist.length - 1);
  };

  return (
    <BigContainer>
      <Container space gap padding>
        <Context>
          <Header>
            <h1>Imagine with Frank.</h1>
            <p>
              Look at the variety of products, and appreciate the diversity of
              custom options Frank offers. This gallery allows you to explore
              some of our most recent projects. Whether you are a building
              professional with a keen eye for detail, or homeowner looking for
              inspiration, imagine the possibilities with Frank.
            </p>
          </Header>
          <ImageContainer>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {imagelist.map((img, index) => (
                <img
                  src={img.src}
                  key={index}
                  alt={img.name}
                  onClick={() => handleModal(index)}
                />
              ))}
            </Masonry>
          </ImageContainer>
        </Context>
      </Container>
      <Lightbox
        src={imagelist[selected].src}
        incNumber={incNumber}
        decNumber={decNumber}
        alt={imagelist[selected].name}
        open={modal}
        close={handleClose}
      />
    </BigContainer>
  );
};
const BigContainer = styled.div`
  display: grid;
`;

const Context = styled.div`
  display: grid;
  gap: calc(${({ theme }) => theme.gap} * 2);
`;

const ImageContainer = styled.div`
  display: grid;
  width: 100%;

  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
    img {
      width: 100%;
      padding-bottom: 30px;
      @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
        padding-bottom: 15px;
      }
    }
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    .my-masonry-grid {
      margin-left: -15px; /* gutter size offset */
    }
    .my-masonry-grid_column {
      padding-left: 15px; /* gutter size offset */
    }
    .my-masonry-grid_column > div {
      margin-bottom: 15px; /* space between items */
    }
  }
`;

const Header = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.gap};
`;

export default imagine;
