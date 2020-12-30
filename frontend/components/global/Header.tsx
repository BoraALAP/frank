import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

import disableScroll from "disable-scroll";

import Logo from "../../assets/branding/frank_logo.svg";
import MenuIcon from "../../assets/icons/menu.svg";

import MenuComp from "./Menu";
import { Container } from "../layout/Container";

export const Header = (props) => {
  const [menuState, setMenuState] = useState(false);

  const [sticky, setSticky] = useState(true);

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

  // END -- Getting PAGE Y Off

  //  Menu State
  useEffect(() => {
    if (menuState) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [menuState]);

  // props.history.listen((location) => {
  //   setMenuState(false);
  // });

  const handleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <Context show={sticky}>
      <Container>
        <HeaderS>
          <Left>
            <Link href="/home">
              <LogoS src={Logo} />
            </Link>
            <H4>
              We make
              <br />
              Windows and Doors
            </H4>
          </Left>
          {/* <Nav>
        {data?.me ? (
          <>
            <Link href="/user/account">
              <p>{data?.me?.name ? data.me.name : "Account"}</p>
            </Link>
            <SignOut />
          </>
        ) : (
          <Link href="/user/signIn">
            <p>Sign In</p>
          </Link>
        )}
        <Link href="/application">
          <p>App</p>
        </Link>
      </Nav> */}
          <Right>
            <MenuIconS
              src={MenuIcon}
              menuprop={menuState}
              onClick={handleMenu}
            />
            {/* <SearchIcon /> */}
          </Right>
        </HeaderS>
        {/* <Search /> */}
        <MenuComp open={menuState} onClick={handleMenu} />
      </Container>
    </Context>
  );
};

const Context = styled.div`
  display: grid;
  align-items: center;
  position: fixed;
  z-index: 1000;
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.bg};
  transition: top 1s ease;
  top: ${(props) => (props.show ? "0" : "-30vh")};
`;

const HeaderS = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  grid-template-columns: auto 25%;
  align-items: center;
  z-index: 1000;
  padding: 2.5vh ${({ theme }) => theme.padding};
`;

const Left = styled.div`
  grid-auto-flow: column;
  display: grid;
  gap: ${({ theme }) => theme.gap};
  align-items: center;
`;

const Right = styled.div`
  width: 25vw;
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
`;

const H4 = styled.h4`
  display: none;
  color: ${({ theme }) => theme.color.primary};
  margin: 0;
  line-height: 1.4rem;
  font-size: 1.0625rem;
  @media (min-width: 480px) {
    display: grid;
  }
`;

const MenuIconS = styled.img`
  transform: ${(props) => (props.menuprop ? "rotate(-45deg)" : "rotate(0)")};
  transition: all 0.75s ease;
  padding: 4px;
  height: 32px;
  box-sizing: border-box;
  &:hover {
    filter: ${({ theme }) => `drop-shadow(2px 2px 2px rgba(0,0,0,0.3))`};
  }
`;

const LogoS = styled.img`
  display: grid;
  height: 60px;
  width: auto;
`;
