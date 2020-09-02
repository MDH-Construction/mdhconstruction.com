import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonExternal from '../ButtonExternal/ButtonExternal';
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
      <Container fluid className="px-0 mx-0">
        <h2 className="display-4 pb-5">
          Trusted by Top Industry Organizations
        </h2>
        <Row className=" px-0 mx-0">
          <Col xs={12} lg={6} className="bg-light mx-0 px-0 order-1 order-lg-1">
            <Container className="py-5">
              <h2 className="mb-4">Better Business Bureau</h2>
              <p>
                The Better Business Bureau (BBB) has been the gold standard for
                consumers to check a company's credibility since 1912.
              </p>
              <p>
                <strong>
                  Our A+ grade represents the BBB’s strong degree of confidence
                  that MDH Construction is operating in a trustworthy manner and
                  will make a good faith effort to resolve any customer concerns
                  filed with the BBB.
                </strong>
              </p>
              <Row className="mt-5 mb-3 mx-auto text-center drop-shadow">
                <Col xs={12} md={4} className="mb-3 mb-lg-0">
                  <ImgBBBAcc />
                </Col>
                <Col xs={12} md={4} className="mb-3 mb-lg-0">
                  <ImgBBBRating />
                </Col>
                <Col xs={12} md={4} className="mb-3 mb-lg-0">
                  <ImgBBBReviews />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={12} lg={6} className="bg-dark mx-0 px-0 order-2 order-lg-2">
            <Container className="py-5">
              <h2 className="text-primary mb-4">HomeAdvisor</h2>
              <p className="text-white">
                HomeAdvisor is an online marketplace with the goal of connecting
                homeowners with local service professionals. Each company is
                prescreened before they can be selected to complete home
                improvement, maintenance and remodeling projects.
              </p>
              <p className="text-white">
                <strong>
                  MDH Construction is proud to display our badges that clearly
                  demonstrate our reliability and trustworthiness as a company.
                </strong>
              </p>
              <Row className="mt-5 mb-3 mx-auto text-center drop-shadow">
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
          <Col xs={12} lg={6} className="bg-dark mx-0 px-0 order-4 order-lg-3">
            <Container className="py-5">
              <h2 className="text-primary mb-4">Angie's List</h2>
              <p className="text-white">
                Since 1995, Angie's List has been an online directory allowing
                consumers to read and publish reviews of local businesses and
                contractors.
              </p>
              <p className="text-white">
                <strong>
                  MDH Construction has been an A-rated company with Angie's List
                  since May 2014 based on our customer reviews and
                  satisfactions.
                </strong>
              </p>
              <Row className="mt-5 mb-3 mx-auto text-center drop-shadow">
                <Col xs={12} md={4} className="mb-3 mx-auto">
                  <ImgAngiesList />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={12} lg={6} className="bg-light mx-0 px-0 order-3 order-lg-4">
            <Container className="py-5">
              <h2 className="mb-4">Mass Save</h2>
              <p>
                Mass Save has been consistently advancing energy efficiency
                first throughout Massachusetts to help residents and businesses
                save money and energy.
              </p>
              <p>
                <strong>
                  MDH Construction is proud to be a Mass Save Partner, helping
                  home and business owners cut costs through our insulation and
                  weatherization services.
                </strong>
              </p>
              <Row className="mt-5 mb-3 mx-auto text-center drop-shadow">
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
