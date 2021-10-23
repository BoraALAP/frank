import { useState, useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import Link from "next/link";

import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  useCycle,
} from "framer-motion";

import Logo from "../../assets/branding/frank_logo";
import MenuIcon from "../../assets/icons/menu";

import { Menu } from "./Menu";
import { Container } from "../layout/Container";
import { GlobalContext } from "../../context/context";

export const Header = (props) => {
  const { store, dispatch } = useContext(GlobalContext);

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const [sticky, setSticky] = useState(store.headerShow);

  // START -- Getting PAGE Y Off
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    const setScollPositionCallback = () => {
      setYOffset(window.scrollY);
      let prev = yOffset;
      let current = window.scrollY;

      if (prev > current) {
        setSticky(true);
      } else {
        setSticky(false);
      }
      prev = current;
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", setScollPositionCallback);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", setScollPositionCallback);
      }
    };
  });

  useEffect(() => {
    if (isOpen) {
      setSticky(true);
    }
  }, [isOpen]);

  useEffect(() => {
    dispatch({ type: "HEADER_SHOW", payload: sticky });
  }, [sticky]);

  // open the menu
  const handleMenu = () => {
    dispatch({ type: "MENU_SHOW", payload: !store.menuShow });
    toggleOpen();
  };

  useEffect(() => {
    store.menuShow
      ? document.body.classList.add("lock")
      : document.body.classList.remove("lock");
  }, [store.menuShow]);

  return (
    <Context>
      <Container>
        <HeaderS show={store.headerShow} aria-label="header" role="header">
          <Link href="/home">
            <a>
              <Left aria-label="logo" role="logo">
                <LogoS />
                <H4>
                  We make
                  <br />
                  Windows and Doors
                </H4>
              </Left>
            </a>
          </Link>
          <Right>
            <MenuIconS
              initial={false}
              animate={isOpen ? "open" : "closed"}
              ref={containerRef}
              aria-label="Menu Open Close Toggle"
              onClick={handleMenu}
              role="button"
              type="button"
              aria-pressed={isOpen ? "true" : "false"}
              aria-controls="link-list"
              aria-haspopup="true"
            >
              <MenuIcon />
            </MenuIconS>
          </Right>
        </HeaderS>
      </Container>
      <AnimatePresence initial={false}>
        {isOpen && <Menu onClick={handleMenu} />}
      </AnimatePresence>
    </Context>
  );
};

const Context = styled.div`
  display: grid;
  align-items: center;
  background-color: var(--color-bg);
  z-index: 2000;
`;

const HeaderS = styled.header`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  grid-template-columns: auto 25%;
  box-sizing: border-box;
  align-items: center;
  position: fixed;
  width: 100%;
  max-width: 1440px;
  z-index: 1000;
  padding: 2.5vh var(--padding);
  top: ${(props) => (props.show ? "0" : "-30vh")};
  transition: top 1s ease;
  background-color: var(--color-bg);
`;

const Left = styled.div`
  grid-auto-flow: column;
  display: grid;
  gap: var(--gap);
  align-items: center;
  z-index: 1000;
  cursor: pointer;
`;

const Right = styled.div`
  width: 25vw;
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
  z-index: 1000;
  cursor: pointer;
`;

const H4 = styled.h4`
  display: none;
  color: var(--color-primary);
  margin: 0;
  line-height: 1.4rem;
  font-size: 1.0625rem;
  @media (min-width: 480px) {
    display: grid;
  }
`;

const MenuIconS = styled(motion.button)`
  /* padding: 4px; */
  height: 40px;
  width: 40px;
  box-sizing: border-box;
  &:hover {
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
  }
`;

const LogoS = styled(Logo)`
  display: grid;
  height: 60px;
  width: auto;
`;
