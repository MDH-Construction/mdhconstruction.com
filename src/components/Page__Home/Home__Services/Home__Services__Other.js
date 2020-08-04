import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import ImgGutterServices from '../../Images/Pages/Home/img-gutter-services';
import ImgFullyLicensed from '../../Images/Logos/img-fully-licensed';
import Button from '../../Button/Button';

const Home__Services__Other = ({ className }) => {
  return (
    <section className="section-no-margin" id="home-gutters-section">
      <Container fluid className="px-0">
        <Row noGutters={true}>
          <Col className="drop-shadow order-1 order-lg-1" xs={12} md={6}>
            <ImgGutterServices />
          </Col>
          <Col className="py-3 py-lg-5 order-2 order-lg-2" xs={12} md={6}>
            <Container className="px-lg-5">
              <h2>Your Home Improvement Professionals</h2>
              <div className="text-center">
                <ImgFullyLicensed className="mt-3 mb-5 drop-shadow" />
              </div>
              <p>
                MDH Construction offers all of your exterior & interior home
                improvement services from{' '}
                <Link to="/services" className="font-weight-bolder">
                  deck construction
                </Link>
                ,{' '}
                <Link to="/services" className="font-weight-bolder">
                  window installation
                </Link>
                ,{' '}
                <Link to="/services" className="font-weight-bolder">
                  door installation
                </Link>
                , and{' '}
                <Link to="/services" className="font-weight-bolder">
                  roof repair
                </Link>
                , to{' '}
                <Link to="/services" className="font-weight-bolder">
                  flooring and tiling
                </Link>
                ,{' '}
                <Link to="/services" className="font-weight-bolder">
                  interior & exterior painting
                </Link>
                ,{' '}
                <Link to="/services" className="font-weight-bolder">
                  handyman services
                </Link>
                , and{' '}
                <Link to="/services" className="font-weight-bolder">
                  construction management
                </Link>
                .
              </p>
              <p>
                We cover a large array of services, but we never subcontract
                them out. This way, you'll know who you are dealing with and who
                is actually doing the work.
              </p>
              <p>
                If you have a home improvement project in mind, please feel free
                to reach out to us anytime and we'll be glad to help. Our
                experience will lead you in the right direction and make sure
                the work gets done right the first time.
              </p>
            </Container>
          </Col>
        </Row>
        <Container className="checklist mt-4 my-lg-5 p-3 p-lg-3 justify-content-center align-items-center drop-shadow rounded">
          <h3 className="mb-3">Our Home Improvement Services</h3>
          <hr className="divider pb-3" />
          <Row noGutters={true}>
            <Col xs={12} md={4}>
              <p className="font-weight-bold">Exterior Services:</p>
              <ul className="check mb-5">
                <li>Deck & porch construction</li>
                <li>Window & door installation</li>
                <li>Roof & siding replacement & repair</li>
                <li>Fencing & retaining wall installation</li>
                <li>Exterior painting</li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <p className="font-weight-bold">Interior Services:</p>
              <ul className="check mb-5">
                <li>Door installation</li>
                <li>Flooring & tiling installation</li>
                <li>Interior painting</li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <p className="font-weight-bold">Other Services:</p>
              <ul className="check mb-5">
                <li>Debris removal, clean-out, haul-away</li>
                <li>Handyman services</li>
                <li>Construction management</li>
              </ul>
            </Col>
          </Row>
          <h4 className="bg-secondary p-3 text-white mb-0">
            Common Home Improvement Questions
          </h4>
          <Accordion>
            <Card className="accordion-animation">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <span className="mr-3">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <span className="accordionText">Question #1</span>
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
                <span className="accordionText">Question #2</span>
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
                <span className="accordionText">Question #3</span>
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
          <i className="text-center text-secondary fas fa-4x fa-tools my-4"></i>
          <h2>Are you interested in our home improvement services?</h2>
          <p className="lead font-weight-bold">
            Call us today at <a href="tel:+17742696002">(774) 269-6002</a> or...
          </p>
          <Row noGutters={true}>
            <Col xs={12} md={6}>
              <div className="text-center text-lg-right mt-5 mr-md-2">
                <Button
                  btnlink="/services"
                  btnlabel="See All Services"
                  btnsolid={false}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="text-center text-lg-left mt-5 mb-4 ml-md-2">
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

export default Home__Services__Other;
