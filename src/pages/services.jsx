import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Col, Container, Row } from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/common/SEO';
import Header from '../components/layouts/headers/Header';
import Banner from '../components/layouts/bodies/Banner';
import CardImage from '../components/common/cards/CardImage';
import ImgServicesFullConstruction from '../components/images/pages/services/img-services-full-construction';
import ImgServicesNewAdditions from '../components/images/pages/services/img-services-new-additions';
import ImgServicesRenovations from '../components/images/pages/services/img-services-renovations';
import ImgServicesGutters from '../components/images/pages/services/img-services-gutters';
import ImgServicesInsulation from '../components/images/pages/services/img-services-insulation';
import ImgServicesWindows from '../components/images/pages/services/img-services-windows';
import ImgServicesRoofing from '../components/images/pages/services/img-services-roofing';
import ImgServicesDecks from '../components/images/pages/services/img-services-decks';
import ImgServicesPainting from '../components/images/pages/services/img-services-painting';

const ServicesPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query ServicesPageQ {
      masthead: file(
        relativePath: {
          eq: "images/construction-services-roofing-siding-mdh-construction-plymouth-ma.jpg"
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
          eq: "images/pages/services/services-tools-general-contractor-mdh-construction-plymouth-massachusetts.jpg"
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
        title="Decks, Gutters, Insulation, Remodel & More | Plymouth, MA"
        description="MDH Construction has the knowledge & expertise to handle any home improvement, remodeling, or commercial construction project. Call 774-269-6002 for free quotes"
        canonicalLink="https://www.mdhconstruction.com/services/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Construction Services"
        textSecondary="Gutters, Insulation, Decks, Windows, Doors & More"
        alt="An MDH Construction job site in Plymouth, MA with crews working on a roof repair."
      />
      <Breadcrumb crumbs={crumbs} crumbSeparator="/" crumbLabel="Services" />
      <Banner
        Tag="div"
        className=""
        fluid={imageDataBodyBanner}
        alt="A hammer, nails, ruler, and blueprints laying on a wooden table."
        textLeftOne="Got any questions?"
        textLeftTwo="Give us a call!"
        textRight={
          <p>
            MDH Construction has the knowledge and expertise to handle any{' '}
            <strong>
              home improvement, remodeling, or commercial construction project
            </strong>
            .
            <br />
            <br />
            Whether the job is large or small, we take great pride in our
            craftsmanship and want to help you meet your goals.
            <br />
            <br />
            Our{' '}
            <strong>
              <Link to="/who-we-are/" className="font-weight-normal">
                highly skilled professionals
              </Link>{' '}
              can assist you
            </strong>{' '}
            with a broad range of services, including:
          </p>
        }
      />
      <section className="section-container" id="services-page">
        <Container>
          <Row className="py-5 px-3 px-lg-0">
            <Col xs={12} lg={4} className="mx-0 px-3 mb-5 mb-lg-0">
              <CardImage
                title={
                  <>
                    Full <br />
                    Construction
                  </>
                }
                list={
                  <>
                    <li>Residential homes</li>
                    <li>Commercial buildings</li>
                    <li>Detached garages</li>
                  </>
                }
                anchor="See Full Construction Services"
                link="#"
              >
                <ImgServicesFullConstruction />
              </CardImage>
            </Col>

            <Col xs={12} lg={4} className="mx-0 px-3 mb-5 mb-lg-0">
              <CardImage
                title={
                  <>
                    New <br />
                    Additions
                  </>
                }
                list={
                  <>
                    <li>Rooms, living spaces, attics</li>
                    <li>Additional floors</li>
                    <li>Attached garages</li>
                  </>
                }
                anchor="See New Addition Services"
                link="#"
              >
                <ImgServicesNewAdditions />
              </CardImage>
            </Col>

            <Col xs={12} lg={4} className="mx-0 px-3">
              <CardImage
                title={
                  <>
                    Renovations <br />& Remodeling
                  </>
                }
                list={
                  <>
                    <li>Large interior renovations</li>
                    <li>Kitchens, bathrooms, basements</li>
                    <li>Custom trim & molding</li>
                  </>
                }
                anchor="See Remodeling Services"
                link="#"
              >
                <ImgServicesRenovations />
              </CardImage>
            </Col>
          </Row>

          <Row className="pt-lg-5 px-3 px-lg-0 pb-lg-5 pt-0">
            <Col xs={12} lg={4} className="mx-0 px-3 mb-5 mb-lg-0">
              <CardImage
                title={
                  <>
                    Gutters &<br /> Downspouts
                  </>
                }
                list={
                  <>
                    <li>Gutter installation</li>
                    <li>Gutter cleaning</li>
                    <li>Gutter repair, replacement</li>
                    <li>Seamless gutter installation</li>
                    <li>Downspout installation</li>
                  </>
                }
                anchor="See Gutter Services"
                link="/gutters/"
              >
                <ImgServicesGutters />
              </CardImage>
            </Col>

            <Col xs={12} lg={4} className="mx-0 px-3 mb-5 mb-lg-0">
              <CardImage
                title={
                  <>
                    Insulation &<br /> Weatherization
                  </>
                }
                list={
                  <>
                    <li>Mass Save insulation program</li>
                    <li>Batt & rolled, reflective, blown-in</li>
                    <li>Air sealing, weather stripping</li>
                    <li>Thermal imaging, blower door diagnostics</li>
                  </>
                }
                anchor="See Insulation Services"
                link="#"
              >
                <ImgServicesInsulation />
              </CardImage>
            </Col>

            <Col xs={12} lg={4} className="mx-0 px-3 mb-5 mb-lg-0">
              <CardImage
                title={
                  <>
                    Windows <br />& Doors
                  </>
                }
                list={
                  <>
                    <li>New window installation</li>
                    <li>Replacement window installation</li>
                    <li>Interior door installation</li>
                    <li>Exterior door installation</li>
                    <li>Window & door repair</li>
                  </>
                }
                anchor="See Window & Door Services"
                link="#"
              >
                <ImgServicesWindows />
              </CardImage>
            </Col>
          </Row>

          <Row className="pt-lg-5 px-3 px-lg-0 pb-lg-5 pt-0">
            <Col xs={12} lg={4} className="mx-0 px-3 mb-5 mb-lg-0">
              <CardImage
                title={
                  <>
                    Roofing <br />& Siding
                  </>
                }
                list={
                  <>
                    <li>Roof installation, replacement, repair</li>
                    <li>Asphalt & wood shingles</li>
                    <li>Siding installation, replacement, repair</li>
                    <li>Vinyl, wood, fiber-cement siding</li>
                  </>
                }
                anchor="See Roofing & Siding Services"
                link="#"
              >
                <ImgServicesRoofing />
              </CardImage>
            </Col>

            <Col xs={12} lg={4} className="mx-0 px-3 mb-5 mb-lg-0">
              <CardImage
                title={
                  <>
                    Outdoor <br />
                    Living
                  </>
                }
                list={
                  <>
                    <li>Deck construction</li>
                    <li>Porch construction</li>
                    <li>Fencing installation</li>
                    <li>Retainer wall installation</li>
                  </>
                }
                anchor="See Outdoor Living Services"
                link="#"
              >
                <ImgServicesDecks />
              </CardImage>
            </Col>

            <Col xs={12} lg={4} className="mx-0 px-3 mb-5 mb-lg-0">
              <CardImage
                title={
                  <>
                    Other <br />
                    Services
                  </>
                }
                list={
                  <>
                    <li>Construction management</li>
                    <li>Interior and exterior painting</li>
                    <li>Debris removal, clean out, haul away</li>
                    <li>Handyman services</li>
                  </>
                }
                anchor="See Our Other Services"
                link="#"
              >
                <ImgServicesPainting />
              </CardImage>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default ServicesPage;
