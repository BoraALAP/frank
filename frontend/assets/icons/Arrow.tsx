import styled from "styled-components";

export const ArrowTop = ({ color }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4995 5.49997L10.4995 24H13.4995L13.4995 5.49997L20.9995 13L22.9995 11L11.9995 -3.05176e-05L0.999512 11L2.99951 13L10.4995 5.49997Z"
        fill={color}
      />
    </Svg>
  );
};

export const ArrowLeft = ({ color }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.49951 13.4999L23.9995 13.4999V10.4999L5.49951 10.4999L12.9995 2.99994L10.9995 0.999939L-0.000488281 11.9999L10.9995 22.9999L12.9995 20.9999L5.49951 13.4999Z"
        fill={color}
      />
    </Svg>
  );
};

export const ArrowRight = ({ color }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 10.5H0V13.5H18.5L11 21L13 23L24 12L13 1L11 3L18.5 10.5Z"
        fill={color}
      />
    </Svg>
  );
};

export const ArrowBottom = ({ color }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 18.5L13.5 0L10.5 0L10.5 18.5L3 11L1 13L12 24L23 13L21 11L13.5 18.5Z"
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
  max-width: 1.5rem;
  max-height: 1.5rem;
`;
