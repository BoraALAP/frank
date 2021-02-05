import styled from "styled-components";
import { useRouter } from "next/router";

import { NavLinks } from "../../../UI/Links";
import { Body } from "../../layout/Body";

interface PageTitle {
  title: string;
  subtitle?: string;
  links?: any;
  padding?: boolean;
  children?: any;
  id?: string;
}

interface Breadcrumbs {
  title: string;
  links?: any;
  padding?: boolean;
  parent: string;
}

export const PageTitle = ({
  title,
  subtitle,
  links,
  padding = false,
  children,
  id,
}: PageTitle) => {
  return (
    <Context
      padding={padding}
      subtitle={subtitle && true}
      twoColumn={children && true}
      id={id}
    >
      <h1>{title}</h1>

      {subtitle && <h3>{subtitle}</h3>}
      <Bottom twoColumn={children && true}>
        {children && <div>{children}</div>}
        {links && (
          <Links>
            {links?.map((item, index) => (
              <NavLinks key={index} href={item.href}>
                {item.name}
              </NavLinks>
            ))}
          </Links>
        )}
      </Bottom>
    </Context>
  );
};

export const Breadcrumbs = ({
  links,
  title,
  parent,
  padding = false,
}: Breadcrumbs) => {
  const router = useRouter();

  return (
    <Context padding={padding}>
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
  gap: calc(var(--gap) / 2);
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
  background-color: var(--color-secondary);
`;

const Links = styled.div`
  display: grid;
`;

const Context = styled.div`
  display: grid;

  padding: 0 ${(props) => (props.padding ? `var(--padding)` : "0")};
  gap: ${(props) => (props.twoColumn ? `var(--gap)` : `calc( var(--gap) / 2)`)};
  @media screen and (min-width: 768px) {
    grid-template-columns: ${(props) =>
      props.twoColumn ? "none" : "auto 25%"};
    align-items: baseline;
  }

  h1 {
    grid-column: ${(props) => (props.subtitle ? "1 / -1" : "inherit")};
  }
`;

const Bottom = styled.div`
  display: grid;
  gap: var(--gap);
  @media screen and (min-width: 768px) {
    grid-template-columns: ${(props) =>
      props.twoColumn ? "auto 25%" : "none"};
    align-items: baseline;
  }
`;
