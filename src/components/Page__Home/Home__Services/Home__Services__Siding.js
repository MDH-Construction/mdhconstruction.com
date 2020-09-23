import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import ImgVinylSidingServices from '../../Images/Pages/Home/img-vinyl-siding-services';
import ImgFullyLicensed from '../../Images/Logos/img-fully-licensed';
import Button from '../../Button/Button';

const Home__Services__Siding = ({ className }) => {
  return (
    <section className="section-no-margin" id="home-siding-section">
      <Container fluid className="px-lg-0 mb-5 mt-5 mt-lg-0">
        <Row noGutters={true}>
          <Col
            className="mt-5 mt-lg-0 drop-shadow order-1 order-lg-1"
            xs={12}
            md={6}
          >
            <ImgVinylSidingServices />
          </Col>
          <Col className="py-3 pb-lg-5 order-2 order-lg-2" xs={12} md={6}>
            <Container className="px-lg-5">
              <h2>Your Vinyl Siding Contractor</h2>
              <div className="text-center">
                <ImgFullyLicensed className="mt-3 mb-5 drop-shadow" />
              </div>
              <p>
                MDH Construction can help protect your residential home or
                commercial buildings from the outside elements with various
                siding options such as{' '}
                <Link to="/vinyl-siding/" className="font-weight-bolder">
                  vinyl siding
                </Link>
                ,{' '}
                <Link to="/wood-siding/" className="font-weight-bolder">
                  wood siding
                </Link>
                , and{' '}
                <Link to="/fiber-cement-siding/" className="font-weight-bolder">
                  fiber-cement siding
                </Link>
                .
              </p>
              <p>
                We offer competitive pricing, premium materials, and expert
                knowledge to get the job done right the first time. Our years of
                experience will keep moisture out, prevent buckling and
                excessive noise, and leave you satisfied with your new home
                improvement.
              </p>
              <p>
                Contact us today if you need any siding services such as{' '}
                <Link to="/roof-installation/" className="font-weight-bolder">
                  siding installation
                </Link>
                ,{' '}
                <Link to="/roof-replacement/" className="font-weight-bolder">
                  siding replacement
                </Link>
                , or{' '}
                <Link to="/roof-repair/" className="font-weight-bolder">
                  siding repair
                </Link>
                .
              </p>
            </Container>
          </Col>
        </Row>
        {/* <Container className="checklist mt-4 my-lg-5 p-3 p-lg-3 justify-content-center align-items-center drop-shadow rounded">
          <h3 className="mb-3">Our Siding Services</h3>
          <hr className="divider pb-3" />
          <Row noGutters={true}>
            <Col xs={12} md={4}>
              <p className="font-weight-bold">We Offer:</p>
              <ul className="check mb-5">
                <li>Vinyl siding installation</li>
                <li>Wood siding installation</li>
                <li>Fiber-cement siding installation</li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <p className="font-weight-bold">We Provide:</p>
              <ul className="check mb-5">
                <li>Premium materials</li>
                <li>Various siding types & styles</li>
                <li>An array of colors & choices</li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <p className="font-weight-bold">We Deliver:</p>
              <ul className="check mb-5">
                <li>Reliable & durable siding</li>
                <li>Beautiful design & curb appeal</li>
                <li>100% satisfaction guaranteed</li>
              </ul>
            </Col>
          </Row>
          <h4 className="bg-secondary p-3 text-white mb-0">
            Common Siding Questions
          </h4>
          <Accordion>
            <Card className="accordion-animation">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <span className="mr-3">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <span className="accordionText">
                  How much does siding cost?
                </span>
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
                <span className="accordionText">
                  Can you paint vinyl siding?
                </span>
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
                <span className="accordionText">
                  How do you clean vinyl siding?
                </span>
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
        </Container> */}
      </Container>
    </section>
  );
};

export default Home__Services__Siding;
