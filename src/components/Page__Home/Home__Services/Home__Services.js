import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import ImgRoofingServices from '../../ImageComps/img-roofing-services';
import ImgGutterServices from '../../ImageComps/img-gutter-services';
import ImgMassSaveInsulationServices from '../../ImageComps/img-mass-save-insulation-services';
import Button from '../../Button/Button';

const Home__Services = ({ className }) => {
  return (
    <section id="home-services-section">
      <Row>
        <Col className="py-3 py-lg-5" xs={12} md={6}>
          <Container>
            <h2>Roofing and Siding</h2>
            <p>
              MDH Construction remains committed to superior craftsmanship and
              unmatched customer care. Our team of highly qualified tradesmen
              take great pride in their work. Centrally located in Plymouth,
              Massachusetts, we service the Boston area, South Shore and Cape
              Cod.
            </p>
            <Container className="checklist mt-5 p-3 p-lg-3 justify-content-center align-items-center">
              <h3>Why We're Different</h3>
              <ul className="check">
                <li>
                  We hire expert tradesman and provide them with regular,
                  continuing education
                </li>
                <li>We treat our clients and their property with respect</li>
                <li>
                  We aim to start and complete projects on or ahead of schedule
                </li>
              </ul>
            </Container>
            <div className="text-center mt-5">
              <Button btnlink="/" btnlabel="Contact Us Today" btn={true} />
            </div>
          </Container>
        </Col>
        <Col className="m-0 p-0" xs={12} md={6}>
          <ImgRoofingServices />
        </Col>
      </Row>

      <Row>
        <Col className="m-0 p-0" xs={12} md={6}>
          <ImgGutterServices />
        </Col>
        <Col className="py-3 py-lg-5" xs={12} md={6}>
          <Container>
            <h2>Gutters and Downspouts</h2>
            <p>
              MDH Construction remains committed to superior craftsmanship and
              unmatched customer care. Our team of highly qualified tradesmen
              take great pride in their work. Centrally located in Plymouth,
              Massachusetts, we service the Boston area, South Shore and Cape
              Cod.
            </p>
            <Container className="checklist mt-5 p-3 p-lg-3 justify-content-center align-items-center">
              <h3>Why We're Different</h3>
              <ul className="check">
                <li>
                  We hire expert tradesman and provide them with regular,
                  continuing education
                </li>
                <li>We treat our clients and their property with respect</li>
                <li>
                  We aim to start and complete projects on or ahead of schedule
                </li>
              </ul>
            </Container>
            <div className="text-center mt-5">
              <Button btnlink="/" btnlabel="Contact Us Today" btn={true} />
            </div>
          </Container>
        </Col>
      </Row>

      <Row>
        <Col className="py-3 py-lg-5" xs={12} md={6}>
          <Container>
            <h2>Mass Save Home Insulation Program</h2>
            <p>
              MDH Construction remains committed to superior craftsmanship and
              unmatched customer care. Our team of highly qualified tradesmen
              take great pride in their work. Centrally located in Plymouth,
              Massachusetts, we service the Boston area, South Shore and Cape
              Cod.
            </p>
            <Container className="checklist mt-5 p-3 p-lg-3 justify-content-center align-items-center">
              <h3>Why We're Different</h3>
              <ul className="check">
                <li>
                  We hire expert tradesman and provide them with regular,
                  continuing education
                </li>
                <li>We treat our clients and their property with respect</li>
                <li>
                  We aim to start and complete projects on or ahead of schedule
                </li>
              </ul>
            </Container>
            <div className="text-center mt-5">
              <Button btnlink="/" btnlabel="Contact Us Today" btn={true} />
            </div>
          </Container>
        </Col>
        <Col className="m-0 p-0" xs={12} md={6}>
          <ImgMassSaveInsulationServices />
        </Col>
      </Row>

      {/* <Container>
        <h2 className="mb-5">
          Massachusetts
          <br /> Construction Services
        </h2>
        <Row noGutters className="mb-5">
          <Col xs={12} md={4} className="mb-5 mb-lg-0">
            <div className="mx-2 bg-white rounded border py-3 drop-shadow">
              <Col className="mb-5 mb-md-0">
                <h3>Exterior Services</h3>
                <ImgExtServ className="mb-4 drop-shadow border border-secondary rounded" />
                <span className="d-flex">
                  <i className="fas fa-check text-primary mt-1"></i>
                  <h4 className="ml-2 mb-1 text-left">
                    Roofing
                    <span className="font-weight-light">
                      {' '}
                      - Asphalt & wood shingle
                    </span>
                  </h4>
                </span>
                <span className="d-flex">
                  <i className="fas fa-check text-primary mt-1"></i>
                  <h4 className="ml-2 mb-1 text-left">
                    Siding{' '}
                    <span className="font-weight-light">
                      {' '}
                      - Vinyl, Wood, Fiber-cement
                    </span>
                  </h4>
                </span>
                <span className="d-flex">
                  <i className="fas fa-check text-primary mt-1"></i>
                  <h4 className="ml-2 mb-1 text-left">
                    Gutters{' '}
                    <span className="font-weight-light">
                      {' '}
                      - Seamless Gutters, Downspouts, Cleaning & Repair
                    </span>
                  </h4>
                </span>
                <div className="my-3 text-center">
                  <Button
                    btnlink="/"
                    btnlabel="See All Exterior Services"
                    btnsolid={true}
                  />
                </div>
              </Col>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-5 mb-lg-0">
            <div className="mx-2 bg-white rounded border py-3 drop-shadow">
              <Col className="mb-5 mb-md-0">
                <h3>Interior Services</h3>
                <ImgIntServ className="mb-4 drop-shadow border border-secondary rounded" />
                <span className="d-flex">
                  <i className="fas fa-check text-primary mt-1"></i>
                  <h4 className="ml-2 mb-1 text-left">
                    Remodeling
                    <span className="font-weight-light">
                      {' '}
                      - Kitchen, Bathroom, Basement
                    </span>
                  </h4>
                </span>
                <span className="d-flex">
                  <i className="fas fa-check text-primary mt-1"></i>
                  <h4 className="ml-2 mb-1 text-left">
                    Flooring{' '}
                    <span className="font-weight-light">
                      {' '}
                      - Wood, Laminate, Stone
                    </span>
                  </h4>
                </span>
                <span className="d-flex">
                  <i className="fas fa-check text-primary mt-1"></i>
                  <h4 className="ml-2 mb-1 text-left">
                    Tiling{' '}
                    <span className="font-weight-light">
                      {' '}
                      - Ceramic, Natural Stone Tile Installation
                    </span>
                  </h4>
                </span>
                <div className="my-3 text-center">
                  <Button
                    btnlink="/"
                    btnlabel="See All Interior Services"
                    btnsolid={true}
                  />
                </div>
              </Col>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-5 mb-lg-0">
            <div className="mx-2 bg-white rounded border py-3 drop-shadow">
              <Col className="mb-5 mb-md-0">
                <h3>Insulation Services</h3>
                <ImgInsServ className="mb-4 drop-shadow border border-secondary rounded" />
                <span className="d-flex">
                  <i className="fas fa-check text-primary mt-1"></i>
                  <h4 className="ml-2 mb-1 text-left">
                    Mass Save Program
                    <span className="font-weight-light">
                      {' '}
                      - Home Insulation
                    </span>
                  </h4>
                </span>
                <span className="d-flex">
                  <i className="fas fa-check text-primary mt-1"></i>
                  <h4 className="ml-2 mb-1 text-left">
                    Efficiency{' '}
                    <span className="font-weight-light">
                      {' '}
                      - Thermal Imaging & Diagnostics
                    </span>
                  </h4>
                </span>
                <span className="d-flex">
                  <i className="fas fa-check text-primary mt-1"></i>
                  <h4 className="ml-2 mb-1 text-left">
                    Installation{' '}
                    <span className="font-weight-light">
                      {' '}
                      - Batt & Rolled, Reflective, Blown-in
                    </span>
                  </h4>
                </span>
                <div className="my-3 text-center">
                  <Button
                    btnlink="/"
                    btnlabel="See All Insulation Services"
                    btnsolid={true}
                  />
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container> */}
    </section>
  );
};

export default Home__Services;
