import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonInternal from '../../common/buttons/ButtonInternal';

const Header = ({
  className,
  fluid,
  textMain,
  textSecondary,
  alt,
  btnlabel,
}) => {
  return (
    <BackgroundImage
      Tag="header"
      className={className}
      fluid={fluid}
      backgroundColor="#040e18"
      textMain={textMain}
      textSecondary={textSecondary}
      alt={alt}
      btnlabel={btnlabel}
    >
      <Container>
        <Row className="align-items-center justify-content-center text-center">
          <Col lg={10} className="align-items-center justify-content-center">
            <h1 className="font-weight-bold drop-shadow-darker mb-3">
              {textMain}
            </h1>
            <span className="display-5 text-white font-weight-bold drop-shadow-darker">
              {textSecondary}
            </span>
            <Container className="text-center mt-5">
              <ButtonInternal btnlink="/contact-us/" btnlabel={btnlabel} btn />
            </Container>
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
};

export default Header;
