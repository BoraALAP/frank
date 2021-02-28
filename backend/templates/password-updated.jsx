import React from 'react';
import styled from 'styled-components';

export default function passwordUpdate() {
  return (
    <Container>
      <p>Hi {recipientEmail}</p>
      <div>
        <p>
          Your password has been updated you can log in{' '}
          <a href={signinUrl} target="_blank">
            here
          </a>
        </p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
`;
