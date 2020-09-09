import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import ImgTruck from '../Images/Pages/Home/img-truck';
import Button from '../Button/Button';
import ImgCraftsmanship from '../Images/Pages/About/WhoWeAre/img-craftsmanship';
import ImgCustomerCare from '../Images/Pages/About/WhoWeAre/img-customer-care';
import AboutNav from '../AboutNav/AboutNav';

const WhoWeAre__Body = ({ className }) => {
  return (
    <section className="section-container" id="about-page">
      <Container>
        <AboutNav />
        <h2 className="display-4">Our Values</h2>
        <Row className="my-5 py-5">
          <Col xs={12} lg={6} className="order-1 order-lg-1">
            <Container className="mb-5 mb-lg-0">
              <ImgCraftsmanship className="solid-shadow-secondary-top-left" />
            </Container>
          </Col>
          <Col xs={12} lg={6} className="order-2 order-lg-1">
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
          <Col xs={12} lg={6} className="order-1 order-lg-2">
            <Container className="mb-5 mb-lg-0">
              <ImgCustomerCare className="solid-shadow-secondary-bottom-right" />
            </Container>
          </Col>
          <Col xs={12} lg={6} className="order-2 order-lg-1">
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
