import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Button from '../Button/Button';

const Provacy__Body = ({ className }) => {
  return (
    <section id="about-page">
      {/* <Container> */}
      <Row>
        <Col className="py-3 py-lg-5" xs={12} md={12}>
          <Container>
            <p>
              At MDH Construction we establish lasting relationships with our
              clients because of our high-quality and reliable service. When you
              work with us you’ll become a customer for life, because superior
              craftsmanship and unmatched customer care are our top priorities.
              Supported by our Better Business Bureau A+ rating — as well as
              customer reviews on Facebook, HomeAdvisor, and Redbeacon — MDH
              Construction is consistently a top-rated contractor of superior
              home improvement, remodeling, and commercial construction
              services:
            </p>
          </Container>
        </Col>
      </Row>
      {/* </Container> */}
    </section>
  );
};

export default Provacy__Body;
