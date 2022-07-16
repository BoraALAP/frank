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
        open: { rotate: 90 },
      }}
    >
      <motion.path d="M36 10H4V6h32v4z" />
      <motion.path d="M36 22H4v-4h32v4z" />
      <motion.path d="M36 34H4v-4h32v4z" />
    </Svg>
  );
};

const Svg = styled(motion.svg)`
  display: grid;
  height: 40px;
  width: 40px;
  fill: var(--color-secondary);
  z-index: 10;
`;

export default menu;
