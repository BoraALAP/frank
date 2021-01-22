import styled from "../styled-components";
import { useRouter } from "next/router";

import { NavLinks } from "../../../UI/Links";
import { Body } from "../../layout/Body";

interface PageTitle {
  title: string;
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
  links,
  padding = false,
  children,
  id,
}: PageTitle) => {
  return (
    <Context padding={padding} twoColumn={children && true} id={id}>
      <h1>{title}</h1>
      <Bottom twoColumn={children && true}>
        {children && <Body>{children}</Body>}
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
  padding: 0 ${(props) => (props.padding ? props.theme.paddingSm : "0")};
  gap: ${(props) =>
    props.twoColumn ? props.theme.gap : `calc(${props.theme.gap} / 2)`};
  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    padding: 0 ${(props) => (props.padding ? props.theme.padding : "0")};
    grid-template-columns: ${(props) =>
      props.twoColumn ? "none" : "auto 25%"};
    align-items: baseline;
  }
`;

const Bottom = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.gap};
  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    grid-template-columns: ${(props) =>
      props.twoColumn ? "auto 25%" : "none"};
    align-items: baseline;
  }
`;
