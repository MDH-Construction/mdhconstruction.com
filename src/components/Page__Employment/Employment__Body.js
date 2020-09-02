import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import ImgMDHLogoFluid from '../Images/Logos/img-mdh-logo-fluid';
import ButtonExternal from '../ButtonExternal/ButtonExternal';
import ImgEmploymentReview from '../Images/Pages/Employment/img-employment-review';

const Employment__Body = ({ className }) => {
  return (
    <section className="section-no-margin-bottom" id="about-page">
      <Container fluid>
        <Row className="mb-5 pb-5">
          <Col lg={6} className="mx-auto">
            <Container className="text-center p-lg-5">
              <ImgMDHLogoFluid className="no-drop-shadow w-50 mx-auto mb-5 mb-lg-0" />
            </Container>
            <Container className="checklist p-3 p-lg-4 mb-5 justify-content-center align-items-center">
              <h3>We Offer Our Employees:</h3>
              <Row>
                <Col xs={12} lg={6}>
                  <ul className="check mb-2">
                    <li>Competitive pay</li>
                    <li>Bonuses and incentives</li>
                    <li>Paid time off</li>
                  </ul>
                </Col>
                <Col xs={12} lg={6}>
                  <ul className="check">
                    <li>Holidays</li>
                    <li>Continuing education</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className="p-2 p-lg-5" xs={12} lg={6}>
            <ImgEmploymentReview className="drop-shadow rounded border" />
          </Col>
        </Row>
        <Row className="mb-lg-5">
          <Container className="bg-white border rounded p-3 pt-5 pt-md-3 drop-shadow mb-md-5">
            <h2 className="bg-headline-bar text-white p-3 mt-5 mt-md-0">
              <span className="drop-shadow">Current Openings</span>
            </h2>
            <h3 className="text-left">Insulation Installers And Crew Chiefs</h3>
            <p>
              MDH Construction is seeking full-time insulation installers and
              crew chiefs. Ideal candidates will:
            </p>
            <ul>
              <li>Have valid drivers license and reliable transportation</li>
              <li>
                Be able to pass a pre-employment background check and drug
                screen
              </li>
              <li>Have insulation and air sealing experience is a plus</li>
            </ul>
            <Container className="border border-danger p-3 my-5">
              <p className="font-weight-bold">
                Crew chiefs must have at least one of the following:
              </p>
              <ul>
                <li>DOE Weatherization Crew Chief certification</li>
                <li>
                  Boot Camp Authorization AND Combustion Safety Training (Boot
                  Camp Authorization requires Basic and Advanced Air Sealing
                  Authorizations AND Advanced Insulation Authorization)
                </li>
                <li>
                  Boot Camp Authorization AND BPI Building Analyst Certification
                  (Boot Camp Authorization requires Basic and Advanced Air
                  Sealing Authorizations AND Advanced Insulation Authorization)
                </li>
                <li>
                  Other RMC‐approved training/authorization that demonstrates
                  knowledge of proper air sealing and dense pack techniques, job
                  site management, and combustion safety testing
                </li>
              </ul>
            </Container>
            <Container className="mb-5">
              <p className="lead">
                Qualified candidates should send their resume to{' '}
                <a
                  className="font-weight-bold"
                  href="mailto:michael.maher@mdhconstruction.com?Subject=Job%20Email%20From%20Website"
                  target="_blank"
                >
                  michael.maher
                  <wbr />
                  @mdhconstruction.com
                </a>
                .
              </p>
            </Container>
            <hr className="my-3" />
            <Container className="my-5">
              <p className="font-weight-bold bg-warning p-2">
                Note: A background check and pre-employment drug screening is
                required for employment.
              </p>
              <p className="small pb-5 pb-md-0">
                MDH Construction is an equal opportunity employer. We pledge to
                provide equal employment opportunities without regard to race,
                color, creed, national origin, religion, sex, sexual
                orientation, age, marital status or disability.
              </p>
            </Container>
          </Container>
        </Row>
      </Container>
    </section>
  );
};

export default Employment__Body;
