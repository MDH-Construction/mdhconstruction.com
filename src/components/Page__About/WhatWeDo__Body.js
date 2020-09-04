import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

const WhatWeDo__Body = ({ className }) => {
  return (
    <section className="section-no-margin-bottom" id="about-page">
      <Container fluid className="px-0 mx-0">
        <h2 className="display-4 pb-5">Trusted by Home and Business Owners</h2>
        <Row className="px-0 mx-0">
          <Col xs={12} lg={6} className="bg-light mx-0 px-0 order-1 order-lg-1">
            <Container className="py-5 px-lg-5">
              <h2 className="display-4 font-weight-bold my-5">
                State Licenses
              </h2>
              <p>
                MDH Construction is a fully licensed home improvement contractor
                and construction supervisor in the state of Massachusetts.
              </p>
              <p>
                <strong>
                  You can trust that MDH Construction meets industry training
                  standards and can pull the necessary permits to complete your
                  project.
                </strong>
              </p>
              <Container className="my-5 pt-3 mx-lg-5">
                <span className="d-flex mb-4">
                  <i className="fas fa-address-card fa-2x text-primary"></i>
                  <span className="ml-4 lead">
                    Home Improvement Contractor License: 183807
                  </span>
                </span>
                <span className="d-flex">
                  <i className="fas fa-address-card fa-2x text-primary"></i>
                  <span className="ml-4 lead">
                    Construction Supervisors License: 183807
                  </span>
                </span>
              </Container>
            </Container>
          </Col>
          <Col xs={12} lg={6} className="bg-dark mx-0 px-0 order-2 order-lg-2">
            <Container className="py-5 px-lg-5">
              <h2 className="display-4 font-weight-bold text-primary my-5">
                Full Insurance
              </h2>
              <p className="text-white">
                MDH Construction also carries full-coverage liability insurance
                and we maintain works' compensation on our employees.
              </p>
              <p className="text-white">
                <strong>
                  You can feel secure knowing that you will never incur any
                  liability in the unlikely event that something should go
                  wrong.
                </strong>
              </p>
              <Container className="my-5 pt-3 mx-lg-5">
                <span className="d-flex mb-4">
                  <i className="fas fa-user-shield fa-2x text-primary"></i>
                  <span className="ml-4 text-white lead">
                    Liability, auto, and workers' compensation insured
                  </span>
                </span>
                <span className="d-flex">
                  <i className="fas fa-user-shield fa-2x text-primary"></i>
                  <span className="ml-4 text-white lead">
                    Coverage up to $1 million per incident
                  </span>
                </span>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatWeDo__Body;
