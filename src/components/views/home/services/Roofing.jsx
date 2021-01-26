import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import ImgRoofingServices from '../../../images/pages/home/img-roofing-services';
import ImgFullyLicensed from '../../../images/logos/img-fully-licensed';

const Roofing = ({ className }) => {
  return (
    <section className="section-no-margin" id="home-roofing-section">
      <Container fluid className="px-lg-0 mb-5 mt-5 mt-lg-0">
        <Row noGutters>
          <Col className="py-3 py-lg-5 order-2 order-lg-1" xs={12} md={6}>
            <Container className="px-lg-5">
              <h2>Your Local Roofing Contractor</h2>
              <div className="text-center">
                <ImgFullyLicensed className="mt-3 mb-5 drop-shadow" />
              </div>
              <p>
                MDH Construction delivers affordable, high-quality roofing
                services such as{' '}
                <Link to="/roof-replacement/" className="font-weight-bolder">
                  roof replacement
                </Link>
                ,{' '}
                <Link to="/roof-installation/" className="font-weight-bolder">
                  roof installation
                </Link>
                , and{' '}
                <Link to="/roof-repair/" className="font-weight-bolder">
                  roof repair
                </Link>{' '}
                on residential homes and commercial buildings.
              </p>
              <p>
                We use certified roofing products and high-grade materials to
                provide protection, reliability, and beautiful aesthetics for
                your home or business.
              </p>
              <p>
                Years of industry experience within Massachusetts has refined
                our{' '}
                <Link to="/roof-inspection/" className="font-weight-bolder">
                  roof inspection
                </Link>{' '}
                process and allows us to quickly identify improper installations
                and core problems that result in{' '}
                <Link to="/roof-leaks/" className="font-weight-bolder">
                  roof leaks
                </Link>
                , exposure to elements, and inadequate attic ventilation.
              </p>
            </Container>
          </Col>
          <Col className="drop-shadow order-1 order-lg-2" xs={12} md={6}>
            <ImgRoofingServices />
          </Col>
        </Row>
        {/* <Container className="checklist mt-4 my-lg-5 p-3 p-lg-3 justify-content-center align-items-center drop-shadow rounded">
          <h3 className="mb-3">Our Roofing Services</h3>
          <hr className="divider pb-3" />
          <Row noGutters={true}>
            <Col xs={12} md={4}>
              <p className="font-weight-bold">We Offer:</p>
              <ul className="check mb-5">
                <li>Residential roofing</li>
                <li>Commercial roofing</li>
                <li>Emergency roof repair</li>
                <li>Roof inspections</li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <p className="font-weight-bold">We Provide:</p>
              <ul className="check mb-5">
                <li>Premium materials</li>
                <li>Various shingle types & styles</li>
                <li>An array of colors & choices</li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <p className="font-weight-bold">We Deliver:</p>
              <ul className="check mb-5">
                <li>Reliable & durable roofing</li>
                <li>Beautiful design & curb appeal</li>
                <li>100% satisfaction guaranteed</li>
              </ul>
            </Col>
          </Row>
          <h4 className="bg-secondary p-3 text-white mb-0">
            Common Roofing Questions
          </h4>
          <Accordion>
            <Card className="accordion-animation">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <span className="mr-3">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <span className="accordionText">
                  How much does a new roof cost?
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
                  How long does a roof last?
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
                  How do you fix a leaking roof?
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

export default Roofing;
