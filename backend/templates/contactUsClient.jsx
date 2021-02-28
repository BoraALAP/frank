import React from 'react';
import styled from 'styled-components';

const contactToClient = ({ name = 'Client' }) => {
  return (
    <Container>
      <div>Dear {name} Client Email</div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
`;

module.export = contactToClient;
