import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Button from '../Button/Button';
import ImgServicesFullConstruction from '../Images/Pages/Services/img-services-full-construction';
import ImgServicesNewAdditions from '../Images/Pages/Services/img-services-new-additions';
import ImgServicesRenovations from '../Images/Pages/Services/img-services-renovations';
import ImgServicesGutters from '../Images/Pages/Services/img-services-gutters';
import ImgServicesInsulation from '../Images/Pages/Services/img-services-insulation';
import ImgServicesWindows from '../Images/Pages/Services/img-services-windows';
import ImgServicesRoofing from '../Images/Pages/Services/img-services-roofing';
import ImgServicesDecks from '../Images/Pages/Services/img-services-decks';
import ImgServicesPainting from '../Images/Pages/Services/img-services-painting';

const Services__Body = ({ className }) => {
  return (
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

        <Row className="py-5 px-3 px-lg-0">
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
  );
};

export default Services__Body;
