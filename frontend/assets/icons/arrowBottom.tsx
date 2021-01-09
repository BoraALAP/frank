import styled from "styled-components";

const arrowBottom = ({ color }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 20V4"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.99995 12L12 20L20 12"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
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

export default arrowBottom;
