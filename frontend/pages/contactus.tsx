import styled from "styled-components";
import { Container } from "../components/layout/Container";
import ContactForm from "../components/pageSpecific/contact/ContactForm";
import { PageTitle } from "../components/pageSpecific/products/PageTitle";

const list = [
  {
    name: "General Inquiry",
    email: "hello@frankwd.com",
    phone: "905 660 5021",
  },
  {
    name: "Customer Service",
    email: "info@frankwd.com",
  },
  {
    name: "Sales / Dealer Support",
    email: "sales@frankwd.com",
  },
  {
    name: "Professional Support",
    email: "tech@frankwd.com",
  },
];

const contactus = () => {
  return (
    <Container space padding gap title="Contact Us">
      <PageTitle title="Contact Us" />
      <Content>
        <Left>
          {list.map((item, index) => (
            <Detail key={index}>
              <h5>{item.name}</h5>
              <a href={`mailto:${item.email}`}>{item.email}</a>
              {item.phone && <a href={`tel:${item.phone}`}>{item.phone}</a>}
            </Detail>
          ))}
        </Left>
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

const Left = styled.div`
  display: grid;
  gap: 2rem;
  align-items: start;
  align-content: start;
  a {
    font-weight: 400;
  }
  h5 {
    font-weight: 600;
  }

  @media screen and (min-width: 768px) {
    position: sticky;
    height: min-content;
    top: 5rem;
  }
`;

const Right = styled.div`
  display: grid;
  gap: var(--gap);
`;

const Detail = styled.div`
  display: grid;
  gap: 0.25rem;
`;

export default contactus;
