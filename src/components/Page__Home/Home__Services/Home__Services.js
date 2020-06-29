import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import ImgRoofingServices from '../../ImageComps/img-roofing-services';
import ImgVinylSidingServices from '../../ImageComps/img-vinyl-siding-services';
import ImgGutterServices from '../../ImageComps/img-gutter-services';
import ImgMassSaveInsulationServices from '../../ImageComps/img-mass-save-insulation-services';
import Button from '../../Button/Button';

const Home__Services = ({ className }) => {
  return (
    <section id="home-services-section">
      {/* Roofing Services */}
      <Container fluid className="px-0 mb-5">
        <Row noGutters={true}>
          <Col className="py-3 py-lg-5" xs={12} md={6}>
            <Container>
              <h2>Your Local Roofing Contractor</h2>
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
              <Container className="checklist mt-5 p-3 p-lg-3 justify-content-center align-items-center">
                <h3>Our Roofing Services</h3>
                <ul className="check mb-5">
                  <li>Roofing call process - Step 1</li>
                  <li>Roofing call process - Step 2</li>
                  <li>Roofing call process - Step 3</li>
                </ul>
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
                        How long does a roof last?
                      </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id dolor quod aut ab repellat et soluta fugit autem,
                        sint excepturi dolorem, doloribus eveniet quisquam quam
                        consectetur qui repellendus nulla commodi.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      <span className="mr-3">
                        <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                      </span>
                      <span className="accordionText">
                        How much does a new roof cost?
                      </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id dolor quod aut ab repellat et soluta fugit autem,
                        sint excepturi dolorem, doloribus eveniet quisquam quam
                        consectetur qui repellendus nulla commodi.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Container>
              <div className="text-center mt-5">
                <Button btnlink="/" btnlabel="Get A Roofing Quote" btn={true} />
              </div>
            </Container>
          </Col>
          <Col xs={12} md={6}>
            <ImgRoofingServices />
          </Col>
        </Row>
      </Container>
      {/* Vinyl Siding Services */}
      <Container fluid className="px-0 mb-5">
        <Row noGutters={true}>
          <Col xs={12} md={6}>
            <ImgVinylSidingServices />
          </Col>
          <Col className="py-3 py-lg-5 px-0" xs={12} md={6}>
            <Container>
              <h2>Your Vinyl Siding Experts</h2>
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
              <Container className="checklist mt-5 p-3 p-lg-3 justify-content-center align-items-center">
                <h3>Our Vinyl Siding Services</h3>
                <ul className="check mb-5">
                  <li>Roofing call process - Step 1</li>
                  <li>Roofing call process - Step 2</li>
                  <li>Roofing call process - Step 3</li>
                </ul>
                <h4 className="bg-secondary p-3 text-white mb-0">
                  Common Vinyl Siding Questions
                </h4>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      <span className="mr-3">
                        <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                      </span>
                      <span className="accordionText">
                        How long does a roof last?
                      </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id dolor quod aut ab repellat et soluta fugit autem,
                        sint excepturi dolorem, doloribus eveniet quisquam quam
                        consectetur qui repellendus nulla commodi.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      <span className="mr-3">
                        <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                      </span>
                      <span className="accordionText">
                        How much does a new roof cost?
                      </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id dolor quod aut ab repellat et soluta fugit autem,
                        sint excepturi dolorem, doloribus eveniet quisquam quam
                        consectetur qui repellendus nulla commodi.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Container>
              <div className="text-center mt-5">
                <Button
                  btnlink="/"
                  btnlabel="Get A Vinyl Siding Quote"
                  btn={true}
                />
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      {/* Gutter Services */}
      <Container fluid className="px-0 mb-5">
        <Row noGutters={true}>
          <Col className="py-3 py-lg-5" xs={12} md={6}>
            <Container>
              <h2>Your Gutter Installation Pro's</h2>
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
              <Container className="checklist mt-5 p-3 p-lg-3 justify-content-center align-items-center">
                <h3>Our Gutter Services</h3>
                <ul className="check mb-5">
                  <li>Roofing call process - Step 1</li>
                  <li>Roofing call process - Step 2</li>
                  <li>Roofing call process - Step 3</li>
                </ul>
                <h4 className="bg-secondary p-3 text-white mb-0">
                  Common Gutter Installation Questions
                </h4>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      <span className="mr-3">
                        <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                      </span>
                      <span className="accordionText">
                        How long does a roof last?
                      </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id dolor quod aut ab repellat et soluta fugit autem,
                        sint excepturi dolorem, doloribus eveniet quisquam quam
                        consectetur qui repellendus nulla commodi.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      <span className="mr-3">
                        <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                      </span>
                      <span className="accordionText">
                        How much does a new roof cost?
                      </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id dolor quod aut ab repellat et soluta fugit autem,
                        sint excepturi dolorem, doloribus eveniet quisquam quam
                        consectetur qui repellendus nulla commodi.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Container>
              <div className="text-center mt-5">
                <Button btnlink="/" btnlabel="Get A Gutter Quote" btn={true} />
              </div>
            </Container>
          </Col>
          <Col xs={12} md={6}>
            <ImgGutterServices />
          </Col>
        </Row>
      </Container>
      {/* Insulation Services */}
      <Container fluid className="px-0">
        <Row noGutters={true}>
          <Col className="py-3 py-lg-5" xs={12} md={6}>
            <Container>
              <h2>Your Local Mass Save Insulation Contractor</h2>
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
              <Container className="checklist mt-5 p-3 p-lg-3 justify-content-center align-items-center">
                <h3>Our Mass Save Insulation Program</h3>
                <ul className="check mb-5">
                  <li>Roofing call process - Step 1</li>
                  <li>Roofing call process - Step 2</li>
                  <li>Roofing call process - Step 3</li>
                </ul>
                <h4 className="bg-secondary p-3 text-white mb-0">
                  Common Insulation Questions
                </h4>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      <span className="mr-3">
                        <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                      </span>
                      <span className="accordionText">
                        How long does a roof last?
                      </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id dolor quod aut ab repellat et soluta fugit autem,
                        sint excepturi dolorem, doloribus eveniet quisquam quam
                        consectetur qui repellendus nulla commodi.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      <span className="mr-3">
                        <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                      </span>
                      <span className="accordionText">
                        How much does a new roof cost?
                      </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id dolor quod aut ab repellat et soluta fugit autem,
                        sint excepturi dolorem, doloribus eveniet quisquam quam
                        consectetur qui repellendus nulla commodi.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Container>
              <div className="text-center mt-5">
                <Button
                  btnlink="/"
                  btnlabel="Get An Insulation Quote"
                  btn={true}
                />
              </div>
            </Container>
          </Col>
          <Col xs={12} md={6}>
            <ImgMassSaveInsulationServices />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home__Services;
