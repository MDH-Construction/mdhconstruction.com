import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import ImgRoofingServices from '../../ImageComps/img-roofing-services';
import ImgFullyLicensed from '../../ImageComps/img-fully-licensed';
import Button from '../../Button/Button';

const Home__Services__Roofing = ({ className }) => {
  return (
    <section id="home-services-section">
      <Container fluid className="px-lg-0 mb-5 mt-5 mt-lg-0">
        <Row noGutters={true}>
          <Col className="py-3 py-lg-5 order-2 order-lg-1" xs={12} md={6}>
            <Container className="px-lg-5">
              <h2>Your Local Roofing Contractor</h2>
              <div className="text-center">
                <ImgFullyLicensed className="mt-3 mb-5 drop-shadow" />
              </div>
              <p>
                MDH Construction delivers affordable, high-quality roofing
                services such as{' '}
                <Link to="/roof-replacement" className="font-weight-bolder">
                  roof replacement
                </Link>
                ,{' '}
                <Link to="/roof-installation" className="font-weight-bolder">
                  roof installation
                </Link>
                , and{' '}
                <Link to="/roof-repair" className="font-weight-bolder">
                  roof repair
                </Link>{' '}
                on residential homes and commercial buildings.
              </p>
              <p>
                We use certified roofing products and high-grade materials to
                provide protection, reliability, and beautiful aesthetics for
                your home or business. From{' '}
                <strong>[insert roof style, slope]</strong> to{' '}
                <strong>[insert roof style, slopes]</strong> with{' '}
                <strong>[insert materials, asphalt shingles]</strong> to{' '}
                <strong>[insert materials, wood shingles]</strong>, we guarantee
                premium solutions.
              </p>
              <p>
                Years of industry experience within Massachusetts has refined
                our{' '}
                <Link to="/roof-inspection" className="font-weight-bolder">
                  roof inspection
                </Link>{' '}
                process and allows us to quickly identify improper installations
                and core problems that result in{' '}
                <Link to="/roof-leaks" className="font-weight-bolder">
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
        <Container className="checklist mt-4 my-lg-5 p-3 p-lg-3 justify-content-center align-items-center drop-shadow rounded">
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
            <Card>
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
            <Card>
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
            <Card>
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
        </Container>

        <Container
          fluid
          className="text-center my-4 my-lg-0 px-lg-0 py-5 bg-white drop-shadow"
        >
          <i className="text-center text-secondary fas fa-4x fa-tools mb-4"></i>
          <h2>Are you interested in our roofing services?</h2>
          <p className="lead font-weight-bold">
            Call us today at <a href="tel:+17742696002">(774) 269-6002</a> or...
          </p>
          <Row noGutters={true}>
            <Col xs={12} md={6}>
              <div className="text-center text-lg-right mt-5 mr-md-2">
                <Button
                  btnlink="/services"
                  btnlabel="See More Roofing Info"
                  btnsolid={false}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="text-center text-lg-left mt-5 ml-md-2">
                <Button
                  btnlink="/contact-us"
                  btnlabel="Get A Roofing Quote"
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

export default Home__Services__Roofing;
