import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import ImgMdhTruckMenu from '../Images/Nav/img-mdh-truck-menu';
import ImgLicensedMenu from '../Images/Nav/img-licensed-menu';
import ImgTopRatedMenu from '../Images/Nav/img-top-rated-menu';
import ImgServiceAreaMenu from '../Images/Nav/img-service-area-menu';

const ServiceArea__Body = ({ className }) => {
  return (
    <section id="about-page">
      <Container>
        <Row className="about-dropdown about-dropdown-menu px-2 px-lg-0 py-5 mt-0 mb-5 rounded drop-shadow text-center">
          <Col lg={3}>
            <Link to="/who-we-are">
              <div className="text-center p-3 bg-dark-gray">
                <ImgMdhTruckMenu className="border rounded" />
              </div>
            </Link>
            <Link
              className="nav-link px-3 py-2 text-uppercase text-center bg-primary text-white font-weight-bold"
              to="/who-we-are"
            >
              Who <br />
              We Are
            </Link>
          </Col>
          <Col lg={3}>
            <Link to="/what-we-do">
              <div className="text-center p-3 bg-dark-gray">
                <ImgLicensedMenu className="border rounded" />
              </div>
            </Link>
            <Link
              className="nav-link px-3 py-2 text-uppercase text-center bg-primary text-white font-weight-bold"
              to="/what-we-do"
            >
              Licensing <br />
              And Insurance
            </Link>
          </Col>
          <Col lg={3}>
            <Link to="/ratings-and-memberships">
              <div className="text-center p-3 bg-dark-gray">
                <ImgTopRatedMenu className="border rounded" />
              </div>
            </Link>
            <Link
              className="nav-link px-3 py-2 text-uppercase text-center bg-primary text-white font-weight-bold"
              to="/ratings-and-memberships"
            >
              Ratings And <br />
              Memberships
            </Link>
          </Col>
          <Col lg={3}>
            <Link to="/service-area">
              <div className="text-center p-3 bg-dark-gray">
                <ImgServiceAreaMenu className="border rounded" />
              </div>
            </Link>
            <Link
              className="nav-link px-3 py-2 text-uppercase text-center bg-primary text-white font-weight-bold"
              to="/service-area"
            >
              Service <br />
              Area
            </Link>
          </Col>
        </Row>
        <Container className="mt-4 my-lg-5 p-3 justify-content-center align-items-center rounded">
          <h2 className="display-4 pb-5">Massachusetts Counties We Service</h2>
          <Accordion className="drop-shadow">
            <Card className="accordion-animation">
              <Accordion.Toggle
                className="d-flex align-content-center"
                as={Card.Header}
                eventKey="0"
              >
                <span className="mr-3 mt-1">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <h3 className="accordionText mb-2 text-left font-weight-normal d-inline-block">
                  Plymouth County
                </h3>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="px-0 px-lg-3">
                  <Row>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3">
                        <li>Abington</li>
                        <li>Bridgewater</li>
                        <li>Brockton</li>
                        <li>Carver</li>
                        <li>Duxbury</li>
                        <li>East Bridgewater</li>
                        <li>Halifax</li>
                        <li>Hanover</li>
                        <li>Hanson</li>
                        <li>Hingham</li>
                      </ul>
                    </Col>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3">
                        <li>Hull</li>
                        <li>Kingston</li>
                        <li>Lakeville</li>
                        <li>Marion</li>
                        <li>Marshfield</li>
                        <li>Mattapoisett</li>
                        <li>Middleborough</li>
                        <li>Norwell</li>
                        <li>Pembroke</li>
                        <li>Plymouth</li>
                      </ul>
                    </Col>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3">
                        <li>Plympton</li>
                        <li>Rochester</li>
                        <li>Rockland</li>
                        <li>Scituate</li>
                        <li>Wareham</li>
                        <li>West Bridgewater</li>
                        <li>Whitman</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="accordion-animation">
              <Accordion.Toggle
                className="d-flex align-content-center"
                as={Card.Header}
                eventKey="1"
              >
                <span className="mr-3 mt-1">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <h3 className="accordionText mb-2 text-left font-weight-normal d-inline-block">
                  Bristol County
                </h3>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="px-0 px-lg-3">
                  <Row>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3">
                        <li>Acushnet</li>
                        <li>Attleboro</li>
                        <li>Berkley</li>
                        <li>Dartmouth</li>
                        <li>Dighton</li>
                        <li>Easton</li>
                        <li>Fairhaven</li>
                        <li>Fall River</li>
                        <li>Freetown</li>
                        <li>Mansfield</li>
                      </ul>
                    </Col>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3">
                        <li>New Bedford</li>
                        <li>North Attleborough</li>
                        <li>Norton</li>
                        <li>Raynham</li>
                        <li>Rehoboth</li>
                        <li>Seekonk</li>
                        <li>Somerset</li>
                        <li>Swansea</li>
                        <li>Taunton</li>
                        <li>Westport</li>
                      </ul>
                    </Col>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3"></ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="accordion-animation">
              <Accordion.Toggle
                className="d-flex align-content-center"
                as={Card.Header}
                eventKey="2"
              >
                <span className="mr-3 mt-1">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <h3 className="accordionText mb-2 text-left font-weight-normal d-inline-block">
                  Barnstable County
                </h3>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="px-0 px-lg-3">
                  <Row>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3">
                        <li>Barnstable</li>
                        <li>Bourne</li>
                        <li>Brewster</li>
                        <li>Chatham</li>
                        <li>Dennis</li>
                        <li>Eastham</li>
                        <li>Falmouth</li>
                        <li>Harwich</li>
                        <li>Mashpee</li>
                        <li>Orleans</li>
                      </ul>
                    </Col>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3">
                        <li>Provincetown</li>
                        <li>Sandwich</li>
                        <li>Truro</li>
                        <li>Wellfleet</li>
                        <li>Yarmouth</li>
                      </ul>
                    </Col>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3"></ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="accordion-animation">
              <Accordion.Toggle
                className="d-flex align-content-center"
                as={Card.Header}
                eventKey="3"
              >
                <span className="mr-3 mt-1">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <h3 className="accordionText mb-2 text-left font-weight-normal d-inline-block">
                  Norfolk County
                </h3>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="px-0 px-lg-3">
                  <Row>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3">
                        <li>Avon</li>
                        <li>Bellingham</li>
                        <li>Braintree</li>
                        <li>Brookline</li>
                        <li>Canton</li>
                        <li>Cohasset</li>
                        <li>Dedham</li>
                        <li>Dover</li>
                        <li>Foxborough</li>
                        <li>Franklin</li>
                      </ul>
                    </Col>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3">
                        <li>Holbrook</li>
                        <li>Medfield</li>
                        <li>Medway</li>
                        <li>Millis</li>
                        <li>Milton</li>
                        <li>Needham</li>
                        <li>Norfolk</li>
                        <li>Norwood</li>
                        <li>Plainville</li>
                        <li>Quincy</li>
                      </ul>
                    </Col>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3">
                        <li>Randolph</li>
                        <li>Sharon</li>
                        <li>Stoughton</li>
                        <li>Walpole</li>
                        <li>Wellesley</li>
                        <li>Westwood</li>
                        <li>Weymouth</li>
                        <li>Wrentham</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="accordion-animation">
              <Accordion.Toggle
                className="d-flex align-content-center"
                as={Card.Header}
                eventKey="4"
              >
                <span className="mr-3 mt-1">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <h3 className="accordionText mb-2 text-left font-weight-normal d-inline-block">
                  Suffolk County
                </h3>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="px-0 px-lg-3">
                  <Row>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3">
                        <li>Boston</li>
                        <li>Chelsea</li>
                        <li>Revere</li>
                        <li>Winthrop</li>
                      </ul>
                    </Col>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3"></ul>
                    </Col>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3"></ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="accordion-animation">
              <Accordion.Toggle
                className="d-flex align-content-center"
                as={Card.Header}
                eventKey="5"
              >
                <span className="mr-3 mt-1">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <h3 className="accordionText mb-2 text-left font-weight-normal d-inline-block">
                  Middlesex County
                </h3>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="px-0 px-lg-3">
                  <Row>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3">
                        <li>Acton</li>
                        <li>Arlington</li>
                        <li>Ashby</li>
                        <li>Ashland</li>
                        <li>Ayer</li>
                        <li>Bedford</li>
                        <li>Belmont</li>
                        <li>Billerica</li>
                        <li>Boxborough</li>
                        <li>Burlington</li>
                        <li>Cambridge</li>
                        <li>Carlisle</li>
                        <li>Chelmsford</li>
                        <li>Concord</li>
                        <li>Dracut</li>
                        <li>Dunstable</li>
                        <li>Everett</li>
                        <li>Framingham</li>
                        <li>Groton</li>
                        <li>Holliston</li>
                      </ul>
                    </Col>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3">
                        <li>Hopkinton</li>
                        <li>Hudson</li>
                        <li>Lexington</li>
                        <li>Lincoln</li>
                        <li>Littleton</li>
                        <li>Lowell</li>
                        <li>Malden</li>
                        <li>Marlborough</li>
                        <li>Maynard</li>
                        <li>Medford</li>
                        <li>Melrose</li>
                        <li>Natick</li>
                        <li>Newton</li>
                        <li>North Reading</li>
                        <li>Pepperell</li>
                        <li>Reading</li>
                        <li>Sherborn</li>
                        <li>Shirley</li>
                        <li>Somerville</li>
                        <li>Stoneham</li>
                      </ul>
                    </Col>
                    <Col xs={12} lg={4}>
                      <ul className="mb-2 mb-lg-3">
                        <li>Stow</li>
                        <li>Sudbury</li>
                        <li>Tewksbury</li>
                        <li>Townsend</li>
                        <li>Tyngsborough</li>
                        <li>Wakefield</li>
                        <li>Waltham</li>
                        <li>Watertown</li>
                        <li>Wayland</li>
                        <li>Westford</li>
                        <li>Weston</li>
                        <li>Wilmington</li>
                        <li>Winchester</li>
                        <li>Woburn</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </Container>
    </section>
  );
};

export default ServiceArea__Body;
