import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import ImgTruck from '../../Images/Pages/Home/img-truck';
import ImgTruckCloseUp from '../../Images/Pages/Home/img-truck-close-up';
import ImgServicesFullConstruction from '../../Images/Pages/Services/img-services-full-construction';
import ImgFiveStarReviews from '../../Images/Pages/Home/img-five-star-reviews';
import ImgGetFreeQuote from '../../Images/Pages/Home/img-get-free-quote';

const Home__Company = ({ className }) => {
  return (
    <section className="section-container" id="home-company-section">
      <Container fluid className="px-0 px-lg-5">
        <Row noGutters>
          <Col xs={12} lg={6}>
            <Container className="px-lg-5">
              <h2 className="display-4 font-weight-bold">
                Your Local Construction Company
              </h2>
              <p>
                Since 2014,{' '}
                <Link to="/who-we-are" className="font-weight-bolder">
                  MDH Construction
                </Link>{' '}
                has remained committed to superior craftsmanship and unmatched
                customer care. Our team of highly qualified tradesmen takes
                great pride in their work. Centrally located in{' '}
                <Link to="/service-area" className="font-weight-bolder">
                  Plymouth, Massachusetts
                </Link>
                , we service the{' '}
                <Link to="/service-area" className="font-weight-bolder">
                  Boston
                </Link>{' '}
                area,{' '}
                <Link to="/service-area" className="font-weight-bolder">
                  South Shore
                </Link>
                , and{' '}
                <Link to="/service-area" className="font-weight-bolder">
                  Cape Cod
                </Link>
                . We specialize in a wide variety of home improvement,
                remodeling, and commercial{' '}
                <Link to="/services" className="font-weight-bolder">
                  construction services
                </Link>{' '}
                — ranging from large frame-to-finish building jobs to small
                installation projects.
              </p>
              <Container className="checklist mt-5 p-3 mb-5 mb-lg-0 justify-content-center align-items-center rounded">
                <h3>Why We're Different</h3>
                <ul className="check">
                  <li>
                    <span className="font-weight-bold text-secondary">
                      LICENSED
                    </span>{' '}
                    home improvement contractor and construction supervisor in
                    Massachusetts
                  </li>
                  <li>
                    <span className="font-weight-bold text-secondary">
                      INSURED
                    </span>{' '}
                    with{' '}
                    <Link
                      to="/employment"
                      className="font-weight-bolder underline"
                    >
                      full-coverage liability insurance
                    </Link>{' '}
                    and maintain workers' compensation
                  </li>
                  <li>
                    {' '}
                    <span className="font-weight-bold text-secondary">
                      HIRE LOCAL
                    </span>{' '}
                    expert tradesman and provide{' '}
                    <Link
                      to="/employment"
                      className="font-weight-bolder underline"
                    >
                      employees
                    </Link>{' '}
                    with regular, continuing education
                  </li>
                  <li>
                    {' '}
                    <span className="font-weight-bold text-secondary">
                      ACCOUNTABLE
                    </span>{' '}
                    because we <em>actually</em> do the work, not separate
                    subcontractors
                  </li>
                  <li>
                    {' '}
                    <span className="font-weight-bold text-secondary">
                      HONEST
                    </span>{' '}
                    with all our clients and always treat their property with
                    respect
                  </li>
                  <li>
                    <span className="font-weight-bold text-secondary">
                      COMMITTED
                    </span>{' '}
                    to starting and completing projects on or ahead of schedule
                  </li>
                  <li>
                    {' '}
                    <span className="font-weight-bold text-secondary">
                      GUARANTEE
                    </span>{' '}
                    100% satisfaction with our work
                  </li>
                </ul>
              </Container>
            </Container>
          </Col>
          <Col xs={12} lg={6} className="d-none d-lg-block">
            <ImgTruck className="solid-shadow-primary-bottom-right" />
          </Col>
        </Row>

        <Row className="mx-1 mx-lg-5 mt-lg-5 py-5">
          <Col
            xs={12}
            md={6}
            lg={3}
            className="px-2 drop-shadow rounded mb-5 mb-lg-0 scale-up-sm hover-primary"
          >
            <Link to="/who-we-are">
              <h2 className="bg-secondary text-white py-3 mb-0">
                Learn More
                <br /> About Us
              </h2>
              <Container className="p-0">
                <ImgTruckCloseUp />
              </Container>
            </Link>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            className="px-2 drop-shadow rounded mb-5 mb-lg-0 scale-up-sm hover-primary"
          >
            <Link to="/services">
              <h2 className="bg-secondary text-white py-3 mb-0">
                See Our <br />
                Services
              </h2>
              <Container className="p-0">
                <ImgServicesFullConstruction />
              </Container>
            </Link>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            className="px-2 drop-shadow rounded mb-5 mb-lg-0 scale-up-sm hover-primary"
          >
            <Link to="/testimonials">
              <h2 className="bg-secondary text-white py-3 mb-0">
                Read Our
                <br /> Reviews
              </h2>
              <Container className="p-0">
                <ImgFiveStarReviews />
              </Container>
            </Link>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            className="px-2 drop-shadow rounded mb-lg-0 scale-up-sm hover-primary"
          >
            <Link to="/contact-us">
              <h2 className="bg-secondary text-white py-3 mb-0">
                Get A <br />
                Free Quote
              </h2>
              <Container className="p-0">
                <ImgGetFreeQuote />
              </Container>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home__Company;
