import React from "react";
import styled from "styled-components";

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

export const ContactDetails = () => {
  return (
    <Container>
      {list.map((item, index) => (
        <Detail key={index}>
          <h5>{item.name}</h5>
          <a href={`mailto:${item.email}`}>{item.email}</a>
          {item.phone && <a href={`tel:${item.phone}`}>{item.phone}</a>}
        </Detail>
      ))}
    </Container>
  );
};

const Container = styled.div`
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

const Detail = styled.div`
  display: grid;
  gap: 0.25rem;
`;
