import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Col, Container, Row } from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/common/SEO';
import Header from '../components/layouts/headers/Header';
import Banner from '../components/layouts/bodies/Banner';
import ImgHomeAdvisorTop from '../components/images/pages/about/ratings/img-home-advisor-top-rated';
import ImgHomeAdvisorElite from '../components/images/pages/about/ratings/img-home-advisor-elite';
import ImgHomeAdvisorFive from '../components/images/pages/about/ratings/img-home-advisor-five-years';
import ImgHomeAdvisorScreened from '../components/images/pages/about/ratings/img-home-advisor-screened';
import ImgBBBRating from '../components/images/pages/about/ratings/img-bbb-rating';
import ImgBBBAcc from '../components/images/pages/about/ratings/img-bbb-acc';
import ImgBBBReviews from '../components/images/pages/about/ratings/img-bbb-reviews';
import ImgAngiesList from '../components/images/logos/img-angies-list';
import AboutNav from '../components/common/AboutNav';

const RatingsPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query RatingsPageQ {
      masthead: file(
        relativePath: {
          eq: "images/new-home-construction-ratings-memberships-mdh-construction-plymouth-ma.jpg"
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
          eq: "images/pages/about/ratings/mdh-construction-gold-stars-plymouth-massachusetts.jpg"
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
        title="Rated A+ on BBB, Top HomeAdvisor, Mass Save | Plymouth, MA"
        description="The service quality is supported by our business ratings, certifications, and professional memberships with BBB, Mass Save, HomeAdvisor, Angie's List, & more."
        canonicalLink="https://www.mdhconstruction.com/ratings-and-memberships/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Ratings And Memberships"
        textSecondary="Better Business Bureau, Mass Save, Home Advisor, & More"
        alt="An MDH Construction job site in Plymouth, MA building a new home."
      />
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator="/"
        crumbLabel="Ratings and Memberships"
      />
      <Banner
        Tag="div"
        className=""
        fluid={imageDataBodyBanner}
        alt="Gold stars on a wooden table"
        textLeftOne="A local company"
        textLeftTwo="you can rely on"
        textRight={
          <p>
            At MDH Construction, we take great pride in our craftsmanship and
            customer care —{' '}
            <strong>our reputation means everything to us</strong>
            .
            <br />
            <br />
            MDH Construction is{' '}
            <strong>consistently a top-rated provider</strong> of superior home
            improvement, remodeling, and commercial construction services.
            <br />
            <br />
            The quality of our service is supported by our{' '}
            <strong>
              business ratings, certifications, and professional memberships
            </strong>
            .
          </p>
        }
      />
      <section className="section-no-margin-bottom" id="about-page-ratings">
        <Container fluid className="px-0 mx-0">
          <Container>
            <AboutNav />
          </Container>
          <h2 className="display-4 pb-5">
            Trusted by Top Industry Organizations
          </h2>
          <Container fluid className="bg-light mx-0 px-0 order-1 order-lg-1">
            <Container className="py-5 px-lg-5">
              <h2 className="mb-4">Better Business Bureau</h2>
              <p>
                The Better Business Bureau (BBB) has been the gold standard for
                consumers to check a company's credibility since 1912.
              </p>
              <p>
                <strong>
                  Our A+ grade represents the BBB’s strong degree of confidence
                  that MDH Construction is operating in a trustworthy manner and
                  will make a good faith effort to resolve any customer concerns
                  filed with the BBB.
                </strong>
              </p>

              <Row className="mt-5 mb-3 text-center drop-shadow">
                <Col xs={12} md={4} className="mb-3 mb-lg-0">
                  <ImgBBBAcc />
                </Col>
                <Col xs={12} md={4} className="mb-3 mb-lg-0">
                  <ImgBBBRating />
                </Col>
                <Col xs={12} md={4} className="mb-3 mb-lg-0">
                  <ImgBBBReviews />
                </Col>
              </Row>
            </Container>
          </Container>
          <Container fluid className="bg-dark mx-0 px-0 order-2 order-lg-2">
            <Container className="py-5 px-lg-5">
              <h2 className="text-primary mb-4">HomeAdvisor</h2>
              <p className="text-white">
                HomeAdvisor is an online marketplace with the goal of connecting
                homeowners with local service professionals. Each company is
                prescreened before they can be selected to complete home
                improvement, maintenance and remodeling projects.
              </p>
              <p className="text-white">
                <strong>
                  MDH Construction is proud to display our badges that clearly
                  demonstrate our reliability and trustworthiness as a company.
                </strong>
              </p>
              <Row className="mt-5 mb-3 mx-auto text-center drop-shadow">
                <Col xs={6} md={3}>
                  <ImgHomeAdvisorTop />
                </Col>
                <Col xs={6} md={3}>
                  <ImgHomeAdvisorElite />
                </Col>
                <Col xs={6} md={3}>
                  <ImgHomeAdvisorScreened />
                </Col>
                <Col xs={6} md={3}>
                  <ImgHomeAdvisorFive />
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>

        <Container fluid className="bg-light mx-0 px-0 order-1 order-lg-1">
          <Container className="py-5 px-lg-5">
            <h2 className="text-primary mb-4">Angie's List</h2>
            <p>
              Since 1995, Angie's List has been an online directory allowing
              consumers to read and publish reviews of local businesses and
              contractors.
            </p>
            <p>
              <strong>
                MDH Construction has been an A-rated company with Angie's List
                since May 2014 based on our customer reviews and satisfactions.
              </strong>
            </p>
            <Row className="mt-5 mb-3 mx-auto text-center drop-shadow">
              <Col xs={12} md={4} className="mb-3 mx-auto">
                <ImgAngiesList />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </Layout>
  );
};

export default RatingsPage;
