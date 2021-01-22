import styled from "styled-components";
import { Container } from "../layout/Container";
import { FooterButton } from "../../UI/Links";

const Footer = () => {
  const links = [
    { name: "About us", href: "sub/frank" },
    { name: "Contact us", href: "/contactus" },

    { name: "Find a dealer", href: "/sub/dealerfinder" },

    { name: "Privacy Policy", href: "/sub/privacypolicy" },
    { name: "Waranty", href: "/sub/waranty" },
  ];

  const socials = [
    { name: "Facebook", href: "" },
    { name: "Instagram", href: "" },
    { name: "LinkedIn", href: "" },
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
              <FooterButton href={social.href} key={index}>
                {social.name}
              </FooterButton>
            ))}
          </Middle>
          <Right>
            <p>
              <a href="tel:+19056605021" target="_blank" rel="nofollow">
                905-660-5021
              </a>{" "}
              |{" "}
              <a href="mail:admin@ostaco.com" target="_blank" rel="nofollow">
                admin@ostaco.com
              </a>
            </p>
            <p>
              <a
                href="https://www.google.ca/maps/place/248+Bowes+Rd,+Concord,+ON+L4K+1J9/@43.8080799,-79.4959531,17z/data=!3m1!4b1!4m5!3m4!1s0x882b2ef33a5c88f9:0x10157b4990c72448!8m2!3d43.808076!4d-79.4937644"
                target="_blank"
                rel="nofollow"
              >
                248 Bowes Rd, Concord ON, Canada, L4K 1J9
              </a>
            </p>
            <p>
              Copyright © 2020 Ostaco. All rights reserved. |
              <a href="https://artticfox.com" target="_blank" rel="nofollow">
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

const BigContainer = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.color.lightGrey2};
  border-top: 1px solid ${({ theme }) => theme.grey};
  padding: ${({ theme }) => theme.paddingSm};
  @media screen and (min-width: ${({ theme }) => theme.mq.small}) {
    padding: ${({ theme }) => theme.padding};
  }
`;

const Context = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.gap};
  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Left = styled.div`
  display: grid;
  align-content: start;
  gap: ${({ theme }) => theme.gap};

  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    grid-column: span 3;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Middle = styled.div`
  display: grid;
  align-content: start;
  gap: ${({ theme }) => theme.gap};
`;

const Right = styled.div`
  display: grid;
  font-size: 0.75rem;
  gap: calc(${({ theme }) => theme.gap} / 4);
  a,
  p,
  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.color.grey};
    line-height: 1.5rem;
  }
`;

export default Footer;
