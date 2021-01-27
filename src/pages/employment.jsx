import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Col, Container, Row } from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/common/SEO';
import Header from '../components/layouts/headers/Header';
import Banner from '../components/layouts/bodies/Banner';
import ImgMDHLogoFluid from '../components/images/logos/img-mdh-logo-fluid';
import ImgEmploymentReview from '../components/images/pages/employment/img-employment-review';

const EmploymentPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query EmploymentPageQ {
      masthead: file(
        relativePath: {
          eq: "images/employment-mdh-construction-general-contractor-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bgimg: file(
        relativePath: {
          eq: "images/pages/employment/employment-help-wanted-mdh-construction-general-contractor-plymouth-massachusetts.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageDataHeader = data.masthead.childImageSharp.fluid;
  const imageDataBodyBanner = data.bgimg.childImageSharp.fluid;

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout>
      <SEO
        title="We Are Hiring! Construction Jobs, PTO, Bonuses | Plymouth, MA"
        description="If you have a set of skills related to the home improvement, remodeling, or commercial construction industries, we want to hear from you! Call (774) 269-6002"
        canonicalLink="https://www.mdhconstruction.com/employment/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Employment at MDH Construction"
        textSecondary="Join Our Team of Expert Tradesmen"
        alt="MDH Construction employees leaving a job site in Plymouth, MA after working on gutter installion, deck construction, and home insulation."
      />
      <Breadcrumb crumbs={crumbs} crumbSeparator="/" crumbLabel="Employment" />
      <Banner
        Tag="div"
        className=""
        fluid={imageDataBodyBanner}
        alt="A person cirlcing a help wanted ad in the newspaper with a pen."
        textLeftOne="We are hiring."
        textLeftTwo="Call us today!"
        textRight={
          <p>
            At <Link to="/who-we-are/">MDH Construction</Link> we know that{' '}
            <strong>a company is only as good its people</strong>
            . That is why we've built a team of tradesmen who care deeply about
            the quality of their work and the clients we serve.
            <br />
            <br />
            If you have a set of skills that relate to the home improvement,
            remodeling, or commercial construction industries — and you believe
            in quality workmanship and stellar customer care —{' '}
            <strong>we want to hear from you</strong>
            !
            <br />
            <br />
            Please send your resume to{' '}
            <a
              className="font-weight-bold"
              href="mailto:jobs@mdhconstruction.com?Subject=Job%20Email%20From%20Website"
              target="_blank"
            >
              jobs
              <wbr />
              @mdhconstruction.com
            </a>
            .
          </p>
        }
      />
      <section className="section-no-margin-bottom" id="about-page">
        <Container fluid>
          <Row className="mb-5 pb-5">
            <Col lg={6} className="mx-auto">
              <Container className="text-center p-lg-5">
                <ImgMDHLogoFluid className="no-drop-shadow w-50 mx-auto mb-5 mb-lg-0" />
              </Container>
              <Container className="checklist p-3 p-lg-4 mb-5 justify-content-center align-items-center">
                <h2 className="text-secondary">We Offer Our Employees:</h2>
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
              <h3 className="text-left">
                Insulation Installers And Crew Chiefs
              </h3>
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
                    Boot Camp Authorization AND BPI Building Analyst
                    Certification (Boot Camp Authorization requires Basic and
                    Advanced Air Sealing Authorizations AND Advanced Insulation
                    Authorization)
                  </li>
                  <li>
                    Other RMC‐approved training/authorization that demonstrates
                    knowledge of proper air sealing and dense pack techniques,
                    job site management, and combustion safety testing
                  </li>
                </ul>
              </Container>
              <Container className="mb-5">
                <p className="lead">
                  Qualified candidates should send their resume to{' '}
                  <a
                    className="font-weight-bold"
                    href="mailto:jobs@mdhconstruction.com?Subject=Job%20Email%20From%20Website"
                    target="_blank"
                  >
                    jobs
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
                  MDH Construction is an equal opportunity employer. We pledge
                  to provide equal employment opportunities without regard to
                  race, color, creed, national origin, religion, sex, sexual
                  orientation, age, marital status or disability.
                </p>
              </Container>
            </Container>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default EmploymentPage;
