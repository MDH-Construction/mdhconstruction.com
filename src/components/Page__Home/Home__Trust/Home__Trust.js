import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import ImgHomeAdvisor from '../../Images/Logos/img-home-advisor';
import ImgAngiesList from '../../Images/Logos/img-angies-list';
import ImgMassSave from '../../Images/Logos/img-mass-save';
import ImgBBB from '../../Images/Logos/img-bbb';

const Home__Trust = ({ className }) => {
  return (
    <section className="bg-secondary px-0 py-4">
      <Container className="text-center pb-1">
        <span className="lead text-white drop-shadow">
          Trusted By{' '}
          <span className="font-weight-bold">Top Industry Organizations</span>:
        </span>
        <hr className="divider mt-2 pb-3 drop-shadow" />
        <Row className="justify-content-center">
          <Col className="mb-3 mb-lg-0 mx-auto" xs={'6'} lg={3}>
            <ImgBBB />
          </Col>
          <Col className="mb-3 mb-lg-0 mx-auto" xs={'6'} lg={3}>
            <ImgAngiesList />
          </Col>
          <Col className="mb-3 mb-lg-0 mx-auto" xs={'6'} lg={3}>
            <ImgHomeAdvisor />
          </Col>
          <Col className="mb-3 mb-lg-0 mx-auto" xs={'6'} lg={3}>
            <ImgMassSave />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home__Trust;
