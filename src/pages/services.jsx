import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Col, Container, Row } from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/common/SEO';
import Header from '../components/layouts/headers/Header';
import Banner from '../components/layouts/bodies/Banner';
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
        alt="A hammer, nailes, ruler, and blueprints laying on a wooden table."
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
              <Container className="bg-white drop-shadow rounded mx-0 px-0">
                <h2 className="bg-secondary text-white py-3 mb-0">
                  Full <br />
                  Construction
                </h2>
                <Container className="p-0">
                  <ImgServicesFullConstruction />
                  <Container className="container-text px-3">
                    <ul className="check pl-4">
                      <li>Residential homes</li>
                      <li>Commercial buildings</li>
                      <li>Detached garages</li>
                    </ul>
                  </Container>
                </Container>
              </Container>
            </Col>

            <Col xs={12} lg={4} className="mx-0 px-3 mb-5 mb-lg-0">
              <Container className="bg-white drop-shadow rounded mx-0 px-0">
                <h2 className="bg-secondary text-white py-3 mb-0">
                  New <br />
                  Additions
                </h2>
                <Container className="p-0">
                  <ImgServicesNewAdditions />
                  <Container className="container-text px-3">
                    <ul className="check pl-4">
                      <li>Rooms, living spaces, attics</li>
                      <li>Additional floors</li>
                      <li>Attached garages</li>
                    </ul>
                  </Container>
                </Container>
              </Container>
            </Col>

            <Col xs={12} lg={4} className="mx-0 px-3">
              <Container className="bg-white drop-shadow rounded mx-0 px-0">
                <h2 className="bg-secondary text-white py-3 mb-0">
                  Renovations <br />& Remodeling
                </h2>
                <Container className="p-0">
                  <ImgServicesRenovations />
                  <Container className="container-text px-3">
                    <ul className="check pl-4">
                      <li>Large interior renovations</li>
                      <li>Kitchens, bathrooms, basements</li>
                      <li>Custom trim & molding</li>
                    </ul>
                  </Container>
                </Container>
              </Container>
            </Col>
          </Row>

          <Row className="pt-lg-5 px-3 px-lg-0 pb-lg-5 pt-0">
            <Col xs={12} lg={4} className="mx-0 px-3 mb-5 mb-lg-0">
              <Container className="bg-white drop-shadow rounded mx-0 px-0">
                <h2 className="bg-secondary text-white py-3 mb-0">
                  Gutters &<br /> Downspouts
                </h2>
                <Container className="p-0">
                  <ImgServicesGutters />
                  <Container className="container-text px-3">
                    <ul className="check pl-4">
                      <li>Gutter installation, cleaning, repair</li>
                      <li>Seamless gutter installation</li>
                      <li>Downspout installation</li>
                    </ul>
                  </Container>
                </Container>
              </Container>
            </Col>

            <Col xs={12} lg={4} className="mx-0 px-3 mb-5 mb-lg-0">
              <Container className="bg-white drop-shadow rounded mx-0 px-0">
                <h2 className="bg-secondary text-white py-3 mb-0">
                  Insulation &<br /> Weatherization
                </h2>
                <Container className="p-0">
                  <ImgServicesInsulation />
                  <Container className="container-text px-3">
                    <ul className="check pl-4">
                      <li>Mass Save insulation program</li>
                      <li>Batt & rolled, reflective, blown-in</li>
                      <li>Air sealing, weather stripping</li>
                      <li>Thermal imaging, blower door diagnostics</li>
                    </ul>
                  </Container>
                </Container>
              </Container>
            </Col>

            <Col xs={12} lg={4} className="mx-0 px-3 mb-5 mb-lg-0">
              <Container className="bg-white drop-shadow rounded mx-0 px-0">
                <h2 className="bg-secondary text-white py-3 mb-0">
                  Windows <br />& Doors
                </h2>
                <Container className="p-0">
                  <ImgServicesWindows />
                  <Container className="container-text px-3">
                    <ul className="check pl-4">
                      <li>New window installation</li>
                      <li>Replacement window installation</li>
                      <li>Interior door installation</li>
                      <li>Exterior door installation</li>
                    </ul>
                  </Container>
                </Container>
              </Container>
            </Col>
          </Row>

          <Row className="pt-lg-5 px-3 px-lg-0 pb-lg-5 pt-0">
            <Col xs={12} lg={4} className="mx-0 px-3 mb-5 mb-lg-0">
              <Container className="bg-white drop-shadow rounded mx-0 px-0">
                <h2 className="bg-secondary text-white py-3 mb-0">
                  Roofing <br />& Siding
                </h2>
                <Container className="p-0">
                  <ImgServicesRoofing />
                  <Container className="container-text px-3">
                    <ul className="check pl-4">
                      <li>Roof installation, replacement, repair</li>
                      <li>Asphalt & wood shingles</li>
                      <li>Siding installation, replacement, repair</li>
                      <li>Vinyl, wood, fiber-cement siding</li>
                    </ul>
                  </Container>
                </Container>
              </Container>
            </Col>

            <Col xs={12} lg={4} className="mx-0 px-3 mb-5 mb-lg-0">
              <Container className="bg-white drop-shadow rounded mx-0 px-0">
                <h2 className="bg-secondary text-white py-3 mb-0">
                  Outdoor <br />
                  Living
                </h2>
                <Container className="p-0">
                  <ImgServicesDecks />
                  <Container className="container-text px-3">
                    <ul className="check pl-4">
                      <li>Deck construction</li>
                      <li>Porch construction</li>
                      <li>Fencing installation</li>
                      <li>Retainer wall installation</li>
                    </ul>
                  </Container>
                </Container>
              </Container>
            </Col>

            <Col xs={12} lg={4} className="mx-0 px-3 mb-5 mb-lg-0">
              <Container className="bg-white drop-shadow rounded mx-0 px-0">
                <h2 className="bg-secondary text-white py-3 mb-0">
                  Other <br />
                  Services
                </h2>
                <Container className="p-0">
                  <ImgServicesPainting />
                  <Container className="container-text px-3">
                    <ul className="check pl-4">
                      <li>Construction management</li>
                      <li>Interior and exterior painting</li>
                      <li>Debris removal, clean out, haul away</li>
                      <li>Handyman services</li>
                    </ul>
                  </Container>
                </Container>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default ServicesPage;
