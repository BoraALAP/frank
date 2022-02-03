import styled from "styled-components";

export const LightBoxCross = ({ color }) => {
  return (
    <Svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.1137 9.19239L9.19336 31.1127L12.0218 33.9411L33.9421 12.0208L31.1137 9.19239Z"
        fill={color}
      />
      <path
        d="M9.19297 12.7279L31.1133 34.6483L33.9417 31.8198L12.0214 9.89952L9.19297 12.7279Z"
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
