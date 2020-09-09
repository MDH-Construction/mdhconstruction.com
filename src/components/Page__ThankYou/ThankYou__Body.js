import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../Button/Button';

const ThankYou__Body = ({ className }) => {
  return (
    <section id="thank-you-page">
      <Row>
        <Col className="py-3 py-lg-5" xs={12} md={12}>
          <Container className="text-center">
            <Link to="/">
              <i className="fas fa-mobile-4x fa-home text-secondary pointer mb-4"></i>
              <p className="display-4">Return To Our Homepage</p>
            </Link>
          </Container>
        </Col>
      </Row>
    </section>
  );
};

export default ThankYou__Body;
