import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Container, Row, Col } from 'react-bootstrap';

const Body__Banner = ({
  className,
  fluid,
  alt,
  textLeftOne,
  textLeftTwo,
  textRight,
}) => {
  return (
    <Container
      fluid
      className="text-container lead bg-white clip-triangle-down px-0 mb-5"
    >
      <Row noGutters>
        <Col lg={6}>
          <BackgroundImage
            Tag="div"
            className="h-100 body-banner-img-gradient"
            fluid={fluid}
            backgroundColor={`#212529`}
            alt="alt"
          >
            <Container className="h-100 d-flex justify-content-center align-items-center text-center">
              <p className="body-banner-text drop-shadow-darker">
                {textLeftOne}
                <br />
                <span className="text-primary">{textLeftTwo}</span>
              </p>
            </Container>
          </BackgroundImage>
        </Col>
        <Col lg={6} className="p-5 mb-5 mb-lg-0">
          {textRight}
        </Col>
      </Row>
    </Container>
  );
};

export default Body__Banner;
