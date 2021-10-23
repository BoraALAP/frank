import styled from "styled-components";
import { motion } from "framer-motion";

const menu = () => {
  return (
    <Svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={{
        closed: { rotate: 0 },
        open: { rotate: 45 },
      }}
    >
      <line x1="20" y1="4" x2="20" y2="36" strokeWidth="6" />
      <line x1="4" y1="20" x2="36" y2="20" strokeWidth="6" />
    </Svg>
  );
};

const Svg = styled(motion.svg)`
  display: grid;
  height: 40px;
  width: 40px;
  stroke: var(--color-secondary);
  z-index: 10;
`;

export default menu;
