import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../Button/Button';
import SvgMassSeal from '../Images/Pages/Testimonials/svg-mass-seal';

const WhatWeDo__Body = ({ className }) => {
  return (
    <section id="about-page">
      <Container>
        <Row>
          <Col className="py-3 py-lg-5" xs={12} lg={6}>
            <Container className="text-center">
              <i className="text-primary fas fa-mobile-4x fa-id-badge mb-4"></i>
            </Container>
            <p>
              MDH Construction is a fully licensed home improvement contractor
              and construction supervisor in the state of Massachusetts. MDH
              Construction’s licensing status provides proof that we meet
              industry training standards for general contracting and
              construction supervision.
            </p>
            <p>
              These licenses also allow MDH Construction to pull the necessary
              permits to complete a project — something an unlicensed contractor
              is unable to do.
            </p>
            <p>
              Furthermore, our licenses hold us responsible for ensuring that
              our work meets local building codes.
            </p>
          </Col>
          <Col className="py-3 py-lg-5" xs={12} lg={6}>
            <Container className="text-center">
              <i className="text-primary fas fa-mobile-4x fa-user-shield mb-4"></i>
            </Container>
            <p>
              MDH Construction also carries full-coverage liability insurance
              and we maintain works' compensation on our employees.
            </p>
            <p>
              You can feel secure knowing that you will never incur any
              liability in the unlikely event that something should go wrong.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>State Licenses</h2>
            <ul>
              <li>
                Home Improvement Contractor License: 183807 (exp. 11/2019)
              </li>
              <li>Construction Supervisors License: 183807 (exp. 03/2019)</li>
            </ul>
            <h2>Insurance</h2>
            <ul>
              <li>Liability, auto, and workers' compensation insured</li>
              <li>Coverage up to $1 million per incident</li>
            </ul>
            {/* <Container className="checklist mt-5 p-3 p-lg-3 justify-content-center align-items-center">
                <h3>Why We're Different</h3>
                <ul className="check">
                  <li>
                    We hire expert tradesman and provide them with regular,
                    continuing education
                  </li>
                  <li>We treat our clients and their property with respect</li>
                  <li>
                    We aim to start and complete projects on or ahead of
                    schedule
                  </li>
                  <li>We guarantee 100% satisfaction</li>
                </ul>
              </Container>
              <div className="text-center mt-5">
                <Button btnlink="/" btnlabel="Contact Us Today" btn={true} />
              </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatWeDo__Body;
