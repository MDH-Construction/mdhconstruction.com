import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../../Button/Button';

const Home__ServicesCTA = ({ hTwo, btnOutlineLabel, btnSolidLabel }) => {
  return (
    <Container
      fluid
      className="text-center mt-4 mt-lg-5 px-lg-0 py-5 bg-white drop-shadow"
    >
      <i className="text-center text-secondary fas fa-4x fa-tools mb-4"></i>
      <h2>{hTwo}</h2>
      <p className="lead font-weight-bold">
        Call us today at <a href="tel:+17742696002">(774) 269-6002</a> or...
      </p>
      <Row noGutters={true}>
        <Col xs={12} md={6}>
          <div className="text-center text-lg-right mt-5 mr-md-2">
            <Button
              btnlink="/services"
              btnlabel={btnOutlineLabel}
              btnsolid={false}
            />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="text-center text-lg-left mt-5 ml-md-2">
            <Button btnlink="/contact-us" btnlabel={btnSolidLabel} btn={true} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home__ServicesCTA;
