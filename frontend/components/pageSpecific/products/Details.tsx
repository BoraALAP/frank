import styled from "styled-components";
import { Container } from "../../layout/Container";

interface Props {
  title?: String;
  subtitle?: String;
  transparent?: Boolean;
  padding?: Boolean;
  children?: any;
  id?: string;
}

const Details = ({
  title,
  subtitle,
  children,
  padding = false,
  transparent = false,
  id,
}: Props) => {
  return (
    <Container id={id}>
      <Context padding={padding} transparent={transparent}>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children && <Descriptions>{children}</Descriptions>}
      </Context>
    </Container>
  );
};

const Context = styled.div`
  display: grid;
  background-color: ${(props) =>
    props.transparent ? "transparent" : `var(--color-lightGray)`};
  padding: ${(props) => (props.padding ? `var(--padding)` : "inherit")};
  gap: calc(var(--gap) / 2);
`;

const Title = styled.h1`
  display: grid;
`;

const Subtitle = styled.h4`
  display: grid;
`;

const Descriptions = styled.p`
  display: grid;
  max-width: 600px;
`;

export default Details;
