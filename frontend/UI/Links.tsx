import styled from "styled-components";
import Link from "next/link";

export const NavLinks = (props) => {
  return props.href ? (
    <Link href={props.href}>
      <Container href={props.href} {...props} disabled={props.disabled}>
        {props.children}
      </Container>
    </Link>
  ) : (
    <Container href={props.href} {...props} disabled={props.disabled}>
      {props.children}
    </Container>
  );
};

const Container = styled.a`
  display: grid;
  padding: 0.5rem 0;
  color: ${(props) =>
    props.Bottom ? `var(--color-primary)` : `var(--color-grey)`};
  font-size: ${(props) => (props.Bottom ? "0.875rem" : "1.125rem")};
  cursor: pointer;
`;

interface ButtonProps {
  href?: string;
  rev?: boolean;
  type?: string;
  children: any;
  disabled?: boolean;
  onClick?: any;
}
export const Button = ({
  href,
  children,
  rev = false,
  type = "",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return href ? (
    <Link href={href}>
      <ButtonContainer
        href={href}
        rev={rev}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    </Link>
  ) : (
    <ButtonContainer
      type={type}
      rev={rev}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
};
const ButtonContainer = styled.button`
  display: grid;
  color: ${(props) => {
    if (props.rev) {
      return `var(--color-primary)`;
    } else if (props.rev && props.disabled) {
      return `var(--color-primaryDisabled)`;
    } else if (props.disabled) {
      return `var(--color-whiteDisabled)`;
    } else {
      return `var(--color-white)`;
    }
  }};
  background-color: ${(props) => {
    if (props.rev) {
      return `var(--color-white)`;
    } else if (props.rev && props.disabled) {
      return `var(--color-whiteDisabled)`;
    } else if (props.disabled) {
      return `var(--color-primaryDisabled)`;
    } else {
      return `var(--color-primary)`;
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
      return `var(--color-white)`;
    } else if (props.rev && props.disabled) {
      return `var(--color-whiteDisabled)`;
    } else if (props.disabled) {
      return `var(--color-primaryDisabled)`;
    } else {
      return `var(--color-primary)`;
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
  color: var(--color-primary);
  width: max-content;
`;
