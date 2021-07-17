import styled from "styled-components";
import { Container } from "../components/layout/Container";
import { ContactForm } from "../components/auth/ContactForm";
import { PageTitle } from "../components/layout/PageTitle";
import { ContactDetails } from "../components/pageSpecific/contact/ContactDetails";

const contactus = () => {
  return (
    <Container space padding pageGap title="Contact Us">
      <PageTitle title="Contact Us" />
      <Content>
        <ContactDetails />
        <Right>
          <p>
            Connect with FRANK by phone, or email on anything. We’re available
            Monday through Friday from 8:00 a.m. to 4:00 p.m. Eastern Standard
            Time.
          </p>
          <p>
            To find out where the closest FRANK showroom of products is to you,
            and for local expert advice, please use our Dealer Locator.
          </p>
          <ContactForm />
        </Right>
      </Content>
    </Container>
  );
};

const Content = styled.div`
  display: grid;
  gap: calc(2 * var(--gap));
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 3fr;
  }
`;

const Right = styled.div`
  display: grid;
  gap: var(--gap);
`;

export default contactus;
