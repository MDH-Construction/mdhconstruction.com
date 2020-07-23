import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Button from '../Button/Button';
import ImgExteriorServices from '../Images/img-exterior-services';
import ImgInteriorServices from '../Images/img-interior-services';
import ImgInsulationServices from '../Images/img-insulation-services';

const Services__Body = ({ className }) => {
  return (
    <section id="about-page">
      <Container>
        <Container className="text-container">
          <p className="lead">
            MDH Construction has the knowledge and expertise to handle almost
            any home improvement, remodeling, or commercial construction
            project.
          </p>
          <p className="lead">
            Whether the job is large or small, we take great pride in our
            craftsmanship and want to help you meet your goals.
          </p>
          <p className="lead">
            Our highly skilled professionals can assist you with a broad range
            of services, including:
          </p>
        </Container>

        <Row className="py-5">
          <Col className="bg-white mx-3 px-0 drop-shadow rounded">
            <h2 className="bg-secondary text-white py-3 mb-0">
              Full
              <br />
              Construction
            </h2>
            <Container className="pt-0 pb-3 px-0">
              <ImgExteriorServices />
              <Container className="container-text px-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  nostrum libero repudiandae quia voluptatibus rem asperiores
                  doloribus, quam.
                </p>
              </Container>
              <Container className="text-center mb-4">
                <Button
                  btnlink="/services"
                  btnlabel="See Our Full Construction Services"
                  btn={true}
                />
              </Container>
            </Container>
          </Col>
          <Col className="bg-white mx-3 px-0 drop-shadow rounded">
            <h2 className="bg-secondary text-white py-3 mb-0">
              New
              <br />
              Additions
            </h2>
            <Container className="pt-0 pb-3 px-0">
              <ImgExteriorServices />
              <Container className="container-text px-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  nostrum libero repudiandae quia voluptatibus rem asperiores
                  doloribus, quam.
                </p>
              </Container>
              <Container className="text-center mb-4">
                <Button
                  btnlink="/services"
                  btnlabel="See Our New Additions Services"
                  btn={true}
                />
              </Container>
            </Container>
          </Col>
          <Col className="bg-white mx-3 px-0 drop-shadow rounded">
            <h2 className="bg-secondary text-white py-3 mb-0">
              Renovations
              <br />& Remodeling
            </h2>
            <Container className="pt-0 pb-3 px-0">
              <ImgInteriorServices />
              <Container className="container-text px-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  nostrum libero repudiandae quia voluptatibus rem asperiores
                  doloribus, quam.
                </p>
              </Container>
              <Container className="text-center mb-4">
                <Button
                  btnlink="/services"
                  btnlabel="See Our Renovation & Remodeling Services"
                  btn={true}
                />
              </Container>
            </Container>
          </Col>
        </Row>

        <Row className="py-5">
          <Col className="bg-white mx-3 px-0 drop-shadow rounded">
            <h2 className="bg-secondary text-white py-3 mb-0">
              Gutters &<br />
              Downspouts
            </h2>
            <Container className="pt-0 pb-3 px-0">
              <ImgExteriorServices />
              <Container className="container-text px-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  nostrum libero repudiandae quia voluptatibus rem asperiores
                  doloribus, quam.
                </p>
              </Container>
              <Container className="text-center mb-4">
                <Button
                  btnlink="/services"
                  btnlabel="See Our Gutter & Downspout Services"
                  btn={true}
                />
              </Container>
            </Container>
          </Col>
          <Col className="bg-white mx-3 px-0 drop-shadow rounded">
            <h2 className="bg-secondary text-white py-3 mb-0">
              Insulation &<br />
              Weatherization
            </h2>
            <Container className="pt-0 pb-3 px-0">
              <ImgInsulationServices />
              <Container className="container-text px-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  nostrum libero repudiandae quia voluptatibus rem asperiores
                  doloribus, quam.
                </p>
              </Container>
              <Container className="text-center mb-4">
                <Button
                  btnlink="/services"
                  btnlabel="See Our Insulation & Weatherization Services"
                  btn={true}
                />
              </Container>
            </Container>
          </Col>
          <Col className="bg-white mx-3 px-0 drop-shadow rounded">
            <h2 className="bg-secondary text-white py-3 mb-0">
              Windows
              <br />& Doors
            </h2>
            <Container className="pt-0 pb-3 px-0">
              <ImgExteriorServices />
              <Container className="container-text px-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  nostrum libero repudiandae quia voluptatibus rem asperiores
                  doloribus, quam.
                </p>
              </Container>
              <Container className="text-center mb-4">
                <Button
                  btnlink="/services"
                  btnlabel="See Our Window & Door Services"
                  btn={true}
                />
              </Container>
            </Container>
          </Col>
        </Row>

        <Row className="py-5">
          <Col className="bg-white mx-3 px-0 drop-shadow rounded">
            <h2 className="bg-secondary text-white py-3 mb-0">
              Roofing
              <br />& Siding
            </h2>
            <Container className="pt-0 pb-3 px-0">
              <ImgExteriorServices />
              <Container className="container-text px-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  nostrum libero repudiandae quia voluptatibus rem asperiores
                  doloribus, quam.
                </p>
              </Container>
              <Container className="text-center mb-4">
                <Button
                  btnlink="/services"
                  btnlabel="See Our Roofing & Siding Services"
                  btn={true}
                />
              </Container>
            </Container>
          </Col>
          <Col className="bg-white mx-3 px-0 drop-shadow rounded">
            <h2 className="bg-secondary text-white py-3 mb-0">
              Outdoor
              <br />
              Living
            </h2>
            <Container className="pt-0 pb-3 px-0">
              <ImgExteriorServices />
              <Container className="container-text px-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  nostrum libero repudiandae quia voluptatibus rem asperiores
                  doloribus, quam.
                </p>
              </Container>
              <Container className="text-center mb-4">
                <Button
                  btnlink="/services"
                  btnlabel="See Our Outdoor Living Services"
                  btn={true}
                />
              </Container>
            </Container>
          </Col>
          <Col className="bg-white mx-3 px-0 drop-shadow rounded">
            <h2 className="bg-secondary text-white py-3 mb-0">
              Other
              <br />
              Services
            </h2>
            <Container className="pt-0 pb-3 px-0">
              <ImgInteriorServices />
              <Container className="container-text px-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  nostrum libero repudiandae quia voluptatibus rem asperiores
                  doloribus, quam.
                </p>
              </Container>
              <Container className="text-center mb-4">
                <Button
                  btnlink="/services"
                  btnlabel="See Our Other Home & Business Services"
                  btn={true}
                />
              </Container>
            </Container>
          </Col>
        </Row>

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
