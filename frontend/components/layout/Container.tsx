import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Meta from "../../components/global/Meta";

interface MetaProps {
  children: any;
  space?: boolean;
  gap?: boolean;
  padding?: boolean;
  title?: any;
}

export const Container = ({
  children,
  space = false,
  gap = false,
  padding = false,
  title,
}: MetaProps) => {
  return (
    <>
      {title && <Meta title={title} />}
      <ContainerS
        space={space}
        gap={gap}
        padding={padding}
        style={{ visibility: "visible" }}
        layoutId="page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        {children}
      </ContainerS>
    </>
  );
};

const ContainerS = styled(motion.div)`
  display: grid;
  max-width: 1440px;
  width: 100%;
  box-sizing: border-box;
  justify-self: center;
  margin: auto;
  visibility: "visible";
  gap: ${(props) => (props.gap ? `calc( 2 * var(--gap))` : `0`)};
  padding: ${(props) =>
    props.space && props.padding
      ? `7rem var(--padding)`
      : props.padding
      ? `0 var(--padding)`
      : props.space
      ? `7rem 0`
      : `0`};

  @media screen and (min-width: 768px) {
    gap: ${(props) => (props.gap ? `var(--gap)` : `0`)};
    padding: ${(props) =>
      props.space && props.padding
        ? `10rem var(--padding)`
        : props.padding
        ? `0 var(--padding)`
        : props.space
        ? `10rem 0`
        : `0`};
  }
`;
