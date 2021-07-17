import styled from "styled-components";
import { Container } from "../../components/layout/Container";
import { FullImage } from "../../UI/FullImage";

import { Body } from "../../components/layout/Body";
import { ContactDetails } from "../../components/pageSpecific/contact/ContactDetails";

const frank = () => {
  return (
    <Container space padding gap title="Who is Frank?">
      <FullImage imageSrc="/frank.jpg" />
      <Content>
        <Text>
          <Subtitle>Who is Frank?</Subtitle>

          <H4>
            What differentiates Frank from our competitors is how we run the
            business, day in day out. Family owned and operated, we take pride
            in the fact that we have many long-standing members of the Frank
            team.
          </H4>
        </Text>
        <ContactDetails />
      </Content>
    </Container>
  );
};

const Content = styled.div`
  display: grid;
  gap: var(--gap);
  @media screen and (min-width: 768px) {
    grid-template-columns: auto 25%;
  }
`;

const Subtitle = styled.h1`
  display: grid;
`;

const Text = styled.div`
  display: grid;
  gap: var(--gap);
  align-content: start;
`;

const H4 = styled.h4`
  display: grid;
  max-width: 40rem;
`;

export default frank;
