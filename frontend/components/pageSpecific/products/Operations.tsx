import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { motion, AnimatePresence } from "framer-motion";

import Details from "./Details";
import { Container } from "../../layout/Container";
import Tabs from "../../global/Tabs";
import Link from "next/link";

interface Props {
  list?: any;
  video?: Boolean;
  title?: String;
  subTitle?: String;
  description?: any;
  padding?: Boolean;
  contain?: Boolean;
  id?: string;
  key?: string;
  url?: string;
}

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const Operations = ({
  list,
  video = false,
  title,
  subTitle,
  description,
  padding = false,
  contain = false,
  id,
}: Props) => {
  const [videoSrc, setVideoSrc] = useState();
  const [imageSrc, setImageSrc] = useState();
  const [operationName, setOperationName] = useState();
  const [descriptions, setDescription] = useState();
  const [url, setUrl] = useState();
  const [products, setProducts] = useState([]);
  2;
  const [itemId, setItemId] = useState();
  const [active, setActive] = useState();
  useEffect(() => {
    setImageSrc(
      list && list[0]?.imageDisplay?.publicUrl
        ? list[0].imageDisplay.publicUrl
        : list[0]?.image?.publicUrl
    );

    setVideoSrc(list && list[0]?.video);
    setOperationName(list && list[0]?.name);
    setDescription(list && list[0]?.description);
    setUrl(list && list[0]?.url);
    setItemId(list && list[0]?.id);
    setProducts(list && list[0]?.products);
  }, [list]);

  const arrayLabel = list
    .map((value) => {
      return Array.isArray(value?.type) ? value?.type[0]?.name : value?.type;
    })
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  const arrayItems = list.reduce((acc, curr) => {
    if (Array.isArray(curr?.type)) {
      if (!acc[curr.type[0].name]) {
        acc[curr.type[0].name] = [];
      }
      acc[curr.type[0].name].push(curr);
      return acc;
    } else {
      if (!acc[curr.type]) {
        acc[curr.type] = [];
      }
      acc[curr.type].push(curr);
      return acc;
    }
  }, {});

  const [hoverState, setHoverState] = useState({
    backgroundPosition: "center center",
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    // const x = ((e.clientX - left) / width) * 100;
    // const y = ((e.clientY - top) / height) * 100;

    let xposition = e.clientX - left;
    let yposition = e.clientY - top;

    let x = Math.round(100 / (width / xposition));
    let y = Math.round(100 / (height / yposition));
    setHoverState({ backgroundPosition: `${x}% ${y}%` });
  };

  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container gap padding={padding && true} id={id}>
      {(title || subTitle) && (
        <Details title={title} subtitle={subTitle} transparent>
          {description}
        </Details>
      )}
      {arrayLabel.length > 1 && (
        <Tabs
          tabs={arrayLabel}
          onClick={(e) => {
            setActiveTab(e);
          }}
          active={activeTab}
        />
      )}
      {arrayItems[arrayLabel[activeTab]] && (
        <Middle>
          <Left>
            {videoSrc && video ? (
              <AnimatePresence exitBeforeEnter>
                <VideoContainer
                  key={itemId}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35 }}
                >
                  <ReactPlayer
                    url={videoSrc}
                    playing
                    loop
                    muted
                    // controls
                    width="100%"
                    height="auto"
                    className="video"
                  />
                </VideoContainer>
              </AnimatePresence>
            ) : (
              <div style={{ overflow: "hidden" }}>
                <AnimatePresence exitBeforeEnter>
                  <ImageS
                    alt={operationName}
                    key={itemId}
                    src={imageSrc}
                    onMouseMove={handleMouseMove}
                    onMouseOut={() =>
                      setHoverState({ backgroundPosition: "center center" })
                    }
                    style={hoverState}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    contain={contain}
                    transition={{ duration: 0.35 }}
                  />
                </AnimatePresence>
              </div>
            )}
            <AnimatePresence exitBeforeEnter>
              <TextDetails
                key={itemId}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35 }}
              >
                {operationName && <h6>{operationName}</h6>}
                {description && <p>{descriptions}</p>}
                {url && (
                  <a href={url} target="_blank">
                    Learn More
                  </a>
                )}
                {products && (
                  <ProductDisplay>
                    {products.map((item) => (
                      <p key={item.id}>{item.name}</p>
                    ))}
                  </ProductDisplay>
                )}
              </TextDetails>
            </AnimatePresence>
          </Left>
          <Right>
            {arrayItems[arrayLabel[activeTab]]?.map((item) => {
              return (
                <button
                  key={item.id}
                  aria-label="option thumbnail"
                  // onMouseEnter={() => {
                  //   item.video && setVideoSrc(item.video);
                  //   item.image &&
                  //     setImageSrc(
                  //       item.imageDisplay
                  //         ? item.imageDisplay?.publicUrl
                  //         : item.image?.publicUrl
                  //     );
                  //   setOperationName(item.name);
                  //   setDescription(item.description);
                  //   setActive(item.id);
                  //   setItemId(item.id);
                  //   item.products && setProducts(item.products);
                  // }}
                  onClick={() => {
                    setVideoSrc(item.video);
                    item.image &&
                      setImageSrc(
                        item.imageDisplay
                          ? item.imageDisplay?.publicUrl
                          : item.image?.publicUrl
                      );
                    setDescription(item.description);
                    setDescription(item.url);
                    setActive(item.id);
                    setOperationName(item.name);
                    setItemId(item.id);
                    item.product && setProducts(item.products);
                  }}
                >
                  <ImageContainer
                    key={item.id}
                    src={item.image?.publicUrl}
                    alt={item.image?.originalFilename}
                    active={item.id === active}
                    contain={contain}
                  />
                </button>
              );
            })}
          </Right>
        </Middle>
      )}
    </Container>
  );
};

