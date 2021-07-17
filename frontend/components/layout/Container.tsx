import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Meta from "../../components/global/Meta";

interface MetaProps {
  children: any;
  space?: boolean;
  gap?: boolean;
  pageGap?: boolean;
  padding?: boolean;
  title?: any;
  loading?: boolean;
}

export const Container = ({
  children,
  space = false,
  gap = false,
  pageGap = false,
  padding = false,
  title,
  loading = false,
}: MetaProps) => {
  return (
    <>
      {/* <AnimatePresence exitBeforeEnter initial={false}> */}
      {title && <Meta title={title} />}
      <ContainerS
        space={space}
        gap={gap}
        pageGap={pageGap}
        padding={padding}
        style={{ visibility: "visible" }}
        // layoutId="page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        {children}
      </ContainerS>
      {/* </AnimatePresence> */}
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
  gap: ${(props) =>
    props.gap ? `var(--gap)` : props.pageGap ? `calc(2*var(--gap))` : `0`};
  padding: ${(props) =>
    props.space && props.padding
      ? `7rem var(--padding)`
      : props.padding
      ? `0 var(--padding)`
      : props.space
      ? `7rem 0`
      : `0`};

  @media screen and (min-width: 768px) {
    gap: ${(props) =>
      props.gap
        ? `calc(2*var(--gap))`
        : props.pageGap
        ? `calc(4*var(--gap))`
        : `0`};

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
