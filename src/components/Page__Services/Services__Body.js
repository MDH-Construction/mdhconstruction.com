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
      <Container fluid className="px-0">
        <Container className="">
          <Row className="py-5 px-3 px-lg-0">
            <Col
              xs={12}
              md={6}
              lg={4}
              className="bg-white mx-0 mx-lg-3 px-0 drop-shadow rounded mb-5 mb-lg-0"
            >
              <h2 className="bg-secondary text-white py-3 mb-0">
                Full
                <br />
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
                {/* <Container className="text-center mb-4">
                  <Button
                    btnlink="/services"
                    btnlabel="See Our Full Construction Services"
                    btn={true}
                  />
                </Container> */}
              </Container>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={4}
              className="bg-white mx-0 mx-lg-3 px-0 drop-shadow rounded mb-5 mb-lg-0"
            >
              <h2 className="bg-secondary text-white py-3 mb-0">
                New
                <br />
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
                {/* <Container className="text-center mb-4">
                  <Button
                    btnlink="/services"
                    btnlabel="See Our New Additions Services"
                    btn={true}
                  />
                </Container> */}
              </Container>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={4}
              className="bg-white mx-0 mx-lg-3 px-0 drop-shadow rounded"
            >
              <h2 className="bg-secondary text-white py-3 mb-0">
                Renovations
                <br />& Remodeling
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
                {/* <Container className="text-center mb-4">
                  <Button
                    btnlink="/services"
                    btnlabel="See Our Renovation & Remodeling Services"
                    btn={true}
                  />
                </Container> */}
              </Container>
            </Col>
          </Row>

          <Row className="pt-lg-5 px-3 px-lg-0 pb-lg-5 pt-0">
            <Col
              xs={12}
              md={6}
              lg={4}
              className="bg-white mx-0 mx-lg-3 px-0 drop-shadow rounded mb-5 mb-lg-0"
            >
              <h2 className="bg-secondary text-white py-3 mb-0">
                Gutters &<br />
                Downspouts
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
                {/* <Container className="text-center mb-4">
                  <Button
                    btnlink="/services"
                    btnlabel="See Our Gutter & Downspout Services"
                    btn={true}
                  />
                </Container> */}
              </Container>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={4}
              className="bg-white mx-0 mx-lg-3 px-0 drop-shadow rounded mb-5 mb-lg-0"
            >
              <h2 className="bg-secondary text-white py-3 mb-0">
                Insulation &<br />
                Weatherization
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
                {/* <Container className="text-center mb-4">
                  <Button
                    btnlink="/services"
                    btnlabel="See Our Insulation & Weatherization Services"
                    btn={true}
                  />
                </Container> */}
              </Container>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={4}
              className="bg-white mx-0 mx-lg-3 px-0 drop-shadow rounded"
            >
              <h2 className="bg-secondary text-white py-3 mb-0">
                Windows
                <br />& Doors
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
                {/* <Container className="text-center mb-4">
                  <Button
                    btnlink="/services"
                    btnlabel="See Our Window & Door Services"
                    btn={true}
                  />
                </Container> */}
              </Container>
            </Col>
          </Row>

          <Row className="py-5 px-3 px-lg-0">
            <Col
              xs={12}
              md={6}
              lg={4}
              className="bg-white mx-0 mx-lg-3 px-0 drop-shadow rounded mb-5 mb-lg-0"
            >
              <h2 className="bg-secondary text-white py-3 mb-0">
                Roofing
                <br />& Siding
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
                {/* <Container className="text-center mb-4">
                  <Button
                    btnlink="/services"
                    btnlabel="See Our Roofing & Siding Services"
                    btn={true}
                  />
                </Container> */}
              </Container>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={4}
              className="bg-white mx-0 mx-lg-3 px-0 drop-shadow rounded mb-5 mb-lg-0"
            >
              <h2 className="bg-secondary text-white py-3 mb-0">
                Outdoor
                <br />
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
                {/* <Container className="text-center mb-4">
                  <Button
                    btnlink="/services"
                    btnlabel="See Our Outdoor Living Services"
                    btn={true}
                  />
                </Container> */}
              </Container>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={4}
              className="bg-white mx-0 mx-lg-3 px-0 drop-shadow rounded"
            >
              <h2 className="bg-secondary text-white py-3 mb-0">
                Other
                <br />
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
                {/* <Container className="text-center mb-4">
                  <Button
                    btnlink="/services"
                    btnlabel="See Our Other Home & Business Services"
                    btn={true}
                  />
                </Container> */}
              </Container>
            </Col>
          </Row>
        </Container>
        {/* <h2>Renovations and Remodeling</h2>
        <ul>
          <li>Large renovations</li>
          <li>Kitchen remodeling</li>
          <li>Bathroom remodeling</li>
          <li>Basement remodeling and finishing</li>
          <li>Custom trim and molding</li>
        </ul>

        <h2>Gutters And Downspouts</h2>

        <li>Seamless gutter installation</li>
        <li>Downspout installation</li>
        <li>Gutter cleaning</li>
        <li>Gutter Repair</li>

        <h2>Windows and Doors</h2>

        <li>New window installation</li>
        <li>Replacement window installation</li>
        <li>Interior door installation</li>
        <li>Exterior door installation</li>

        <h2>Flooring and Tile</h2>

        <li>Wood flooring installation</li>
        <li>Laminate flooring installation</li>
        <li>Stone flooring installation</li>
        <li>Ceramic and natural stone tile installation</li>

        <h2>Outdoor Living</h2>

        <li>Deck and patio construction</li>
        <li>Porch construction</li>
        <li>Fencing installation</li>
        <li>Retaining wall installation</li>

        <h2>Weatherization and Insulation</h2>

        <li>Air sealing</li>
        <li>Weather stripping</li>
        <li>Thermal imaging</li>
        <li>Blower door diagnostics</li>
        <li>Batt and rolled insulation installation</li>
        <li>Reflective insulation installation</li>
        <li>Blown-in insulation installation</li>

        <h2>Roofing and Siding</h2>

        <li>Vinyl siding installation</li>
        <li>Wood siding installation</li>
        <li>Fiber-cement siding installation</li>
        <li>Asphalt shingle roofing installation</li>
        <li>Wood shingle roofing installation</li>

        <h2>Other Services</h2>

        <li>Construction management</li>
        <li>Interior and exterior painting</li>
        <li>Handyman services</li>
        <li>Debris removal, clean out, haul away</li> */}
      </Container>
    </section>
  );
};

export default Services__Body;
