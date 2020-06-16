import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import ImgTruck from '../../ImageComps/img-truck';
import Button from '../../Button/Button';

const Home__Company = ({ className }) => {
  return (
    <section id="home-company-section">
      {/* <Container> */}
      <Row>
        <Col xs={12} md={6}>
          <ImgTruck />
        </Col>
        <Col className="py-3 py-lg-5" xs={12} md={6}>
          <Container>
            <h2>Your Local Construction Company</h2>
            <p>
              MDH Construction remains committed to superior craftsmanship and
              unmatched customer care. Our team of highly qualified tradesmen
              take great pride in their work. Centrally located in Plymouth,
              Massachusetts, we service the Boston area, South Shore and Cape
              Cod. We specialize in a wide variety of home improvement,
              remodeling, and commercial construction services — ranging from
              large frame-to-finish building jobs to small installation
              projects.
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

export default Home__Company;
