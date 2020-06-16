import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import ImgTruck from '../ImageComps/img-truck';
import Button from '../Button/Button';

const ServiceArea__Body = ({ className }) => {
  return (
    <section id="about-page">
      {/* <Container> */}
      <Row>
        {/* <Col xs={12} md={6}>
          <ImgTruck />
        </Col> */}
        <Col className="py-3 py-lg-5" xs={12} md={12}>
          <Container>
            <p>
              Centrally located on the coast of Massachusetts, MDH Construction
              services the following Boston area, South Shore, and Cape Cod
              towns (including all local villages):
            </p>
            <Container className="checklist mt-5 p-3 p-lg-3 justify-content-center align-items-center">
              <h3>Why We're Different</h3>
              <ul className="check">
                <li>
                  We hire expert tradesman and provide them with regular,
                  continuing education
                </li>
                <li>We treat our clients and their property with respect</li>
                <li>
                  We aim to start and complete projects on or ahead of schedule
                </li>
                <li>We guarantee 100% satisfaction</li>
              </ul>
            </Container>
            <div className="text-center mt-5">
              <Button btnlink="/" btnlabel="Contact Us Today" btn={true} />
            </div>
          </Container>
        </Col>
      </Row>
      {/* </Container> */}
    </section>
  );
};

export default ServiceArea__Body;
