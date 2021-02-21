import styled from "styled-components";
import { useRouter } from "next/router";

import { NavLinks } from "../../UI/Links";
import { Slugify } from "../../lib/Stringer";

interface PageTitle {
  title: string;
  subtitle?: string;
  links?: any;
  padding?: boolean;
  children?: any;
  id?: string;
  clickAction?: any;
}

interface Breadcrumbs {
  title: string;
  subtitle?: string;
  links?: any;
  padding?: boolean;
  parent: string;
  children?: any;
  id?: string;
  clickAction?: any;
}

export const PageTitle = ({
  title,
  subtitle,
  links,
  padding = false,
  children,
  id,
  clickAction,
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
        {children && <Text>{children}</Text>}
        {links && (
          <Links>
            {links?.map((item, index) => {
              return item.href ? (
                <NavLinks key={index} href={Slugify(item.href)}>
                  {item.name}
                </NavLinks>
              ) : (
                <NavLinks key={index} onClick={() => clickAction(item.name)}>
                  {item.name}
                </NavLinks>
              );
            })}
          </Links>
        )}
      </Bottom>
    </Context>
  );
};

export const Breadcrumbs = ({
  title,
  subtitle,
  parent,
  links,
  padding = false,
  children,
  id,
  clickAction,
}: Breadcrumbs) => {
  const router = useRouter();

  return (
    <Context
      padding={padding}
      subtitle={subtitle && true}
      twoColumn={children && true}
      id={id}
    >
      <TitleBox>
        <Clickable onClick={() => router.back()}>{parent}</Clickable>
        <H2>/ {title}</H2>
      </TitleBox>
      {subtitle && <h3>{subtitle}</h3>}
      <Bottom twoColumn={children && true}>
        {children && <Text>{children}</Text>}
        <Links>
          {links?.map((item, index) => {
            return item.href ? (
              <NavLinks key={index} href={Slugify(item.href)}>
                {item.name}
              </NavLinks>
            ) : (
              <NavLinks key={index} onClick={() => clickAction(item.name)}>
                {item.name}
              </NavLinks>
            );
          })}
        </Links>
      </Bottom>
    </Context>
  );
};

export const TitleBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: baseline;
  justify-content: start;
  gap: calc(var(--gap) / 4);
`;
const H2 = styled.h2`
  display: grid;
  font-weight: 500;
`;

const Clickable = styled(H2)`
  display: grid;
  cursor: pointer;
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

const Text = styled.div`
  display: grid;
  gap: var(--gap);
`;
