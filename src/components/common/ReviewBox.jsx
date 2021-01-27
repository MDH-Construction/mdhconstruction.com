import React from 'react';
import { Container, Col } from 'react-bootstrap';

const ReviewBox = ({ reviewImage, reviewTitle, reviewBody, reviewName }) => {
  return (
    <Container className="p-3">
      <Container className="py-3 px-lg-0">
        <Col className="text-center">
          <span className="no-drop-shadow">{reviewImage}</span>
          <span className="d-block text-center text-primary">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </span>
        </Col>
        <Container className="px-1 px-lg-0 pt-3">
          <p className="text-brown mt-3 px-md-5 mb-4">{reviewTitle}</p>
          <p className="font-italic mt-3 px-0 px-lg-5">"{reviewBody}"</p>
          <p className="font-weight-bold text-primary text-right px-md-5">
            — {reviewName}
          </p>
        </Container>
      </Container>
    </Container>
  );
};

export default ReviewBox;
