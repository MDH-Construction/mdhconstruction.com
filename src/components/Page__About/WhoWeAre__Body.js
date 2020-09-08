import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import ImgTruck from '../Images/Pages/Home/img-truck';
import Button from '../Button/Button';
import ImgCraftsmanship from '../Images/Pages/About/WhoWeAre/img-craftsmanship';
import ImgCustomerCare from '../Images/Pages/About/WhoWeAre/img-customer-care';
import ImgMdhTruckMenu from '../Images/Nav/img-mdh-truck-menu';
import ImgLicensedMenu from '../Images/Nav/img-licensed-menu';
import ImgTopRatedMenu from '../Images/Nav/img-top-rated-menu';
import ImgServiceAreaMenu from '../Images/Nav/img-service-area-menu';

const WhoWeAre__Body = ({ className }) => {
  return (
    <section className="section-container" id="about-page">
      <Container>
        <Row className="about-dropdown about-dropdown-menu px-2 px-lg-0 py-5 mt-0 mb-5 rounded drop-shadow text-center">
          <Col lg={3}>
            <Link to="/who-we-are">
              <div className="text-center p-3 bg-dark-gray">
                <ImgMdhTruckMenu className="border rounded" />
              </div>
            </Link>
            <Link
              className="nav-link px-3 py-2 text-uppercase text-center bg-primary text-white font-weight-bold"
              to="/who-we-are"
            >
              Who <br />
              We Are
            </Link>
          </Col>
          <Col lg={3}>
            <Link to="/what-we-do">
              <div className="text-center p-3 bg-dark-gray">
                <ImgLicensedMenu className="border rounded" />
              </div>
            </Link>
            <Link
              className="nav-link px-3 py-2 text-uppercase text-center bg-primary text-white font-weight-bold"
              to="/what-we-do"
            >
              Licensing <br />
              And Insurance
            </Link>
          </Col>
          <Col lg={3}>
            <Link to="/ratings-and-memberships">
              <div className="text-center p-3 bg-dark-gray">
                <ImgTopRatedMenu className="border rounded" />
              </div>
            </Link>
            <Link
              className="nav-link px-3 py-2 text-uppercase text-center bg-primary text-white font-weight-bold"
              to="/ratings-and-memberships"
            >
              Ratings And <br />
              Memberships
            </Link>
          </Col>
          <Col lg={3}>
            <Link to="/service-area">
              <div className="text-center p-3 bg-dark-gray">
                <ImgServiceAreaMenu className="border rounded" />
              </div>
            </Link>
            <Link
              className="nav-link px-3 py-2 text-uppercase text-center bg-primary text-white font-weight-bold"
              to="/service-area"
            >
              Service <br />
              Area
            </Link>
          </Col>
        </Row>

        <h2 className="display-4">Our Values</h2>
        <Row className="my-5 py-5">
          <Col className="order-1 order-lg-1">
            <Container>
              <ImgCraftsmanship className="solid-shadow-secondary-top-left" />
            </Container>
          </Col>
          <Col className="order-2 order-lg-1">
            <Container>
              <h3 className="mb-3">Superior Craftsmanship</h3>
              <hr className="divider mb-4" />
              <p className="mt-4 mt-lg-0">
                <strong>
                  At MDH Construction we like to be known for the excellence of
                  our work.
                </strong>
              </p>
              <p>
                In business you are only as good as the people you employ, which
                is why we thoughtfully select expert tradesmen who have an eye
                towards quality over quantity.
              </p>
              <p>
                We also support our <Link to="/employment">employees</Link>{' '}
                through our continuing education program, which allows them to
                hone their trade, learn about new products and technologies, and
                stay up-to-date on local building codes.
              </p>
            </Container>
          </Col>
        </Row>
        <Row className="my-5 py-5">
          <Col className="order-1 order-lg-2">
            <Container>
              <ImgCustomerCare className="solid-shadow-secondary-bottom-right" />
            </Container>
          </Col>
          <Col className="order-2 order-lg-1">
            <Container>
              <h3 className="mb-3">Unmatched Customer Care</h3>
              <hr className="divider mb-4" />
              <p className="mt-4 mt-lg-0">
                <strong>
                  We strongly believe in giving each of our clients the
                  attention and respect they deserve.
                </strong>
              </p>
              <p className="mt-4 mt-lg-0">
                We run a hands-on operation that affords greater accountability
                and more thorough attention to detail.
              </p>
              <p className="mt-4 mt-lg-0">
                Because of these values, we are able to provide our clients with
                finished products that surpasses their expectations and an
                experience that is hard to find anywhere else.
              </p>
              <p className="mt-4 mt-lg-0">
                If you have home improvement, remodeling, or commercial
                construction needs, please don't hesitate to{' '}
                <Link to="/contact-us">contact us</Link> for a free estimate.
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhoWeAre__Body;
