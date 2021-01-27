import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/common/SEO';
import Header from '../components/layouts/headers/Header';
import Banner from '../components/layouts/bodies/Banner';
import AboutNav from '../components/common/AboutNav';

const WhatWeDoPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query WhatWeDoPageQ {
      masthead: file(
        relativePath: {
          eq: "images/pages/about/what-we-do/licensing-insurance-home-improvement-contractor-mdh-construction-plymouth-ma.jpg"
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
          eq: "images/pages/about/what-we-do/mdh-construction-massachusetts-boston-ma-plymouth-ma.jpg"
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
        title="Licensed Contractor, Full Liability Insurance | Plymouth, MA"
        description="MDH Construction is a fully licensed home improvement contractor & construction supervisor in Massachusetts. We also carry full-coverage liability insurance."
        canonicalLink="https://www.mdhconstruction.com/what-we-do/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Licensing and Insurance"
        textSecondary="Fully Licensed in Massachusetts With Full Coverage Liability Insurance"
        alt="An MDH Construction job site in Plymouth, MA working on a roof replacement."
      />
      <Breadcrumb crumbs={crumbs} crumbSeparator="/" crumbLabel="What We Do" />
      <Banner
        Tag="div"
        className=""
        fluid={imageDataBodyBanner}
        alt="A map of Massachusetts, showing where MDH Construction services home and business owners."
        textLeftOne="Licensed contractor in"
        textLeftTwo="Massachusetts"
        textRight={
          <p>
            MDH Construction’s licensing status{' '}
            <strong>provides proof that we meet industry training</strong>{' '}
            standards for general contracting and construction supervision.
            <br />
            <br />
            <strong>
              These licenses also allow MDH Construction to pull the necessary
              permits to complete a project
            </strong>{' '}
            — something an unlicensed contractor is unable to do. Furthermore,
            our licenses hold us responsible for ensuring that our work meets
            local building codes.
          </p>
        }
      />
      <section className="section-no-margin-bottom" id="about-page">
        <Container fluid className="px-0 mx-0">
          <Container>
            <AboutNav />
          </Container>
          <h2 className="display-4 pb-5">
            Trusted by Home and Business Owners
          </h2>
          <Row className="px-0 mx-0">
            <Col
              xs={12}
              lg={6}
              className="bg-light mx-0 px-0 order-1 order-lg-1"
            >
              <Container className="py-5 px-lg-5">
                <h2 className="display-4 font-weight-bold my-5">
                  State Licenses
                </h2>
                <p>
                  MDH Construction is a fully licensed home improvement
                  contractor and construction supervisor in the state of
                  Massachusetts.
                </p>
                <p>
                  <strong>
                    You can trust that MDH Construction meets industry training
                    standards and can pull the necessary permits to complete
                    your project.
                  </strong>
                </p>
                <Container className="my-5 pt-3 mx-lg-5">
                  <span className="d-flex mb-4">
                    <i className="fas fa-address-card fa-2x text-primary"></i>
                    <span className="ml-4 lead">
                      Home Improvement Contractor License: 183807
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="fas fa-address-card fa-2x text-primary"></i>
                    <span className="ml-4 lead">
                      Construction Supervisors License: 183807
                    </span>
                  </span>
                </Container>
              </Container>
            </Col>
            <Col
              xs={12}
              lg={6}
              className="bg-dark mx-0 px-0 order-2 order-lg-2"
            >
              <Container className="py-5 px-lg-5">
                <h2 className="display-4 font-weight-bold text-primary my-5">
                  Full Insurance
                </h2>
                <p className="text-white">
                  MDH Construction also carries full-coverage liability
                  insurance and we maintain workers' compensation on our
                  employees.
                </p>
                <p className="text-white">
                  <strong>
                    You can feel secure knowing that you will never incur any
                    liability in the unlikely event that something should go
                    wrong.
                  </strong>
                </p>
                <Container className="my-5 pt-3 mx-lg-5">
                  <span className="d-flex mb-4">
                    <i className="fas fa-user-shield fa-2x text-primary"></i>
                    <span className="ml-4 text-white lead">
                      Liability, auto, and workers' compensation insured
                    </span>
                  </span>
                  <span className="d-flex">
                    <i className="fas fa-user-shield fa-2x text-primary"></i>
                    <span className="ml-4 text-white lead">
                      Coverage up to $1 million per incident
                    </span>
                  </span>
                </Container>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default WhatWeDoPage;
