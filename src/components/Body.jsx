import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Body = ({ bodyContent, bodySidebar }) => {
  return (
    <section className="bg-light my-0 py-5">
      <Container fluid className="layout-body p-lg-5">
        <Row noGutters className="mx-0 px-0">
          <Col xs={12} lg={8} className="layout-body-content">
            {bodyContent}
          </Col>
          <Col xs={12} lg={4} className="layout-body-sidebar">
            {bodySidebar}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Body;
