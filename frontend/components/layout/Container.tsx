import styled from "styled-components";

export const Container = ({
  children,
  space = false,
  gap = false,
  padding = false,
}) => {
  return (
    <ContainerS space={space} gap={gap} padding={padding}>
      {children}
    </ContainerS>
  );
};

const ContainerS = styled.div`
  display: grid;
  max-width: 1440px;
  width: 100%;
  box-sizing: border-box;
  justify-self: center;
  margin: auto;
  gap: ${(props) => (props.gap ? `calc( 2 * ${props.theme.gap})` : `0`)};
  padding: ${(props) =>
    props.space && props.padding
      ? `7rem ${props.theme.paddingSm}`
      : props.padding
      ? `0 ${props.theme.paddingSm}`
      : props.space
      ? `7rem 0`
      : `0`};

  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    gap: ${(props) => (props.gap ? props.theme.gap : `0`)};
    padding: ${(props) =>
      props.space && props.padding
        ? `10rem ${props.theme.padding}`
        : props.padding
        ? `0 ${props.theme.padding}`
        : props.space
        ? `10rem 0`
        : `0`};
  }
`;
