import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/common/SEO';
import Header from '../components/layouts/headers/Header';
import Banner from '../components/layouts/bodies/Banner';
import AboutNav from '../components/common/AboutNav';
import ImgCustomerCare from '../components/images/pages/about/whoWeAre/img-customer-care';
import ImgCraftsmanship from '../components/images/pages/about/whoWeAre/img-craftsmanship';

const WhoWeArePage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query WhoWeArePageQ {
      masthead: file(
        relativePath: {
          eq: "images/pages/about/who-we-are/who-we-are-general-contractor-mdh-construction-plymouth-massachusetts.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bannerImg: file(
        relativePath: {
          eq: "images/pages/home/home-mdh-construction-truck-general-contractor-plymouth-massachusetts.jpg"
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
  const imageDataBodyBanner = data.bannerImg.childImageSharp.fluid;

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout>
      <SEO
        title="A Family Owned Construction Business Located in Plymouth, MA"
        description="Since 2014, MDH Construction has been a full-service, licensed & insured, general contractor & construction company in Plymouth, MA with 5-star customer reviews"
        canonicalLink="https://www.mdhconstruction.com/who-we-are/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Who We Are"
        textSecondary="A Reliable, Family Owned And Operated Business"
        alt="A construction worker overlooking a job site, employed by MDH Construction in Plymouth, MA."
      />
      <Breadcrumb crumbs={crumbs} crumbSeparator="/" crumbLabel="Who We Are" />
      <Banner
        Tag="div"
        className=""
        fluid={imageDataBodyBanner}
        alt="The MDH Construction truck parked in a Plymouth, MA driveway for home improvement services."
        textLeftOne="Your local"
        textLeftTwo="construction company"
        textRight={
          <p>
            Since 2014, MDH Construction has been a{' '}
            <strong>
              full-service,{' '}
              <Link className="font-weight-normal" to="/what-we-do/">
                licensed and insured
              </Link>
              , general contractor and construction company
            </strong>{' '}
            located in Plymouth, Massachusetts.
            <br />
            <br />
            We are a <strong>family owned and operated business</strong> with a
            wide range of <Link to="/services/">construction services</Link>{' '}
            including of home improvement, remodeling, and commercial
            construction.
            <br />
            <br />
            Our service area covers much of eastern Massachusetts, including the{' '}
            <strong>Boston area, South Shore, and Cape Cod</strong>.
          </p>
        }
      />
      <section className="section-container" id="about-page">
        <Container>
          <AboutNav />
          <h2 className="display-4">Our Values</h2>
          <Row className="my-5 py-5">
            <Col xs={12} lg={6} className="order-1 order-lg-1">
              <Container className="mb-5 mb-lg-0">
                <ImgCraftsmanship className="solid-shadow-secondary-top-left" />
              </Container>
            </Col>
            <Col xs={12} lg={6} className="order-2 order-lg-1">
              <Container>
                <h3 className="mb-3">Superior Craftsmanship</h3>
                <hr className="divider mb-4" />
                <p className="mt-4 mt-lg-0">
                  <strong>
                    At MDH Construction we like to be known for the excellence
                    of our work.
                  </strong>
                </p>
                <p>
                  In business you are only as good as the people you employ,
                  which is why we thoughtfully select expert tradesmen who have
                  an eye towards quality over quantity.
                </p>
                <p>
                  We also support our <Link to="/employment/">employees</Link>{' '}
                  through our continuing education program, which allows them to
                  hone their trade, learn about new products and technologies,
                  and stay up-to-date on local building codes.
                </p>
              </Container>
            </Col>
          </Row>
          <Row className="my-5 py-5">
            <Col xs={12} lg={6} className="order-1 order-lg-2">
              <Container className="mb-5 mb-lg-0">
                <ImgCustomerCare className="solid-shadow-secondary-bottom-right" />
              </Container>
            </Col>
            <Col xs={12} lg={6} className="order-2 order-lg-1">
              <Container>
                <h3 className="mb-3">Unmatched Customer Care</h3>
                <hr className="divider mb-4" />
                <p className="mt-4 mt-lg-0">
                  <strong>
                    We strongly believe in giving each of our clients the
                    attention and respect they deserve.
                  </strong>
                </p>
                <p className="mt-4 mt-lg-0">
                  We run a hands-on operation that affords greater
                  accountability and more thorough attention to detail.
                </p>
                <p className="mt-4 mt-lg-0">
                  Because of these values, we are able to provide our clients
                  with finished products that surpasses their expectations and
                  an experience that is hard to find anywhere else.
                </p>
                <p className="mt-4 mt-lg-0">
                  If you have home improvement, remodeling, or commercial
                  construction needs, please don't hesitate to{' '}
                  <Link to="/contact-us/">contact us</Link> for a free estimate.
                </p>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default WhoWeArePage;
