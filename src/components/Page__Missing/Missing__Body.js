import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

const Missing__Body = ({ className }) => {
  return (
    <section id="missing-page">
      <Container className="my-5">
        <h2>Let's See If We Can Help You</h2>
        <Row className="pt-4 px-2 px-lg-5">
          <Col xs={12} md={4}>
            <Container className="text-center">
              <Link to="/services" title="See Services">
                <i className="text-secondary fas fa-mobile-4x fa-tools my-2 pointer"></i>
              </Link>
              <Link
                to="/services"
                title="See Services"
                className="dotted-underline font-weight-bold d-block"
              >
                See Services
              </Link>
            </Container>
          </Col>
          <Col xs={12} md={4}>
            <Container className="text-center">
              <Link to="/" title="Return Home">
                <i className="text-secondary fas fa-mobile-4x fa-home my-2 pointer"></i>
              </Link>
              <Link
                to="/"
                title="Return Home"
                className="dotted-underline font-weight-bold d-block"
              >
                Return Home
              </Link>
            </Container>
          </Col>
          <Col xs={12} md={4}>
            <Container className="text-center">
              <Link to="/contact-us" title="Contact Us">
                <i className="text-secondary fas fa-mobile-4x fa-phone my-2 pointer"></i>
              </Link>
              <Link
                to="/contact-us"
                title="Contact Us"
                className="dotted-underline font-weight-bold d-block"
              >
                Contact Us
              </Link>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Missing__Body;
