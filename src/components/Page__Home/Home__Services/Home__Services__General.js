import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import ImgGeneralServices from '../../Images/Pages/Home/img-general-services';
import ImgFullyLicensed from '../../Images/Logos/img-fully-licensed';
import Button from '../../Button/Button';

const Home__Services__General = ({ className }) => {
  return (
    <section id="home-general-section">
      <Container fluid className="px-lg-0 mb-5 mt-5 mt-lg-0">
        <Row noGutters={true}>
          <Col className="py-3 py-lg-5 order-2 order-lg-1" xs={12} md={6}>
            <Container className="px-lg-5">
              <h2>Your Local General Contractor</h2>
              <div className="text-center">
                <ImgFullyLicensed className="mt-3 mb-5 drop-shadow" />
              </div>
              <p>
                MDH Construction delivers affordable, high-quality general
                contractor services such as{' '}
                <Link to="/services" className="font-weight-bolder">
                  full construction
                </Link>
                ,{' '}
                <Link to="/services" className="font-weight-bolder">
                  new additions
                </Link>
                ,{' '}
                <Link to="/services" className="font-weight-bolder">
                  basement remodels
                </Link>
                ,{' '}
                <Link to="/services" className="font-weight-bolder">
                  kitchen remodels
                </Link>
                , and{' '}
                <Link to="/services" className="font-weight-bolder">
                  bathroom remodels
                </Link>{' '}
                on residential homes and commercial buildings.
              </p>
              <p>
                We use certified products and high-grade materials to provide
                protection, reliability, and beautiful aesthetics for your home
                or business.
              </p>
              <p>
                Years of industry experience within Massachusetts has refined
                our construction services, our building process, and our ability
                to maintain customer satisfaction.
              </p>
            </Container>
          </Col>
          <Col className="drop-shadow order-1 order-lg-2" xs={12} md={6}>
            <ImgGeneralServices />
          </Col>
        </Row>
        <Container className="checklist mt-4 my-lg-5 p-3 p-lg-3 justify-content-center align-items-center drop-shadow rounded">
          <h3 className="mb-3">Our General Contractor Services</h3>
          <hr className="divider pb-3" />
          <Row noGutters={true}>
            <Col xs={12} md={4}>
              <p className="font-weight-bold">We Offer:</p>
              <ul className="check mb-5">
                <li>Full construction</li>
                <li>New additions</li>
                <li>Multi-room</li>
                <li>Basement Remodeling</li>
                <li>Kitchen Remodeling</li>
                <li>Bathroom Remodeling</li>
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
            Common General Contractor Questions
          </h4>
          <Accordion>
            <Card className="accordion-animation">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <span className="mr-3">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <span className="accordionText">
                  What is a general contractor?
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
                  What does a general contractor do?
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
                  How much does a general contractor charge?
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
          className="text-center my-4 my-lg-0 px-lg-0 py-5 bg-white drop-shadow border-top border-bottom border-secondary"
        >
          <i className="text-center text-secondary fas fa-4x fa-tools mb-4"></i>
          <h2>Are you interested in our general contractor services?</h2>
          <p className="lead font-weight-bold">
            Call us today at <a href="tel:+17742696002">(774) 269-6002</a> or...
          </p>
          <Row noGutters={true}>
            <Col xs={12} md={6}>
              <div className="text-center text-lg-right mt-5 mr-md-2">
                <Button
                  btnlink="/services"
                  btnlabel="See More Services Info"
                  btnsolid={false}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="text-center text-lg-left mt-5 ml-md-2">
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

export default Home__Services__General;
