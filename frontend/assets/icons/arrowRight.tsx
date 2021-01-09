import styled from "styled-components";

const arrowRight = ({ color }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 12H4"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 4.00002L20 12L12 20"
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

export default arrowRight;
