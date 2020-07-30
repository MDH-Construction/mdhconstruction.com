import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../../Button/Button';

const Header = ({ className, fluid, hOne, hTwo, alt, btnlabel }) => {
  return (
    <div>
      <BackgroundImage
        Tag="header"
        className={className}
        fluid={fluid}
        backgroundColor={`#040e18`}
        hOne={hOne}
        hTwo={hTwo}
        alt={alt}
        btnlabel={btnlabel}
      >
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg={10} className="align-items-center justify-content-center">
              <h1 className="font-weight-bold drop-shadow-darker">{hOne}</h1>
              <h2 className="text-white font-weight-bold drop-shadow-darker">
                {hTwo}
              </h2>
              <Container className="text-center mt-5">
                <Button btnlink="/" btnlabel={btnlabel} btn={true} />
              </Container>
            </Col>
          </Row>
        </Container>
      </BackgroundImage>
    </div>
  );
};

export default Header;
