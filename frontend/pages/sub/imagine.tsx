import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import { gql, useQuery } from "@apollo/client";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

import { Container } from "../../components/layout/Container";

import Lightbox from "../../UI/Lightbox";
import { GlobalContext } from "../../context/context";
import { ErrorMessages } from "../../UI/FormElements";
import { Facebook, Instagram, Linkedin } from "../../assets/icons/Social";

const imagine = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const { data, loading, error } = useQuery(images);

  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(0);

  const escFunction = (event) => {
    if (event.keyCode === 27) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  });

  const handleModal = (index) => {
    setSelected(index);

    setModal(!modal);
  };
  const handleClose = () => {
    setModal(!modal);
  };

  const incNumber = () => {
    setSelected(selected + 1 !== data?.allImagines?.length ? selected + 1 : 0);
  };

  const decNumber = () => {
    setSelected(selected !== 0 ? selected - 1 : data?.allImagines?.length - 1);
  };

  const { dispatch } = useContext(GlobalContext);
  return (
    <BigContainer>
      <Container space pageGap padding title="Imagine Page">
        <Context>
          <Header>
            <h1>Imagine with Frank™.</h1>
            <p>
              Frank™ is here to help you imagine what your home could be. We
              hope browsing through our gallery will give you a sense of the
              wide range of custom options we offer. Whether you are a building
              professional with a keen eye for detail or a homeowner looking for
              inspiration, imagine the possibilities with Frank™.
            </p>
            <Social>
              <a
                href="https://www.facebook.com/frankWD.2020"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/frankwindowsdoors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://www.linkedin.com/company/frank-windows-doors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </Social>
            <InstagramFeed
              token="IGQVJXcHRKbGNxUU9MSHBSa2pfc0xGYlFQelFVSFBzRVUyZA3FJWEtEbkc0d2duYkZAIanh5ZAXdMV2QzSFo5UWZA3MndibHUtc0RteVkxZATB5RF80TnEzNWdzSHcwSVZALbFY1RUZA2OXdOTDFOZAGRYZA1J4cgZDZD"
              counter="12"
            />
          </Header>
          <ImageContainer>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {!loading && data?.allImagines?.length > 0 ? (
                data?.allImagines?.map((img, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        handleModal(index),
                          dispatch({
                            type: "HEADER_SHOW",
                            headerShow: false,
                          });
                      }}
                    >
                      <img
                        src={img.image.publicUrl}
                        key={index}
                        alt={img.description}
                      />
                    </button>
                  );
                })
              ) : (
                <ErrorMessages>
                  Sorry no images are coming from our not so awesome database"
                </ErrorMessages>
              )}
            </Masonry>
          </ImageContainer>
        </Context>
      </Container>
      {modal && !loading && data?.allImagines.length > 0 && (
        <Lightbox
          src={data?.allImagines[selected]?.image.publicUrl}
          incNumber={incNumber}
          decNumber={decNumber}
          open={modal}
          close={handleClose}
          description={data?.allImagines[selected]?.description}
          productName={
            data?.allImagines[selected]?.product.length > 0 &&
            data?.allImagines[selected]?.product[0].name
          }
        />
      )}
    </BigContainer>
  );
};

const Social = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  justify-content: start;
`;

const BigContainer = styled.div`
  display: grid;
`;

const Context = styled.div`
  display: grid;
  gap: calc(var(--gap) * 2);
`;

const ImageContainer = styled.div`
  display: grid;
  width: 100%;

  .my-masonry-grid {
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
    img {
      width: 100%;
      padding-bottom: 30px;
      @media screen and (min-width: 768px) {
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
    background: var(--color-white);
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
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
  gap: var(--gap);
`;

const images = gql`
  query {
    allImagines {
      id
      image {
        id
        originalFilename
        publicUrl
      }
      description
      product {
        id
        name
      }
    }
  }
`;

export default imagine;
