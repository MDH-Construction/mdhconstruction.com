import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

const Footer__ContactInfoSection = () => {
  return (
    <section className="footer-contact-info-section py-0 pt-5 py-lg-5">
      <Container className="p-5">
        <h2 className="text-white mb-5 drop-shadow">
          Getting Started Is Easy!
        </h2>
        <Row className="justify-content-center">
          <Col className="mb-5 mb-lg-0" xs={12} md={4}>
            <Container className="bg-primary p-3 text-center text-white">
              <span className="font-weight-bold lead drop-shadow">Step 1:</span>
            </Container>
            <Container className="bg-white p-3">
              <p>
                <strong className="text-dark">
                  Request An In-Home Appointment
                </strong>
              </p>
              <p className="text-dark">
                Complete and submit the form below and we'll contact you to
                schedule an in-home appointment. If you’d prefer, you can also
                contact us by phone at{' '}
                <a
                  className="font-weight-bold text-primary"
                  href="tel:+17742696002"
                >
                  (774) 269-6002
                </a>
                .
              </p>
            </Container>
          </Col>
          <Col className="mb-5 mb-lg-0" xs={12} md={4}>
            <Container className="bg-primary p-3 text-center text-white">
              <span className="font-weight-bold lead drop-shadow">Step 2:</span>
            </Container>
            <Container className="bg-white p-3">
              <p>
                <strong className="text-dark">Schedule Your Project</strong>
              </p>
              <p className="text-dark">
                We'll come to your home, assess your needs, and follow-up with a
                quote. When you're ready, just call, and we’ll schedule your
                project.
              </p>
            </Container>
          </Col>
          <Col className="mb-5 mb-lg-0" xs={12} md={4}>
            <Container className="bg-primary p-3 text-center text-white">
              <span className="font-weight-bold lead drop-shadow">Step 3:</span>
            </Container>
            <Container className="bg-white p-3">
              <p>
                <strong className="text-dark">Let The Work Begin!</strong>
              </p>
              <p className="text-dark">
                A team of MDH Construction craftsmen will start your project on
                time and finish on schedule — 100% satisfaction, guaranteed!
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer__ContactInfoSection;
