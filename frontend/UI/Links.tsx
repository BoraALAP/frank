import styled from "styled-components";
import Link from "next/link";

export const NavLinks = (props) => {
  return (
    <Link href={props.href}>
      <Container href={props.href} {...props}>
        {props.children}
      </Container>
    </Link>
  );
};

interface Props {
  href?: string;
  rev?: boolean;
  type?: string;
  children: any;
}

export const Button = ({ href, children, rev = false, type = "" }: Props) => {
  return href ? (
    <Link href={href}>
      <ButtonContainer href={href} rev={rev}>
        {children}
      </ButtonContainer>
    </Link>
  ) : (
    <ButtonContainer type={type} rev={rev}>
      {children}
    </ButtonContainer>
  );
};

export const TertiaryButton = ({ href, children, rev = false }) => {
  return (
    <Link href={href}>
      <TertiaryContainer href={href} rev={rev}>
        {children}
      </TertiaryContainer>
    </Link>
  );
};

export const FooterButton = ({ href, children, rev = false }) => {
  return (
    <Link href={href}>
      <FooterButtonContainer href={href} rev={rev}>
        {children}
      </FooterButtonContainer>
    </Link>
  );
};

const Container = styled.a`
  display: grid;
  padding: 0.5rem 0;
  color: ${(props) =>
    props.Bottom ? props.theme.color.primary : props.theme.color.grey};
  font-size: ${(props) => (props.Bottom ? "0.875rem" : "1.125rem")};
`;

const TertiaryContainer = styled.a`
  display: grid;
  color: ${(props) =>
    props.rev ? props.theme.color.white : props.theme.color.primary};
  font-size: 1.125rem;
  text-decoration: underline;
`;

const ButtonContainer = styled.button`
  display: grid;
  color: ${(props) =>
    props.rev ? props.theme.color.primary : props.theme.color.white};
  background-color: ${(props) =>
    props.rev ? props.theme.color.white : props.theme.color.primary};

  padding: 0.75rem 1.5rem;
`;

const FooterButtonContainer = styled.div`
  display: grid;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.primary};
`;
