import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

import MenuImage1 from "../../assets/images/menuImages/menuImage1.jpg";
import MenuImage2 from "../../assets/images/menuImages/menuImage2.jpg";
import Menu1 from "../../assets/images/menuImages/menu1.jpg";
import Menu2 from "../../assets/images/menuImages/menu2.jpg";
import Menu3 from "../../assets/images/menuImages/menu3.jpg";
import Menu4 from "../../assets/images/menuImages/menu4.jpg";
import Menu5 from "../../assets/images/menuImages/menu5.jpg";
import Menu6 from "../../assets/images/menuImages/menu6.jpg";
import Menu7 from "../../assets/images/menuImages/menu7.jpg";
import Menu8 from "../../assets/images/menuImages/menu8.jpg";
import Menu9 from "../../assets/images/menuImages/menu9.jpg";
import Menu10 from "../../assets/images/menuImages/menu10.jpg";
import Menu11 from "../../assets/images/menuImages/menu11.jpg";
import Menu12 from "../../assets/images/menuImages/menu12.jpg";
import Menu13 from "../../assets/images/menuImages/menu13.jpg";
import Menu14 from "../../assets/images/menuImages/menu14.jpg";
import Menu15 from "../../assets/images/menuImages/menu15.jpg";
import Menu16 from "../../assets/images/menuImages/menu16.jpg";
import Menu17 from "../../assets/images/menuImages/menu17.jpg";
import Menu18 from "../../assets/images/menuImages/menu18.jpg";
import Menu19 from "../../assets/images/menuImages/menu19.jpg";
import Menu20 from "../../assets/images/menuImages/menu20.jpg";

import { motion, AnimatePresence } from "framer-motion";
import { NavLinks } from "../UI/Links";

const Menu = (props) => {
  const [imageSrc, setImageSrc] = useState({
    image1: MenuImage1,
    image2: MenuImage2,
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
          image1: Menu1,
          image2: Menu2,
        },
        {
          href: "/products/entrydoors",
          name: "Entry Doors",
          image1: Menu3,
          image2: Menu4,
        },
        {
          href: "/products/patiodoors",
          name: "Patio Doors",
          image1: Menu5,
          image2: Menu6,
        },
      ],
    },
    {
      item: [
        {
          href: "/sub/frank",
          name: "Who is Frank?",
          image1: Menu7,
          image2: Menu8,
        },
        {
          href: "/sub/imagine",
          name: "Imagine",
          image1: Menu9,
          image2: Menu10,
        },
        {
          href: "/sub/designOptions",
          name: "Design Options",
          image1: Menu13,
          image2: Menu14,
        },
        {
          href: "/sub/learn",
          name: "Learn",
          image1: Menu13,
          image2: Menu14,
        },
        {
          href: "/sub/make",
          name: "Make",
          image1: Menu11,
          image2: Menu12,
        },
        {
          href: "/sub/dealerfinder",
          name: "Find a Dealer",
          image1: Menu19,
          image2: Menu20,
        },
      ],
    },
    {
      item: [
        {
          href: "/contactUs",
          name: "Contact Us",
          image1: Menu15,
          image2: Menu16,
          prop: "Bottom",
        },
        {
          href: "/user/account",
          name: props.me ? "Account" : "Dealer Login",
          image1: Menu17,
          image2: Menu18,
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
                return (
                  <Divide key={index}>
                    {location.item.map((it, index) => (
                      <div
                        key={index}
                        onClick={props.onClick}
                        onMouseEnter={() => {
                          setImageSrc({ image1: it.image1, image2: it.image2 });
                        }}
                      >
                        <NavLinks href={it.href} Bottom={it.prop}>
                          {it.name}
                        </NavLinks>
                      </div>
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
  padding: 160px calc(2.5vh + 2rem);
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
  display: grid;
  gap: ${({ theme }) => theme.gap};
  grid-template-columns: 1fr 1fr;
`;

const ImgCont = styled.div`
  display: grid;
  position: relative;
  height: 100%;
`;

const Right = styled(motion.div)`
  display: grid;
  gap: calc(2 * ${({ theme }) => theme.gap});
  align-items: start;
  align-content: start;

  @media (min-width: 768px) {
    align-content: flex-start;
    height: 100%;
  }
`;

const Divide = styled.div`
  display: grid;
  gap: calc(${({ theme }) => theme.gap} / 2);
`;

const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.primary};
`;

export default Menu;
