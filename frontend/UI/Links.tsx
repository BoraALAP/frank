import styled from "styled-components";
import Link from "next/link";

export const NavLinks = (props) => {
  return (
    <Link href={props.href}>
      <Container href={props.href} {...props} disabled={props.disabled}>
        {props.children}
      </Container>
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

interface ButtonProps {
  href?: string;
  rev?: boolean;
  type?: string;
  children: any;
  disabled?: boolean;
}
export const Button = ({
  href,
  children,
  rev = false,
  type = "",
  disabled = false,
}: ButtonProps) => {
  return href ? (
    <Link href={href}>
      <ButtonContainer href={href} rev={rev} disabled={disabled}>
        {children}
      </ButtonContainer>
    </Link>
  ) : (
    <ButtonContainer type={type} rev={rev} disabled={disabled}>
      {children}
    </ButtonContainer>
  );
};
const ButtonContainer = styled.button`
  display: grid;
  color: ${(props) => {
    if (props.rev) {
      return props.theme.color.primary;
    } else if (props.rev && props.disabled) {
      return props.theme.color.primaryDisabled;
    } else if (props.disabled) {
      return props.theme.color.whiteDisabled;
    } else {
      return props.theme.color.white;
    }
  }};
  background-color: ${(props) => {
    if (props.rev) {
      return props.theme.color.white;
    } else if (props.rev && props.disabled) {
      return props.theme.color.whiteDisabled;
    } else if (props.disabled) {
      return props.theme.color.primaryDisabled;
    } else {
      return props.theme.color.primary;
    }
  }};
  padding: 0.75rem 1.5rem;
`;

interface TertiaryProps {
  href?: string;
  rev?: boolean;
  type?: string;
  children: any;
  disabled?: boolean;
  onClick?: any;
}
export const TertiaryButton = ({
  href,
  children,
  rev = false,
  disabled = false,
}: TertiaryProps) => {
  return href ? (
    <Link href={href}>
      <TertiaryContainer rev={rev} disabled={disabled}>
        {children}
      </TertiaryContainer>
    </Link>
  ) : (
    <TertiaryContainer rev={rev} disabled={disabled}>
      {children}
    </TertiaryContainer>
  );
};
const TertiaryContainer = styled.button`
  display: grid;
  color: ${(props) => {
    if (props.rev) {
      return props.theme.color.white;
    } else if (props.rev && props.disabled) {
      return props.theme.color.whiteDisabled;
    } else if (props.disabled) {
      return props.theme.color.primaryDisabled;
    } else {
      return props.theme.color.primary;
    }
  }};
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: underline;
  width: max-content;
`;

interface FooterProps {
  href?: string;
  rev?: boolean;
  children: any;
  disabled?: boolean;
}
export const FooterButton = ({
  href,
  children,
  rev = false,
  disabled = false,
}: FooterProps) => {
  return (
    <Link href={href}>
      <FooterButtonContainer href={href} rev={rev} disabled={disabled}>
        {children}
      </FooterButtonContainer>
    </Link>
  );
};
const FooterButtonContainer = styled.button`
  display: grid;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.primary};
  width: max-content;
`;
