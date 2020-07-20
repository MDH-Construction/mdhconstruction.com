import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import ImgMDHLogo from '../Images/Logos/img-mdh-logo';
import ButtonExternal from '../ButtonExternal/ButtonExternal';
import ImgEmploymentHelpWanted from '../Images/Pages/Employment/img-employment-help-wanted';
import ImgEmploymentReview from '../Images/Pages/Employment/img-employment-review';

const Employment__Body = ({ className }) => {
  return (
    <section id="about-page">
      <Container fluid>
        <Row className="bg-secondary p-3 justify-content-center">
          <Col>
            <p className="display-4 text-white text-center">We Are Hiring!</p>
            <hr className="divider" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <ImgEmploymentHelpWanted className="mt-3 mt-lg-0 mb-3 mb-lg-0" />
          </Col>
          <Col className="py-3 py-lg-5" xs={12} lg={6}>
            <div className="text-center mb-4">
              <ImgMDHLogo className="no-drop-shadow mt-3 mt-md-0" />
            </div>
            <p>
              At MDH Construction we know that a company is only as good its
              people. That is why we've built a team of tradesmen who care
              deeply about the quality of their work and the clients we serve.
            </p>
            <p>
              If you have a set of skills that relate to the home improvement,
              remodeling, or commercial construction industries — and you
              believe in quality workmanship and stellar customer care — we want
              to hear from you! Please send your resume to{' '}
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
            <Container className="checklist mt-5 mb-5 mb-md-0 p-3 justify-content-center align-items-center">
              <h3>We Offer Our Employees:</h3>
              <ul className="check">
                <li>Competitive pay</li>
                <li>Bonuses and incentives</li>
                <li>Paid time off</li>
                <li>Holidays</li>
                <li>Continuing education</li>
              </ul>
            </Container>
          </Col>
        </Row>
        <Row className="bg-secondary text-center justify-content-center py-5 mb-md-5">
          <Col className="p-5" xs={12} lg={6}>
            <h2 className="text-white drop-shadow mb-2">
              Indeed Featured Review
            </h2>
            <hr className="divider mb-5" />
            <ImgEmploymentReview className="drop-shadow rounded border" />
            <div className="text-center mt-5">
              <ButtonExternal
                btnlink="https://www.indeed.com/cmp/Mdh-Construction"
                btnlabel="See 5-Star Review On Indeed"
                btn={true}
              />
            </div>
          </Col>
        </Row>
        <Row>
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
