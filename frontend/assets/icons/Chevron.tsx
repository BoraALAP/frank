import styled from "styled-components";

export const ChevronTop = ({ color }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.499023 16.5L2.49902 18.5L11.499 9.50003L20.499 18.5L22.499 16.5L11.499 5.50003L0.499023 16.5Z"
        fill={color}
      />
    </Svg>
  );
};

export const ChevronLeft = ({ color }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 23L18 21L9 12L18 3L16 1L5 12L16 23Z" fill={color} />
    </Svg>
  );
};

export const ChevronRight = ({ color }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 1L5 3L14 12L5 21L7 23L18 12L7 1Z" fill={color} />
    </Svg>
  );
};

export const ChevronBottom = ({ color }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.501 7.49997L20.501 5.49997L11.501 14.5L2.50098 5.49997L0.500977 7.49997L11.501 18.5L22.501 7.49997Z"
        fill={color}
      />
    </Svg>
  );
};

const Svg = styled.svg`
  display: grid;
  height: 100%;
  width: 100%;
  z-index: 10;
`;