const Middle = styled.div`
  display: grid;

  gap: var(--gap);
  align-items: start;
  align-content: start;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Left = styled.div`
  display: grid;
  align-content: start;
  gap: calc(var(--gap) / 2);

  div.video {
    height: 300px;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    position: sticky;
    height: min-content;
    top: 0;
  }
`;

const Right = styled.div`
  display: grid;
  gap: calc(var(--gap) / 4);
  grid-template-columns: repeat(auto-fit, minmax(6rem, 6rem));
  justify-content: start;
  align-content: start;
`;

const VideoContainer = styled(motion.div)`
  display: grid;
`;

const ImageContainer = styled.div`
  display: grid;
  height: 6rem;
  width: 6rem;
  background-color: var(--color-white);
  background-image: url(${(props) => props.src});
  background-size: ${(props) => (props.contain ? "contain" : "cover")};
  background-repeat: no-repeat;
  background-position: center;
  border: ${(props) =>
    props.active
      ? `1px solid var(--color-primary)`
      : `0px solid var(--color-primary)`};
  outline: ${(props) =>
    props.active
      ? `1px solid var(--color-white)`
      : `0px solid var(--color-primary)`};
  box-shadow: ${(props) => props.active && `var(--boxShadow)`};
  box-sizing: border-box;

  transition: box-shadow 0.35s ease-in-out, border 0.15s ease-in-out;
`;

const ImageS = styled(motion.div)`
  background-image: url(${(props) => props.src});
  background-size: ${(props) => (props.contain ? "contain" : "cover")};
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--color-white);
  width: 100%;
  height: 300px;

  overflow: hidden;
  transition: transform 0.35s ease-in-out;
  &:hover {
    opacity: 0;

    background-size: auto;
  }

  @media screen and (min-width: 768px) {
    max-height: 450px;
    height: 50vw;
    min-height: 250px;
  }
`;

const ProductDisplay = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 20px;
`;

const TextDetails = styled(motion.div)`
  display: grid;
`;
