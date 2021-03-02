import styled from "styled-components";

interface Props {
  children: any;
}
export const Body = ({ children }: Props) => {
  return (
    <Container>
      {Array.isArray(children) ? (
        children.map((parag, index) => <p key={index}> {parag}</p>)
      ) : (
        <p>{children}</p>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  gap: calc(var(--gap) / 2);
`;
