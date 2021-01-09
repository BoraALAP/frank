import { useState } from "react";
import styled from "styled-components";

import { motion, AnimatePresence } from "framer-motion";
import { NavLinks } from "../UI/Links";

const Menu = (props) => {
  const [imageSrc, setImageSrc] = useState({
    image1: "/menuImages/menuImage1.jpg",
    image2: "/menuImages/menuImage2.jpg",
  });

  const opacity = {
    initial: { x: -10, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 10, opacity: 0 },
  };

  const links = [
    {
      item: [
        {
          href: "/products/windows",
          name: "Windows",
          image1: "/menuImages/menu1.jpg",
          image2: "/menuImages/menu2.jpg",
        },
        {
          href: "/products/entrydoors",
          name: "Entry Doors",
          image1: "/menuImages/menu3.jpg",
          image2: "/menuImages/menu4.jpg",
        },
        {
          href: "/products/slidingdoors",
          name: "Sliding Doors",
          image1: "/menuImages/menu5.jpg",
          image2: "/menuImages/menu6.jpg",
        },
      ],
    },
    {
      item: [
        {
          href: "/sub/frank",
          name: "Who is Frank?",
          image1: "/menuImages/menu7.jpg",
          image2: "/menuImages/menu8.jpg",
        },
        {
          href: "/sub/imagine",
          name: "Imagine",
          image1: "/menuImages/menu9.jpg",
          image2: "/menuImages/menu10.jpg",
        },
        {
          href: "/sub/designOptions",
          name: "Design Options",
          image1: "/menuImages/menu13.jpg",
          image2: "/menuImages/menu14.jpg",
        },
        {
          href: "/sub/learn",
          name: "Learn",
          image1: "/menuImages/menu13.jpg",
          image2: "/menuImages/menu14.jpg",
        },
        // {
        //   href: "/sub/make",
        //   name: "Make",
        //   image1: "/menuImages/menu11.jpg",
        //   image2: "/menuImages/menu12.jpg",
        // },
        {
          href: "/sub/dealerfinder",
          name: "Find a Dealer",
          image1: "/menuImages/menu19.jpg",
          image2: "/menuImages/menu20.jpg",
        },
      ],
    },
    {
      item: [
        {
          href: "/contactus",
          name: "Contact Us",
          image1: "/menuImages/menu15.jpg",
          image2: "/menuImages/menu16.jpg",
          prop: "Bottom",
        },
        {
          href: "/user",
          name: props.me ? "Account" : "Dealer Login",
          image1: "/menuImages/menu17.jpg",
          image2: "/menuImages/menu18.jpg",
          prop: "Bottom",
        },
      ],
    },
  ];

  return (
    <AnimatePresence exitBeforeEnter>
      {props.open && (
        <Context
          initial={{ y: "-100vh" }}
          animate={{ y: "0vh" }}
          transition={{ duration: 0.25 }}
          exit={{ y: "-100vh" }}
          key="context"
        >
          <Container
            initial={{ y: "-100vh" }}
            animate={{ y: "0vh" }}
            transition={{ duration: 0.25 }}
            exit={{ y: "-100vh" }}
            key="context"
          >
            <ImgContainer
              initial="initial"
              animate="animate"
              exit="exit"
              variants={opacity}
              transition={{ delay: 0.35, duration: 0.75 }}
            >
              <ImgCont>
                <AnimatePresence exitBeforeEnter>
                  <ImageS
                    layout="fill"
                    objectFit="cover"
                    src={imageSrc.image1}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </AnimatePresence>
              </ImgCont>
              <ImgCont>
                <AnimatePresence exitBeforeEnter>
                  <ImageS
                    layout="fill"
                    objectFit="cover"
                    src={imageSrc.image2}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                  />
                </AnimatePresence>
              </ImgCont>
            </ImgContainer>

            <Right
              initial="initial"
              animate="animate"
              exit="exit"
              variants={opacity}
              transition={{ delay: 0.65, duration: 0.75 }}
            >
              {links.map((location, index) => {
                console.log(location);

                return (
                  <Divide key={index}>
                    {location?.item?.map((it, index) => (
                      <NavLinks
                        href={it.href}
                        Bottom={it.prop}
                        key={index}
                        onMouseEnter={() => {
                          setImageSrc({ image1: it.image1, image2: it.image2 });
                        }}
                      >
                        {it.name}
                      </NavLinks>
                    ))}
                  </Divide>
                );
              })}
            </Right>
          </Container>
        </Context>
      )}
    </AnimatePresence>
  );
};

const Container = styled(motion.div)`
  display: grid;

  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  padding: ${({ theme }) => `160px calc(2.5vh + ${theme.padding})`};
  height: 100%;
  max-height: 900px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    grid-template-columns: auto 25%;
    gap: calc(2 * ${({ theme }) => theme.gap});
  }
`;

const Context = styled.div`
  display: grid;
  position: absolute;
  background-color: ${({ theme }) => theme.color.bg};
  top: 0;
  z-index: 800;
  height: 100vh;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.mq.small}) {
    width: 100vw;
  }
`;

const ImageS = styled(motion.div)`
  background-image: url(${(props) => props.src});
  background-position: 50% 50%;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const ImgContainer = styled(motion.div)`
  position: relative;
  height: 100%;
  display: none;
  gap: ${({ theme }) => theme.gap};
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    display: grid;
  }
`;

const ImgCont = styled.div`
  display: grid;
  position: relative;
  height: 100%;
`;

const Right = styled(motion.div)`
  display: grid;
  /* gap: calc(2 * ${({ theme }) => theme.gap}); */
  align-items: start;
  align-content: space-between;

  @media (min-width: 768px) {
    align-content: space-between;
    height: 100%;
  }
`;

const Divide = styled.div`
  display: grid;
  gap: calc(${({ theme }) => theme.gap} / 4);
`;

const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.primary};
`;

export default Menu;
