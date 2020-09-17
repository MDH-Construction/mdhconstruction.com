import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../Button/Button';

const ThankYou__Body = ({ className }) => {
  return (
    <section id="thank-you-page">
      <Container>
        <Row>
          <Col className="py-3 mx-auto" xs={12} md={12} lg={10}>
            <Container className="text-center">
              <Container className="mb-5 p-5 bg-white border rounded drop-shadow">
                <p className="lead text-danger font-weight-bold mb-5">
                  IMPORTANT NOTICE:
                </p>
                <p className="lead text-dark font-weight-bold">
                  We greatly appreciate your interest and look forward to
                  working with you.
                </p>
                <p className="lead mb-5">
                  At the moment, we are approximately 3 weeks out before
                  approaching any new in-home estimates or projects.
                </p>
                <p className="lead font-italic text-right mb-0">
                  Thanks,
                  <br />
                  MDH Construction
                </p>
              </Container>
              <Container className="pt-5">
                <Link to="/" className="mt-5 pt-5">
                  <i className="fas fa-mobile-4x fa-home text-secondary pointer mb-4"></i>
                  <p className="display-4">Return To Our Homepage</p>
                </Link>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYou__Body;
