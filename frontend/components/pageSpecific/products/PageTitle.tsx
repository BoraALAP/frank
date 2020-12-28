import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

import { NavLinks } from "../../UI/Links";

export const PageTitle = ({ title, links }) => {
  return (
    <Context>
      <h1>{title}</h1>
      <Links>
        {links?.map((item, index) => (
          <NavLinks key={index} href={item.href}>
            {item.name}
          </NavLinks>
        ))}
      </Links>
    </Context>
  );
};

export const Breadcrumbs = ({ links, title, parent }) => {
  const router = useRouter();

  return (
    <Context>
      <TitleBox>
        <Clickable onClick={() => router.back()}>{parent}</Clickable>
        <Line />
        <H1>{title}</H1>
      </TitleBox>

      <Links>
        {links?.map((item, index) => (
          <NavLinks href={item.href} key={index}>
            {item.name}
          </NavLinks>
        ))}
      </Links>
    </Context>
  );
};

export const TitleBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: baseline;
  justify-content: start;
  gap: calc(${({ theme }) => theme.gap} / 2);
`;

const Clickable = styled.h4`
  display: grid;
  cursor: pointer;
`;

const H1 = styled.h1`
  display: grid;
  font-size: 1.5rem;
`;

const Line = styled.div`
  display: grid;
  width: 3rem;
  height: 1px;
  background-color: ${({ theme }) => theme.color.secondary};
`;

const Links = styled.div`
  display: grid;
`;

const Context = styled.div`
  display: grid;
  padding: 0 ${({ theme }) => theme.padding};

  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    grid-template-columns: auto 25%;
    align-items: baseline;
  }
`;

PageTitle.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
};
