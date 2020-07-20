import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import ImgGutterServices from '../../Images/Pages/Home/img-gutter-services';
import ImgFullyLicensed from '../../Images/Logos/img-fully-licensed';
import Button from '../../Button/Button';

const Home__Services__Gutters = ({ className }) => {
  return (
    <section id="home-gutters-section">
      <Container fluid className="px-lg-0 mb-5 mt-5 mt-lg-0">
        <Row noGutters={true}>
          <Col className="py-3 pb-lg-5 order-2 order-lg-1" xs={12} md={6}>
            <Container className="px-lg-5">
              <h2>Your Gutter Installation Experts</h2>
              <div className="text-center">
                <ImgFullyLicensed className="mt-3 mb-5 drop-shadow" />
              </div>
              <p>
                MDH Construction provides all your gutter services such as{' '}
                <Link to="/gutter-installation" className="font-weight-bolder">
                  gutter installation
                </Link>
                ,{' '}
                <Link
                  to="/downspout-installation"
                  className="font-weight-bolder"
                >
                  downspout installation
                </Link>
                ,{' '}
                <Link to="/gutter-cleaning" className="font-weight-bolder">
                  gutter cleaning
                </Link>
                , and{' '}
                <Link to="/gutter-repair" className="font-weight-bolder">
                  gutter repair
                </Link>
                .
              </p>
              <p>
                Our team of experts will ensure that water is channeled away
                from the foundation to preserve the structural integrity of your
                residential home or commercial business.
              </p>
              <p>
                We specialize in uniquely designed{' '}
                <Link to="/seamless-gutters" className="font-weight-bolder">
                  seamless gutters
                </Link>
                , which we create on-site to match the exact measurements of
                your home. As the name suggests, these continuous rain gutters
                have no seams, thus exponentially reducing the chance of leaks.
                This makes them a very popular choice among home and business
                owners.
              </p>
            </Container>
          </Col>
          <Col
            className="mt-5 mt-lg-0 drop-shadow order-1 order-lg-2"
            xs={12}
            md={6}
          >
            <ImgGutterServices />
          </Col>
        </Row>
        <Container className="checklist mt-4 my-lg-5 p-3 p-lg-3 justify-content-center align-items-center drop-shadow rounded">
          <h3 className="mb-3">Our Gutter Services</h3>
          <hr className="divider pb-3" />
          <Row noGutters={true}>
            <Col xs={12} md={4}>
              <p className="font-weight-bold">We Offer:</p>
              <ul className="check mb-5">
                <li>Gutter installation</li>
                <li>Seamless gutter installation</li>
                <li>Downspout installation</li>
                <li>Gutter cleaning</li>
                <li>Gutter repair</li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <p className="font-weight-bold">We Provide:</p>
              <ul className="check mb-5">
                <li>Premium materials</li>
                <li>Various gutters types & styles</li>
                <li>An array of colors & choices</li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <p className="font-weight-bold">We Deliver:</p>
              <ul className="check mb-5">
                <li>Reliable & durable gutters</li>
                <li>Beautiful design & curb appeal</li>
                <li>100% satisfaction guaranteed</li>
              </ul>
            </Col>
          </Row>
          <h4 className="bg-secondary p-3 text-white mb-0">
            Common Gutter Installation Questions
          </h4>
          <Accordion>
            <Card className="accordion-animation">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <span className="mr-3">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <span className="accordionText">How much do gutters cost?</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  dolor quod aut ab repellat et soluta fugit autem, sint
                  excepturi dolorem, doloribus eveniet quisquam quam consectetur
                  qui repellendus nulla commodi.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="accordion-animation">
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <span className="mr-3">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <span className="accordionText">How do you clean gutters?</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  dolor quod aut ab repellat et soluta fugit autem, sint
                  excepturi dolorem, doloribus eveniet quisquam quam consectetur
                  qui repellendus nulla commodi.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="accordion-animation">
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <span className="mr-3">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <span className="accordionText">Can you paint gutters?</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  dolor quod aut ab repellat et soluta fugit autem, sint
                  excepturi dolorem, doloribus eveniet quisquam quam consectetur
                  qui repellendus nulla commodi.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>

        <Container
          fluid
          className="text-center my-4 my-lg-0 px-lg-0 py-5 bg-white drop-shadow border-top border-bottom border-secondary"
        >
          <i className="text-center text-secondary fas fa-4x fa-tools my-4"></i>
          <h2>Are you interested in our gutter services?</h2>
          <p className="lead font-weight-bold">
            Call us today at <a href="tel:+17742696002">(774) 269-6002</a> or...
          </p>
          <Row noGutters={true}>
            <Col xs={12} md={6}>
              <div className="text-center text-lg-right mt-5 mr-md-2">
                <Button
                  btnlink="/services"
                  btnlabel="See More Gutter Info"
                  btnsolid={false}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="text-center text-lg-left mt-5 mb-4 ml-md-2">
                <Button
                  btnlink="/contact-us"
                  btnlabel="Get A Gutter Quote"
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

export default Home__Services__Gutters;
