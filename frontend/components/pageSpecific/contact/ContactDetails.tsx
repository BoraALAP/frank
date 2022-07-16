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
    name: "Technical Support",
    email: "tech@frankwd.com",
  },
];

export const ContactDetails = () => {
  return (
    <Container>
      {/* {list.map((item, index) => (
        <Detail key={index}>
          <h5>{item.name}</h5>
          <a href={`mailto:${item.email}`}>{item.email}</a>
          {item.phone && <a href={`tel:${item.phone}`}>{item.phone}</a>}
        </Detail>
      ))} */}
      <Detail>
        <h5>Contact Info</h5>
        <a href={`mailto:hello@frankwd.com`}>hello@frankwd.com</a>
        <a
          href={`https://www.google.com/maps/place/?q=place_id:ChIJh7nUtowuK4gRY9G-7jD1Kbo`}
          target="_blank"
          rel="noopener noreferrer"
        >
          248 Bowes Rd,
          <br />
          Concord, ON L4K 1J9,
          <br />
          Canada
        </a>
      </Detail>
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
