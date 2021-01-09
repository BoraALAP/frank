import styled from "styled-components";
import { Container } from "../../layout/Container";

interface Props {
  title?: string;
  subtitle?: string;
  transparent?: boolean;
  children: any;
}

const Details = ({ title, subtitle, children, transparent = false }: Props) => {
  return (
    <Container>
      <Context transparent={transparent}>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <Descriptions>{children}</Descriptions>
      </Context>
    </Container>
  );
};

const Context = styled.div`
  display: grid;
  background-color: ${(props) =>
    props.transparent ? "none" : props.theme.color.lightGrey};
  padding: ${({ theme }) => theme.padding};
  gap: ${({ theme }) => theme.gap};
`;

const Title = styled.h2`
  display: grid;
`;

const Subtitle = styled.h5`
  display: grid;
`;

const Descriptions = styled.ul`
  display: grid;
`;

export default Details;
