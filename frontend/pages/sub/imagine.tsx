import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import { gql, useQuery } from "@apollo/client";

import { Container } from "../../components/layout/Container";

import Lightbox from "../../UI/Lightbox";
import { GlobalContext } from "../../context/context";
import { ErrorMessages } from "../../UI/FormElements";

const imagine = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const { data, loading, error } = useQuery(images);
  console.log(data);

  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(0);

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

  const { store, dispatch } = useContext(GlobalContext);
  return (
    <BigContainer>
      <Container space pageGap padding title="Imagine Page">
        <Context>
          <Header>
            <h1>Imagine with Frank.</h1>
            <p>
              FRANK is here to help you imagine what your home could be. We hope
              browsing through our gallery will give you a sense of the wide
              range of custom options we offer. Whether you are a building
              professional with a keen eye for detail or a homeowner looking for
              inspiration, imagine the possibilities with FRANK.
            </p>
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
                    <img
                      src={img.image.publicUrl}
                      key={index}
                      alt={img.description}
                      onClick={() => {
                        handleModal(index),
                          dispatch({ type: "HEADER_SHOW", headerShow: false });
                      }}
                    />
                  );
                })
              ) : (
                <ErrorMessages>
                  Sorry no images are coming from our not so awesome database"{" "}
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
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
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
