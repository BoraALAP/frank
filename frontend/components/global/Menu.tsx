import { useState } from "react";
import styled from "styled-components";

import { motion, AnimatePresence } from "framer-motion";
import { NavLinks } from "../../UI/Links";
import { useAuth } from "../../lib/Authentication";
import Image from "next/image";

const Menu = (props) => {
  const { isAuthenticated } = useAuth();
  const [imageSrc, setImageSrc] = useState({
    image1: "/menuImages/menuImage1.jpg",
    image2: "/menuImages/menuImage2.jpg",
    name: "Windows",
  });

  const opacity = {
    initial: { x: -10, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 10, opacity: 0 },
  };

  const links = [
    [
      {
        href: "/products/windows",
        name: "Windows",
        image1: "/menuImages/menu1.jpg",
        image2: "/menuImages/menu2.jpg",
        bottom: false,
      },
      {
        href: "/products/entrydoors",
        name: "Entry Doors",
        image1: "/menuImages/menu3.jpg",
        image2: "/menuImages/menu4.jpg",
        bottom: false,
      },
      {
        href: "/products/slidingdoors",
        name: "Sliding Doors",
        image1: "/menuImages/menu5.jpg",
        image2: "/menuImages/menu6.jpg",
        bottom: false,
      },
    ],

    [
      {
        href: "/sub/frank",
        name: "Who is Frank?",
        image1: "/menuImages/menu7.jpg",
        image2: "/menuImages/menu8.jpg",
        bottom: false,
      },
      {
        href: "/sub/imagine",
        name: "Imagine",
        image1: "/menuImages/menu9.jpg",
        image2: "/menuImages/menu10.jpg",
        bottom: false,
      },
      {
        href: "/sub/designoptions",
        name: "Design Options",
        image1: "/menuImages/menu13.jpg",
        image2: "/menuImages/menu14.jpg",
        bottom: false,
      },
      {
        href: "/sub/learn",
        name: "Learn",
        image1: "/menuImages/menu13.jpg",
        image2: "/menuImages/menu14.jpg",
        bottom: false,
      },
      // {
      //   href: "/sub/make",
      //   name: "Make",
      //   image1: "/menuImages/menu11.jpg",
      //   image2: "/menuImages/menu12.jpg",
      // bottom: false,
      // },
      {
        href: "/sub/dealerfinder",
        name: "Find a Dealer",
        image1: "/menuImages/menu19.jpg",
        image2: "/menuImages/menu20.jpg",
        bottom: false,
      },
    ],

    [
      {
        href: "/contactus",
        name: "Contact Us",
        image1: "/menuImages/menu15.jpg",
        image2: "/menuImages/menu16.jpg",
        bottom: true,
      },
      {
        href: isAuthenticated ? "/user/account" : "/user/signin",
        name: isAuthenticated ? "Account" : "Dealer Login",
        image1: "/menuImages/menu17.jpg",
        image2: "/menuImages/menu18.jpg",
        bottom: true,
      },
    ],
  ];

  interface Item {
    href: string;
    name: string;
    image1: string;
    image2: string;
    bottom?: boolean;
  }

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
                    rel="preload"
                    alt={`${imageSrc.name} Image 1`}
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
                    rel="preload"
                    alt={`${imageSrc.name} Image 2`}
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
              {links.map((pages, index) => {
                return (
                  <Divide key={index}>
                    {pages.map((item: Item, index) => {
                      return (
                        <NavLinks
                          href={item.href}
                          Bottom={item.bottom}
                          onClick={props.onClick}
                          key={index}
                          onMouseEnter={() => {
                            setImageSrc({
                              image1: item.image1,
                              image2: item.image2,
                              name: item.name,
                            });
                          }}
                        >
                          {item.name}
                        </NavLinks>
                      );
                    })}
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
  padding: 130px var(--padding) 70px;
  height: 100%;
  max-height: 900px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto 25%;
    gap: calc(2 * var(--gap));
  }
`;

const Context = styled.div`
  display: grid;
  position: absolute;
  background-color: var(--color-bg);
  top: 0;
  z-index: 800;
  height: 100vh;
  width: 100%;
  @media screen and (min-width: 414px) {
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
  gap: var(--gap);
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: 768px) {
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
  gap: var(--gap);
  align-items: start;
  align-content: start;

  @media (min-width: 768px) {
    align-content: start;
    height: 100%;
  }
`;

const Divide = styled.div`
  display: grid;
  gap: calc(var(--gap) / 4);
`;

export default Menu;
