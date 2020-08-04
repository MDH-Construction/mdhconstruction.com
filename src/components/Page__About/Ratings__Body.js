import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonExternal from '../ButtonExternal/ButtonExternal';
import ImgMdhTopRated from '../Images/Pages/About/Ratings/img-mdh-top-rated';
import ImgHomeAdvisorTop from '../Images/Pages/About/Ratings/img-home-advisor-top-rated';
import ImgHomeAdvisorElite from '../Images/Pages/About/Ratings/img-home-advisor-elite';
import ImgHomeAdvisorFive from '../Images/Pages/About/Ratings/img-home-advisor-five-years';
import ImgHomeAdvisorScreened from '../Images/Pages/About/Ratings/img-home-advisor-screened';
import ImgBBBRating from '../Images/Pages/About/Ratings/img-bbb-rating';
import ImgBBBAcc from '../Images/Pages/About/Ratings/img-bbb-acc';
import ImgBBBReviews from '../Images/Pages/About/Ratings/img-bbb-reviews';
import ImgAngiesList from '../Images/Logos/img-angies-list';
import ImgMassSave from '../Images/Logos/img-mass-save';

const Ratings__Body = ({ className }) => {
  return (
    <section className="section-no-margin-bottom" id="about-page-ratings">
      <Container>
        <Container className="pb-5">
          <Row className=" px-0 mx-0">
            <Col xs={12} md={6} className="mb-4">
              <ImgMdhTopRated className="drop-shadow" />
            </Col>
            <Col xs={12} md={6}>
              <p className="lead">
                At MDH Construction, we take great pride in our craftsmanship
                and customer care —{' '}
                <strong>our reputation means everything to us</strong>.
              </p>
              <p className="lead">
                MDH Construction is{' '}
                <strong>consistently a top-rated provider</strong> of superior
                home improvement, remodeling, and commercial construction
                services.
              </p>
              <p className="lead">
                The quality of our service is supported by our{' '}
                <strong>
                  business ratings, certifications, and professional memberships
                </strong>
                .
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="px-0 mx-0">
        <Row className=" px-0 mx-0">
          <Col xs={12} lg={6} className="bg-dark mx-0 px-0">
            <Container className="py-5">
              <h2 className="text-primary">Better Business Bureau</h2>
              <p className="text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem amet odit quam dolore ut quasi sint soluta iusto
                mollitia voluptate. Ad eaque non debitis tempora sit fugit
                corrupti laborum optio.
              </p>
              <Row className="my-5 mx-auto text-center drop-shadow">
                <Col xs={12} md={4} className="mb-3">
                  <ImgBBBAcc />
                </Col>
                <Col xs={12} md={4} className="mb-3">
                  <ImgBBBRating />
                </Col>
                <Col xs={12} md={4} className="mb-3">
                  <ImgBBBReviews />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={12} lg={6} className="bg-light mx-0 px-0">
            <Container className="py-5">
              <h2>HomeAdvisor</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem amet odit quam dolore ut quasi sint soluta iusto
                mollitia voluptate. Ad eaque non debitis tempora sit fugit
                corrupti laborum optio.
              </p>
              <Row className="my-5 mx-auto text-center drop-shadow">
                <Col xs={6} md={3}>
                  <ImgHomeAdvisorTop />
                </Col>
                <Col xs={6} md={3}>
                  <ImgHomeAdvisorElite />
                </Col>
                <Col xs={6} md={3}>
                  <ImgHomeAdvisorScreened />
                </Col>
                <Col xs={6} md={3}>
                  <ImgHomeAdvisorFive />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container fluid className="px-0 mx-0">
        <Row className=" px-0 mx-0">
          <Col xs={12} lg={6} className="bg-light mx-0 px-0">
            <Container className="py-5">
              <h2>Angie's List</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem amet odit quam dolore ut quasi sint soluta iusto
                mollitia voluptate. Ad eaque non debitis tempora sit fugit
                corrupti laborum optio.
              </p>
              <Row className="my-5 mx-auto text-center drop-shadow">
                <Col xs={12} md={4} className="mb-3 mx-auto">
                  <ImgAngiesList />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={12} lg={6} className="bg-dark mx-0 px-0">
            <Container className="py-5">
              <h2 className="text-primary">Mass Save</h2>
              <p className="text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem amet odit quam dolore ut quasi sint soluta iusto
                mollitia voluptate. Ad eaque non debitis tempora sit fugit
                corrupti laborum optio.
              </p>
              <Row className="my-5 mx-auto text-center drop-shadow">
                <Col xs={12} md={4} className="mb-3 mx-auto">
                  <ImgMassSave />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Ratings__Body;
