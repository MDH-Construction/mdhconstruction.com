import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Col, Container, Row } from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/common/SEO';
import Header from '../components/layouts/headers/Header';

const NotFoundPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query NotFoundPageQ {
      masthead: file(
        relativePath: {
          eq: "images/404-error-mdh-construction-general-contractor-plymouth-ma.jpg"
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
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout>
      <SEO
        title="Something Went Wrong! Page Cannot Be Found | MDH Construction"
        description="Something Went Wrong! This page cannot be found"
        canonicalLink="https://www.mdhconstruction.com/404/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Something Went Wrong!"
        textSecondary="This page cannot be found"
        alt="404 Error - Oops! This Page Cannot Be Found"
      />
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator="/"
        crumbLabel="404 Error - Page Missing"
      />
      <section id="missing-page">
        <Container className="my-5">
          <h2>Let's See If We Can Help You</h2>
          <Row className="pt-4 px-2 px-lg-5">
            <Col xs={12} md={4}>
              <Container className="text-center">
                <Link to="/services" title="See Services">
                  <i className="text-secondary fas fa-mobile-4x fa-tools my-2 pointer"></i>
                </Link>
                <Link
                  to="/services"
                  title="See Services"
                  className="dotted-underline font-weight-bold d-block"
                >
                  See Services
                </Link>
              </Container>
            </Col>
            <Col xs={12} md={4}>
              <Container className="text-center">
                <Link to="/" title="Return Home">
                  <i className="text-secondary fas fa-mobile-4x fa-home my-2 pointer"></i>
                </Link>
                <Link
                  to="/"
                  title="Return Home"
                  className="dotted-underline font-weight-bold d-block"
                >
                  Return Home
                </Link>
              </Container>
            </Col>
            <Col xs={12} md={4}>
              <Container className="text-center">
                <Link to="/contact-us" title="Contact Us">
                  <i className="text-secondary fas fa-mobile-4x fa-phone my-2 pointer"></i>
                </Link>
                <Link
                  to="/contact-us"
                  title="Contact Us"
                  className="dotted-underline font-weight-bold d-block"
                >
                  Contact Us
                </Link>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
