import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Helmet from 'react-helmet';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/common/SEO';
import Contact from '../components/layouts/headers/Contact';

const ThankYouPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query ThankYouPageQ {
      masthead: file(
        relativePath: {
          eq: "images/reviews-google-facebook-home-advisor-mdh-construction-plymouth-ma.jpg"
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
        title="Thank You! | MDH Construction | Plymouth, MA"
        description=""
        canonicalLink="https://www.mdhconstruction.com/thank-you/"
      />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Contact
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Thank You!"
        textSecondary="We will be contacting you shortly"
        alt="Thanks"
        btnlabel="Return Home"
      />
      <Breadcrumb crumbs={crumbs} crumbSeparator="/" crumbLabel="Thank You" />
      <section id="thank-you-page">
        <Container>
          <Row>
            <Col className="py-3 mx-auto" xs={12} md={12} lg={10}>
              <Container className="text-center">
                <Container className="mb-5 p-5 bg-white border rounded drop-shadow">
                  <p className="lead text-danger font-weight-bold mb-5">
                    IMPORTANT NOTICE:
                  </p>
                  <p className="lead text-dark font-weight-bold">
                    We greatly appreciate your interest and look forward to
                    working with you.
                  </p>
                  <p className="lead mb-5">
                    At the moment, we are very busy and completely booked for
                    the entire summer. Please note, the earliest we can schedule
                    new projects is the fall. We apologize for any inconvenience
                    this may cause.
                  </p>
                  <p className="lead font-italic text-right mb-0">
                    Thanks,
                    <br />
                    MDH Construction
                  </p>
                </Container>
                <Container className="pt-5">
                  <Link to="/" className="mt-5 pt-5">
                    <i className="fas fa-mobile-4x fa-home text-secondary pointer mb-4"></i>
                    <p className="display-4">Return To Our Homepage</p>
                  </Link>
                </Container>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default ThankYouPage;
