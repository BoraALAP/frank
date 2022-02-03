import styled from "styled-components";

export const Info = ({ color }) => {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.2354 22.6299C17.7582 22.6299 22.2354 18.1527 22.2354 12.6299C22.2354 7.10704 17.7582 2.62988 12.2354 2.62988C6.7125 2.62988 2.23535 7.10704 2.23535 12.6299C2.23535 18.1527 6.7125 22.6299 12.2354 22.6299Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2354 16.6299V12.6299"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2354 8.62988H12.2454"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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
