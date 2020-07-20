import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../Button/Button';

const Thanks__Body = ({ className }) => {
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

            {/* <Container className="checklist mt-5 p-3 p-lg-3 justify-content-center align-items-center">
              <h3>Why MDH Construction?</h3>
              <ul className="check">
                <li>Fully licensed and insured</li>
                <li>Expert tradesman</li>
                <li>Superior craftsmanship</li>
                <li>Unmatched customer care</li>
                <li>100% satisfaction, guaranteed</li>
              </ul>
            </Container>
            <div className="text-center mt-5">
              <Button btnlink="/" btnlabel="Contact Us Today" btn={true} />
            </div> */}
          </Container>
        </Col>
      </Row>
      {/* </Container> */}
    </section>
  );
};

export default Thanks__Body;
