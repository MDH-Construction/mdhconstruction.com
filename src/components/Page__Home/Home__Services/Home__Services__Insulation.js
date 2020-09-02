import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import ImgMassSaveInsulationServices from '../../Images/Pages/Home/img-mass-save-insulation-services';
import ImgMassSave from '../../Images/Logos/img-mass-save';
import Button from '../../Button/Button';

const Home__Services__Insulation = ({ className }) => {
  return (
    <section className="section-no-margin-bottom" id="home-insulation-section">
      <Container fluid className="px-0">
        <Row noGutters>
          <h2 className="display-4 font-weight-bold d-lg-none mx-auto">
            Your Mass Save Insulation Contractor
          </h2>
          <Col className="drop-shadow order-1 order-lg-1 mb-5" xs={12} lg={6}>
            <ImgMassSaveInsulationServices />
          </Col>
          <Col className="order-2 order-lg-2" xs={12} lg={6}>
            <Container className="px-lg-5">
              <h2 className="display-4 font-weight-bold d-none d-lg-block">
                Your Mass Save Insulation Contractor
              </h2>
              <p>
                MDH Construction is proud to be a{' '}
                <Link to="/services" className="font-weight-bolder">
                  Mass Save Partner
                </Link>{' '}
                working with Massachusetts residential customers and business
                owners to provide energy-efficient services such as{' '}
                <Link to="/services" className="font-weight-bolder">
                  insulation installation
                </Link>{' '}
                and{' '}
                <Link to="/services" className="font-weight-bolder">
                  weatherization
                </Link>
                .
              </p>
              <p>
                We offer various types of insulation, including{' '}
                <Link to="/services" className="font-weight-bolder">
                  blown-in insulation
                </Link>
                ,{' '}
                <Link to="/services" className="font-weight-bolder">
                  reflective insulation
                </Link>
                , and{' '}
                <Link to="/services" className="font-weight-bolder">
                  batt and rolled insulation
                </Link>
                .
              </p>
              <p>
                Keep the heat in during the winter and retain the cool air
                during the summer with air sealing and weather stripping. We'll
                send in our team of professionals to run thermal imaging tests
                and blower door diagnostics to identify weatherization problems
                throughout your home or business.
              </p>
            </Container>
          </Col>
        </Row>
        {/* <Container className="checklist mt-4 my-lg-5 p-3 p-lg-3 justify-content-center align-items-center drop-shadow rounded">
          <h3 className="mb-3">Our Mass Save Insulation Program</h3>
          <hr className="divider pb-3" />
          <Row noGutters={true}>
            <Col xs={12} md={4}>
              <p className="font-weight-bold">We Offer:</p>
              <ul className="check mb-5">
                <li>Blown-in insulation</li>
                <li>Reflective insulation</li>
                <li>Batt and rolled insulation</li>
                <li>Air sealing</li>
                <li>Weather stripping</li>
                <li>Thermal imaging</li>
                <li>Blower door diagnostics</li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <p className="font-weight-bold">We Provide:</p>
              <ul className="check mb-5">
                <li>
                  Premium insulation materials such as{' '}
                  <strong>[insert materials]</strong>
                </li>
                <li>
                  Various{' '}
                  <strong>[insert options for insulation services]</strong>
                </li>
                <li>
                  Payment options such as{' '}
                  <strong>[insert payment options]</strong>
                </li>
                <li>
                  Massachusetts licensing & full-coverage liability insurance
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <p className="font-weight-bold">We Deliver:</p>
              <ul className="check mb-5">
                <li>Clear communication</li>
                <li>Accurate schedules & timelines</li>
                <li>Competitive pricing</li>
                <li>Beautiful design & curb appeal</li>
                <li>100% satisfaction guaranteed</li>
              </ul>
            </Col>
          </Row>
          <h4 className="bg-secondary p-3 text-white mb-0">
            Common Insulation Questions
          </h4>
          <Accordion>
            <Card className="accordion-animation">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <span className="mr-3">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <span className="accordionText">
                  How much does insulation cost?
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
                  How much insulation do I need?
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
                  What is the Mass Save insulation program?
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

export default Home__Services__Insulation;
