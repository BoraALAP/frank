import { useState } from "react";
import styled from "styled-components";

import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { NavLinks } from "../../UI/Links";
import { useUser } from "../auth/user";

export const Menu = (props) => {
  const user = useUser();
  const [imageSrc, setImageSrc] = useState({
    image1:
      "https://res.cloudinary.com/arttic-fox/image/upload/v1615427644/frank/menu/WINDOWS_hb4rhc.jpg",
    name: "Windows",
  });

  const links = [
    [
      {
        href: "/categories/windows",
        name: "Windows",
        image1:
          "https://res.cloudinary.com/arttic-fox/image/upload/v1615427644/frank/menu/WINDOWS_hb4rhc.jpg",

        bottom: false,
      },
      {
        href: "/categories/entry_doors",
        name: "Entry Doors",
        image1:
          "https://res.cloudinary.com/arttic-fox/image/upload/v1615427642/frank/menu/ENTRY_DOORS_ajh5wf.jpg",

        bottom: false,
      },
      {
        href: "/categories/sliding_doors",
        name: "Sliding Doors",
        image1:
          "https://res.cloudinary.com/arttic-fox/image/upload/v1615427643/frank/menu/SLIDING_DOOR_hvnd77.jpg",

        bottom: false,
      },
    ],

    [
      {
        href: "/sub/frank",
        name: "Who is Frank?",
        image1:
          "https://res.cloudinary.com/arttic-fox/image/upload/v1615947963/frank/menu/MG_1_ea7vrz.jpg",

        bottom: false,
      },
      {
        href: "/sub/imagine",
        name: "Imagine",
        image1:
          "https://res.cloudinary.com/arttic-fox/image/upload/v1615427642/frank/menu/IMAGINE_r2dzi3.jpg",

        bottom: false,
      },
      // {
      //   href: "/designoptions",
      //   name: "Design Options",
      //   image1:
      //     "https://res.cloudinary.com/arttic-fox/image/upload/v1615427643/frank/menu/DESIGN_agrkrp.jpg",

      //   bottom: false,
      // },
      {
        href: "/sub/learn",
        name: "Learn",
        image1:
          "https://res.cloudinary.com/arttic-fox/image/upload/v1615427643/frank/menu/LEARN_vcazcp.jpg",

        bottom: false,
      },
      // {
      //   href: "/sub/make",
      //   name: "Make",
      //   image1: "/menu/menu11.jpg",
      //
      // bottom: false,
      // },
      {
        href: "/sub/dealerfinder",
        name: "Find a Dealer",
        image1:
          "https://res.cloudinary.com/arttic-fox/image/upload/v1615427643/frank/menu/FIND_A_DEALER_zuc87z.jpg",

        bottom: false,
      },
    ],

    [
      {
        href: "/contactus",
        name: "Contact Us",
        image1:
          "https://res.cloudinary.com/arttic-fox/image/upload/v1615427642/frank/menu/CONTACT_US_i7icor.jpg",

        bottom: true,
      },
      {
        href: user ? "/user/account" : "/user/signin",
        name: user ? "Account" : "Dealer Login",
        image1:
          "https://res.cloudinary.com/arttic-fox/image/upload/v1615427642/frank/menu/DEALER-LOGIN_ljmgzo.jpg",

        bottom: true,
      },
    ],
  ];

  interface Item {
    href: string;
    name: string;
    image1: string;
    bottom?: boolean;
  }

  const variants = {
    enter: {
      opacity: 0,
    },
    center: {
      zIndex: 1,

      opacity: 1,
    },
    exit: {
      zIndex: 0,

      opacity: 0,
    },
  };

  return (
    <Context
      key="modal"
      initial={{ y: "-100vh" }}
      animate={{ y: "0vh" }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.45, type: "spring", stiffness: 75 }}
      aria-label="menu modal"
      role="menu modal"
    >
      <Container>
        <ImgCont
          key="modal2"
          initial={{ x: "-5vw", opacity: 0 }}
          animate={{ x: "0vw", opacity: 1 }}
          exit={{ x: "-5vw", opacity: 0 }}
          transition={{
            delay: 0.45,
            duration: 0.65,
          }}
        >
          <AnimatePresence exitBeforeEnter initial={false}>
            <ImageS
              alt={`${imageSrc.name} Image 1`}
              src={imageSrc.image1}
              key={imageSrc.image1}
              // layout="fill"

              priority
              // custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            />
          </AnimatePresence>
        </ImgCont>

        <Right aria-label="navigation" role="navigation">
          {links.map((pages, index) => {
            return (
              <Divide
                key={index}
                initial={{ x: "5vw", opacity: 0 }}
                animate={{ x: "0vw", opacity: 1 }}
                exit={{ x: "5vw", opacity: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.65,
                }}
              >
                {pages.map((item: Item, index) => {
                  return (
                    <NavLinks
                      href={item.href}
                      Bottom={item.bottom}
                      onClick={props.onClick}
                      key={index}
                      aria-label={`Navigation Item - ${item.name}`}
                      role="navigation item"
                      onMouseEnter={() => {
                        setImageSrc({
                          image1: item.image1,

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
  );
};

const Context = styled(motion.div)`
  display: grid;
  position: fixed;
  background-color: var(--color-bg);
  height: 100vh;
  top: 0;
  z-index: 800;
  width: 100%;
  @media screen and (min-width: 414px) {
    width: 100vw;
  }
`;

const Container = styled(motion.div)`
  display: grid;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  padding: 130px var(--padding) 70px;
  height: 100vh;
  max-height: 900px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto 25%;
    gap: calc(2 * var(--gap));
  }
`;

const ImageS = styled(motion.img)`
  /* background-image: url(${(props) => props.src});*/
  /* background-position: 50% 50%;
  background-size: cover; */
  width: 100%;
  max-height: 900px;
  object-fit: cover;
  object-position: center;
  height: 100%;
`;

const ImgCont = styled(motion.div)`
  display: none;
  position: relative;
  overflow: hidden;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: grid;
    align-content: center;
  }
`;

const Right = styled(motion.nav)`
  display: grid;
  gap: var(--gap);
  align-items: start;
  align-content: start;
  overflow-y: scroll;
  @media (min-width: 768px) {
    align-content: start;
    height: 100%;
  }
`;

const Divide = styled(motion.div)`
  display: grid;
  gap: calc(var(--gap) / 4);
`;
