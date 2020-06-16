import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import ImgTruck from '../ImageComps/img-truck';
import Button from '../Button/Button';

const Employment__Body = ({ className }) => {
  return (
    <section id="about-page">
      {/* <Container> */}
      <Row>
        {/* <Col xs={12} md={6}>
          <ImgTruck />
        </Col> */}
        <Col className="py-3 py-lg-5" xs={12} md={12}>
          <Container>
            <p>
              At MDH Construction we know that a company is only as good its
              people. That is why we've built a team of tradesmen who care
              deeply about the quality of their work and the clients we serve.
            </p>
            <p>
              If you have a set of skills that relate to the home improvement,
              remodeling, or commercial construction industries — and you
              believe in quality workmanship and stellar customer care — we want
              to hear from you! Please send your resume to
              jobs@mdhconstruction.com.
            </p>
            <h2>Current Openings</h2>
            <h3>Insulation Installers And Crew Chiefs</h3>
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
            <p>Crew chiefs must have at least one of the following:</p>
            <ul>
              <li>DOE Weatherization Crew Chief certification</li>
              <li>
                Boot Camp Authorization AND Combustion Safety Training (Boot
                Camp Authorization requires Basic and Advanced Air Sealing
                Authorizations AND Advanced Insulation Authorization)
              </li>
              <li>
                Boot Camp Authorization AND BPI Building Analyst Certification
                (Boot Camp Authorization requires Basic and Advanced Air Sealing
                Authorizations AND Advanced Insulation Authorization)
              </li>
              <li>
                Other RMC‐approved training/authorization that demonstrates
                knowledge of proper air sealing and dense pack techniques, job
                site management, and combustion safety testing
              </li>
            </ul>
            <p>
              Qualified candidates should send their resume to
              jobs@mdhconstruction.com.
            </p>
            <hr />
            <p>
              Note: A background check and pre-employment drug screening is
              required for employment.
            </p>
            <p>
              MDH Construction is an equal opportunity employer. We pledge to
              provide equal employment opportunities without regard to race,
              color, creed, national origin, religion, sex, sexual orientation,
              age, marital status or disability.
            </p>

            <Container className="checklist mt-5 p-3 p-lg-3 justify-content-center align-items-center">
              <h3>We Offer Our Employees...</h3>
              <ul className="check">
                <li>Competitive pay</li>
                <li>Bonuses and incentives</li>
                <li>Paid time off</li>
                <li>Holidays</li>
                <li>Continuing education</li>
              </ul>
            </Container>
            <div className="text-center mt-5">
              <Button btnlink="/" btnlabel="Contact Us Today" btn={true} />
            </div>
          </Container>
        </Col>
      </Row>
      {/* </Container> */}
    </section>
  );
};

export default Employment__Body;
