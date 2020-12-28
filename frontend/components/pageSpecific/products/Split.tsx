import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

import { TertiaryButton } from "../../UI/Links";
import Body from "../../layout/Body";

const Split = ({ title, subtitle, href, button, image, children, side }) => {
  console.log(children);

  return (
    <Link href={href}>
      <Container side={side}>
        <ImageContainer>
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </ImageContainer>
        <Text side={side}>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Body>
            {children.map((parag, index) => (
              <p key={index}>{parag}</p>
            ))}
          </Body>
          <TertiaryButton rev={side ? false : true} href={href}>
            {button}
          </TertiaryButton>
        </Text>
      </Container>
    </Link>
  );
};

const ImageContainer = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  height: 300px;
  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    height: 100%;
  }
`;

const Text = styled.div`
  display: grid;
  gap: calc(${({ theme }) => theme.gap} / 2);
  padding: ${({ theme }) => theme.padding};
  align-items: center;
  align-content: center;

  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    order: ${(props) => (props.side ? 0 : -1)};
  }
`;

const Title = styled.h2`
  display: grid;
  font-size: 4.5rem;
`;

const Subtitle = styled.h4`
  display: grid;
  max-width: 35rem;
`;

const Container = styled.div`
  display: grid;

  box-sizing: border-box;

  color: ${(props) =>
    props.side ? props.theme.color.primary : props.theme.color.white};
  background-color: ${(props) =>
    props.side ? props.theme.color.bg : props.theme.color.primary};

  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    grid-template-columns: ${(props) => (props.side ? "2fr 3fr" : "3fr 2fr")};
    min-height: ${(props) => (props.side ? "50rem" : "31rem")};
  }
`;

Split.defaultProps = {
  button: "View Product",
};

Split.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  href: PropTypes.string,
  button: PropTypes.string,
  image: PropTypes.string,
  side: PropTypes.bool,
};

export default Split;
