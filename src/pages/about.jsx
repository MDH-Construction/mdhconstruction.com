import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Helmet } from 'react-helmet';
import { Col, Container, Row } from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/common/SEO';
import Header from '../components/layouts/headers/Header';

const AboutPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query AboutPageQ {
      masthead: file(
        relativePath: {
          eq: "images/about-mdh-construction-general-contractor-plymouth-ma.jpg"
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
        title="A Family Owned Construction Business Located in Plymouth, MA"
        description="About Us | Licensed General Contractor from Plymouth, MA"
        canonicalLink="https://www.mdhconstruction.com/about/"
      />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="About MDH Construction"
        textSecondary="A Reliable, Family Owned And Operated Business"
        alt="About MDH Construction"
      />
      <Breadcrumb crumbs={crumbs} crumbSeparator="/" crumbLabel="About" />
      <section id="about-page">
        <Row>
          <Col className="py-3 py-lg-5" xs={12} md={12}>
            <Container>
              <h2>Your Local Construction Company</h2>
              <p>
                MDH Construction remains committed to superior craftsmanship and
                unmatched customer care. Our team of highly qualified tradesmen
                take great pride in their work. Centrally located in Plymouth,
                Massachusetts, we service the Boston area, South Shore and Cape
                Cod. We specialize in a wide variety of home improvement,
                remodeling, and commercial construction services — ranging from
                large frame-to-finish building jobs to small installation
                projects.
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
                    We aim to start and complete projects on or ahead of
                    schedule
                  </li>
                  <li>We guarantee 100% satisfaction</li>
                </ul>
              </Container>
            </Container>
          </Col>
        </Row>
      </section>
    </Layout>
  );
};

export default AboutPage;
