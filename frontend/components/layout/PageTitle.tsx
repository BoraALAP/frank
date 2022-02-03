import styled from "styled-components";
import { useRouter } from "next/router";
import { Link } from "react-scroll";

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

interface ListItems {
  item?: any;
  index?: Number;
  clickAction?: Function;
}

const listItems = (item, index, clickAction) => {
  if (item?.href) {
    return (
      <NavLinks
        key={index}
        href={Slugify(item?.href)}
        role="button"
        aria-label={`navigation button - ${item?.name}`}
      >
        {item?.name}
      </NavLinks>
    );
  } else if (item?.to) {
    return (
      <NavLinks key={index} to={item?.to}>
        {item?.name}
      </NavLinks>
    );
  } else {
    return (
      <NavLinks
        key={index}
        onClick={() => clickAction(item?.name)}
        role="button"
        aria-label={`navigation button - ${item?.name}`}
      >
        {item?.name}
      </NavLinks>
    );
  }
};

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
      <h1 role="page heading" aria-label={`page heading ${title}`}>
        {title}
      </h1>
      {subtitle && <h3>{subtitle}</h3>}
      <Bottom twoColumn={children && true}>
        {children && <Text>{children}</Text>}
        {links && (
          <Links>
            {links?.map((item, index) => {
              return listItems(item, index, clickAction);
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
        <Clickable
          onClick={() => router.back()}
          role="button"
          aria-label={`parent title`}
        >
          <H2>{parent}</H2>
        </Clickable>
        <H2 role="page heading" aria-label={`page heading ${title}`}>
          / {title}
        </H2>
      </TitleBox>
      {subtitle && <h4>{subtitle}</h4>}
      <Bottom twoColumn={children && true}>
        {children && <Text>{children}</Text>}
        <Links>
          {links?.map((item, index) => {
            if (item?.show) {
              return listItems(item, index, clickAction);
            }
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

const Clickable = styled.button`
  display: grid;
  cursor: pointer;
`;

const Links = styled.div`
  display: grid;
`;

const Context = styled.div`
  display: grid;
  margin-top: ${(props) => props.mt && "1rem"};
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
