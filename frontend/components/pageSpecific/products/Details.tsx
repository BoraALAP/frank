import styled from "styled-components";
import { Container } from "../../layout/Container";

interface Props {
  title?: String;
  subtitle?: String;
  transparent?: Boolean;
  padding?: Boolean;
  children: any;
}

const Details = ({
  title,
  subtitle,
  children,
  padding = false,
  transparent = false,
}: Props) => {
  return (
    <Container>
      <Context padding={padding} transparent={transparent}>
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
  padding: ${(props) => (props.padding ? props.theme.paddingSm : "inherit")};
  gap: ${({ theme }) => theme.gap};

  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    padding: ${(props) => (props.padding ? props.theme.padding : "inherit")};
  }
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
