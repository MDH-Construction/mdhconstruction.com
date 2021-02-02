import React from 'react';
import { Container } from 'react-bootstrap';

const BodyContent = ({ children }) => {
  return (
    <Container fluid className="mx-0 px-0">
      {children}
    </Container>
  );
};

export default BodyContent;
