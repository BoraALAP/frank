import styled from "styled-components";
import { motion } from "framer-motion";

const menu = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={{
        closed: { rotate: 0 },
        open: { rotate: 45 },
      }}
    >
      <path d="M0 12H24" strokeWidth="3" />
      <path d="M12 0L12 24" strokeWidth="3" />
    </Svg>
  );
};

const Svg = styled(motion.svg)`
  display: grid;
  height: 100%;
  width: 100%;
  stroke: var(--color-secondary);
  z-index: 10;
`;

export default menu;
