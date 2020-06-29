import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import ImgGutterServices from '../../ImageComps/img-gutter-services';
import ImgFullyLicensed from '../../ImageComps/img-fully-licensed';
import Button from '../../Button/Button';

const Home__Services__Gutters = ({ className }) => {
  return (
    <section id="home-services-section">
      <Container fluid className="px-lg-0 mb-5 mt-5 mt-lg-0">
        <Row noGutters={true}>
          <Col className="py-3 py-lg-5 order-2" xs={12} md={6}>
            <Container className="px-lg-5">
              <h2>Your Gutter Installation Experts</h2>
              <div className="text-center">
                <ImgFullyLicensed className="mt-3 mb-5 drop-shadow" />
              </div>
              <p>
                MDH Construction delivers affordable, high-quality services such
                as{' '}
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
                provide protection, reliability and beautiful aesthetics for
                your home or business. From [insert roof style, slope] to
                [insert roof style, slopes] with [insert materials, asphalt
                shingles] to [insert materials, wood shingles], we guarantee
                premium solutions.
              </p>
              <p>
                Years of experience with construction in Massachusetts has
                refined our{' '}
                <Link to="/roof-inspection" className="font-weight-bolder">
                  roof inspection
                </Link>{' '}
                process and allows us to identify improper installations and
                core problems that result in{' '}
                <Link to="/roof-leaks" className="font-weight-bolder">
                  roof leaks
                </Link>
                , exposure to elements, and inadequate attic ventilation.
              </p>
            </Container>
          </Col>
          <Col className="mt-5 mt-lg-0 drop-shadow" xs={12} md={6}>
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
                <li>Various shingle types</li>
                <li>An array of colors and choices</li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <p className="font-weight-bold">We Deliver:</p>
              <ul className="check mb-5">
                <li>Reliable roofing</li>
                <li>Beautiful design</li>
                <li>100% satisfaction guaranteed</li>
              </ul>
            </Col>
          </Row>
          <h4 className="bg-secondary p-3 text-white mb-0">
            Common Gutter Installation Questions
          </h4>
          <Accordion>
            <Card>
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
            <Card>
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
            <Card>
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
          className="text-center my-4 my-lg-0 px-lg-0 py-5 bg-white drop-shadow"
        >
          <i className="text-center text-secondary fas fa-4x fa-tools mb-4"></i>
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
              <div className="text-center text-lg-left mt-5 ml-md-2">
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
