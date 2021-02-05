import styled from "styled-components";

const menu = () => {
  return (
    <Svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 0L13 31L17 31L17 -1.74846e-07L13 0Z" />
      <path d="M0 18L31 18L31 14L-3.49691e-07 14L0 18Z" />
    </Svg>
  );
};

const Svg = styled.svg`
  display: grid;
  height: 100%;
  width: 100%;
  fill: var(--color-secondary);
  z-index: 10;
`;

export default menu;
