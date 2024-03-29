import styled from "styled-components";
import { Container } from "../layout/Container";
import { FooterButton } from "../../UI/Links";

const Footer = () => {
  const links = [
    { name: "About us", href: "/sub/frank" },
    { name: "Contact us", href: "/contactus" },

    { name: "Find a dealer", href: "/sub/dealerfinder" },

    // { name: "Privacy Policy", href: "/sub/privacypolicy" },
    // { name: "Warranty", href: "/sub/warranty" },
  ];

  const socials = [
    { name: "Facebook", href: "https://www.facebook.com/FRANKbyOstaco" },
    { name: "Instagram", href: "https://www.instagram.com/frankwindowsdoors" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/frank-windows-doors",
    },
  ];

  return (
    <BigContainer>
      <Container>
        <Context>
          <Left>
            {links.map((link, index) => (
              <FooterButton href={link.href} key={index}>
                {link.name}
              </FooterButton>
            ))}
          </Left>
          <Middle>
            {socials.map((social, index) => (
              <a href={social.href} key={index} target="_blank" rel="noopener">
                {social.name}
              </a>
            ))}
          </Middle>
          <Right>
            <p>
              <a href="tel:+19056605021" target="_blank" rel="nofollow">
                905-660-5021
              </a>{" "}
              |{" "}
              <a
                href="mail:marketing@frankwd.com"
                target="_blank"
                rel="nofollow"
              >
                marketing@frankwd.com
              </a>
            </p>
            <p>
              <a
                href="https://www.google.ca/maps/place/248+Bowes+Rd,+Concord,+ON+L4K+1J9/@43.8080799,-79.4959531,17z/data=!3m1!4b1!4m5!3m4!1s0x882b2ef33a5c88f9:0x10157b4990c72448!8m2!3d43.808076!4d-79.4937644"
                target="_blank"
                rel="noopener"
              >
                248 Bowes Rd, Concord ON, Canada, L4K 1J9
              </a>
            </p>
            <p>
              Copyright © 2020 Frank™. All rights reserved. |
              <a href="https://artticfox.com" target="_blank" rel="noopener">
                {" "}
                Build by Artticfox
              </a>
            </p>
          </Right>
        </Context>
      </Container>
    </BigContainer>
  );
};

const BigContainer = styled.footer`
  display: grid;
  background-color: var(--color-lightGrey2);
  border-top: 1px solid var(--color-grey);
  padding: var(--padding);
  @media screen and (min-width: 414px) {
    padding: var(--padding);
  }
`;

const Context = styled.div`
  display: grid;
  gap: var(--gap);
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Left = styled.nav`
  display: grid;
  align-content: start;
  gap: var(--gap);

  @media screen and (min-width: 768px) {
    grid-column: span 3;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Middle = styled.div`
  display: grid;
  align-content: start;
  gap: var(--gap);
  a {
    font-size: 0.875rem;
    font-weight: 600;
  }
`;

const Right = styled.div`
  display: grid;
  font-size: 0.75rem;
  gap: calc(var(--gap) / 4);
  a,
  p,
  span {
    font-size: 0.75rem;
    color: var(--color-grey);
    line-height: 1.5rem;
  }
`;

export default Footer;
