import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import ImgGeneralServices from '../../Images/Pages/Home/img-general-services';

const Home__Services__General = ({ className }) => {
  return (
    <section className="section-no-margin-bottom" id="home-general-section">
      <Container fluid className="px-0 px-lg-5">
        <Row noGutters>
          <h2 className="display-4 font-weight-bold d-lg-none mx-auto">
            Your Local General Contractor
          </h2>
          <Col
            className="drop-shadow order-1 order-lg-1 mb-5 px-3 px-lg-0"
            xs={12}
            lg={6}
          >
            <ImgGeneralServices className="solid-shadow-secondary-top-left" />
          </Col>
          <Col className="order-2 order-lg-2" xs={12} lg={6}>
            <Container className="px-lg-5">
              <h2 className="display-4 font-weight-bold d-none d-lg-block">
                Your Local General Contractor
              </h2>
              <p>
                MDH Construction delivers affordable, high-quality general
                contractor services such as{' '}
                <Link to="/services" className="font-weight-bolder">
                  full construction
                </Link>
                ,{' '}
                <Link to="/services" className="font-weight-bolder">
                  new additions
                </Link>
                ,{' '}
                <Link to="/services" className="font-weight-bolder">
                  basement remodels
                </Link>
                ,{' '}
                <Link to="/services" className="font-weight-bolder">
                  kitchen remodels
                </Link>
                ,{' '}
                <Link to="/services" className="font-weight-bolder">
                  bathroom remodels
                </Link>
                , and{' '}
                <Link to="/services" className="font-weight-bolder">
                  custom trim & molding
                </Link>{' '}
                for residential homes and commercial buildings.
              </p>
              <p>
                We use certified products and high-grade materials to provide
                protection from the outside elements, long-term reliability you
                can trust, and beautiful aesthetics you'll love everytime you
                see your finished project.
              </p>
              <p>
                Years of industry experience within Massachusetts has refined
                our construction services, our building process, and our ability
                to maintain customer satisfaction.
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home__Services__General;
