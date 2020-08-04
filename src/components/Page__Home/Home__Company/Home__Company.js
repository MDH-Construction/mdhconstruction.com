import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import ImgTruck from '../../Images/Pages/Home/img-truck';
import ImgMdhLogo from '../../Images/Logos/img-mdh-logo';
import Button from '../../Button/Button';

const Home__Company = ({ className }) => {
  return (
    <section className="section-no-margin" id="home-company-section">
      <Container fluid className="px-0">
        <Row noGutters={true}>
          <Col xs={12} md={6}>
            <ImgTruck />
          </Col>
          <Col className="py-3 py-lg-5" xs={12} md={6}>
            <Container>
              <h2>Your Local Construction Company</h2>
              <p>
                MDH Construction remains committed to superior craftsmanship and
                unmatched customer care. Our team of highly qualified tradesmen
                takes great pride in their work. Centrally located in{' '}
                <Link
                  to="/plymouth-ma-construction"
                  className="font-weight-bolder"
                >
                  Plymouth, Massachusetts
                </Link>
                , we service the{' '}
                <Link
                  to="/boston-ma-construction"
                  className="font-weight-bolder"
                >
                  Boston area
                </Link>
                ,{' '}
                <Link
                  to="/south-shore-construction"
                  className="font-weight-bolder"
                >
                  South Shore
                </Link>
                , and{' '}
                <Link
                  to="/cape-cod-construction"
                  className="font-weight-bolder"
                >
                  Cape Cod
                </Link>
                . We specialize in a wide variety of home improvement,
                remodeling, and commercial construction services — ranging from
                large frame-to-finish building jobs to small installation
                projects.
              </p>
              <Container className="checklist mt-5 p-3 justify-content-center align-items-center rounded">
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
                    with full-coverage liability insurance and maintain workers'
                    compensation
                  </li>
                  <li>
                    {' '}
                    <span className="font-weight-bold text-secondary">
                      HIRE LOCAL
                    </span>{' '}
                    expert tradesman and provide employees with regular,
                    continuing education
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
        </Row>
        <Container
          fluid
          className="text-center mt-4 my-lg-0 px-lg-0 py-5 bg-white drop-shadow"
        >
          <ImgMdhLogo className="text-center my-4 no-drop-shadow" />
          <h2>Are you looking for a local construction company?</h2>
          <p className="lead font-weight-bold">
            Call us today at <a href="tel:+17742696002">(774) 269-6002</a> or...
          </p>
          <Row noGutters={true}>
            <Col xs={12} md={6}>
              <div className="text-center text-lg-right mt-5 mr-md-2">
                <Button
                  btnlink="/about"
                  btnlabel="See More About Us"
                  btnsolid={false}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="text-center text-lg-left mt-5 mb-4 ml-md-2">
                <Button
                  btnlink="/contact-us"
                  btnlabel="Get A Free Quote"
                  btn={true}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Home__Company;
