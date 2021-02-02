import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import ImgGutterServices from '../../../images/pages/home/img-gutter-services';
import ImgFullyLicensed from '../../../images/logos/img-fully-licensed';

const Gutters = ({ className }) => {
  return (
    <section className="section-no-margin-bottom" id="home-gutters-section">
      <Container fluid className="px-0 px-lg-5">
        <Row noGutters>
          <h2 className="display-4 font-weight-bold d-lg-none mx-auto">
            Your Gutter Installation Experts
          </h2>
          <Col
            className="drop-shadow order-1 order-lg-2 mb-5 px-3 px-lg-0"
            xs={12}
            lg={6}
          >
            <ImgGutterServices className="solid-shadow-primary-bottom-right" />
          </Col>
          <Col className="order-2 order-lg-1" xs={12} lg={6}>
            <Container className="px-lg-5">
              <h2 className="display-4 font-weight-bold d-none d-lg-block">
                Your Gutter Installation Experts
              </h2>
              <p>
                MDH Construction provides all your gutter services such as{' '}
                <Link to="/gutters/" className="font-weight-bolder">
                  gutter installation
                </Link>
                ,{' '}
                <Link to="/gutters/" className="font-weight-bolder">
                  downspout installation
                </Link>
                ,{' '}
                <Link to="/gutters/" className="font-weight-bolder">
                  gutter cleaning
                </Link>
                , and{' '}
                <Link to="/gutters/" className="font-weight-bolder">
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
                <Link to="/gutters/" className="font-weight-bolder">
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
        </Row>
        {/* <Container className="checklist mt-4 my-lg-5 p-3 p-lg-3 justify-content-center align-items-center drop-shadow rounded">
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
                <li>
                  Premium gutter materials such as{' '}
                  <strong>[insert materials]</strong>
                </li>
                <li>
                  Various <strong>[insert options for gutter services]</strong>
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
        </Container> */}
      </Container>
    </section>
  );
};

export default Gutters;
