import React from 'react';
import styled from 'styled-components';

export default function contactToCustomer({ name = 'Client' }) {
  return (
    <Container>
      <div>Dear {name} Customer Email</div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
`;
