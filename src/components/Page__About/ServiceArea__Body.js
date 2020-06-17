import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import ImgTruck from '../ImageComps/img-truck';
import Button from '../Button/Button';

const ServiceArea__Body = ({ className }) => {
  return (
    <section id="about-page">
      {/* <Container> */}
      <Row>
        {/* <Col xs={12} md={6}>
          <ImgTruck />
        </Col> */}
        <Col className="py-3 py-lg-5" xs={12} md={12}>
          <Container>
            <p>
              Centrally located on the coast of Massachusetts, MDH Construction
              services the following Boston area, South Shore, and Cape Cod
              towns (including all local villages):
            </p>
            <Container className="bg-white border drop-shadow p-md-3 mt-5">
              <h3 className="bg-primary p-3 text-white">
                <span className="drop-shadow">Plymouth County</span>
              </h3>
              <Row>
                <Col xs={6} md={4}>
                  <ul>
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
                <Col xs={6} md={4}>
                  <ul>
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
                <Col xs={6} md={4}>
                  <ul>
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
            </Container>
            <Container className="bg-white border drop-shadow p-md-3 mt-5">
              <h3 className="bg-primary p-3 text-white">
                <span className="drop-shadow">Bristol County</span>
              </h3>
              <Row>
                <Col xs={6} md={4}>
                  <ul>
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
                <Col xs={6} md={4}>
                  <ul>
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
                <Col xs={6} md={4}>
                  <ul></ul>
                </Col>
              </Row>
            </Container>
            <Container className="bg-white border drop-shadow p-md-3 mt-5">
              <h3 className="bg-primary p-3 text-white">
                <span className="drop-shadow">Barnstable County</span>
              </h3>
              <Row>
                <Col xs={6} md={4}>
                  <ul>
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
                <Col xs={6} md={4}>
                  <ul>
                    <li>Provincetown</li>
                    <li>Sandwich</li>
                    <li>Truro</li>
                    <li>Wellfleet</li>
                    <li>Yarmouth</li>
                  </ul>
                </Col>
                <Col xs={6} md={4}>
                  <ul></ul>
                </Col>
              </Row>
            </Container>
            <Container className="bg-white border drop-shadow p-md-3 mt-5">
              <h3 className="bg-primary p-3 text-white">
                <span className="drop-shadow">Norfolk County</span>
              </h3>
              <Row>
                <Col xs={6} md={4}>
                  <ul>
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
                <Col xs={6} md={4}>
                  <ul>
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
                <Col xs={6} md={4}>
                  <ul>
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
            </Container>
            <Container className="bg-white border drop-shadow p-md-3 mt-5">
              <h3 className="bg-primary p-3 text-white">
                <span className="drop-shadow">Suffolk County</span>
              </h3>
              <Row>
                <Col xs={6} md={4}>
                  <ul>
                    <li>Boston</li>
                    <li>Chelsea</li>
                    <li>Revere</li>
                    <li>Winthrop</li>
                  </ul>
                </Col>
                <Col xs={6} md={4}>
                  <ul></ul>
                </Col>
                <Col xs={6} md={4}>
                  <ul></ul>
                </Col>
              </Row>
            </Container>
            <Container className="bg-white border drop-shadow p-md-3 mt-5">
              <h3 className="bg-primary p-3 text-white">
                <span className="drop-shadow">Middlesex County</span>
              </h3>
              <Row>
                <Col xs={6} md={4}>
                  <ul>
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
                <Col xs={6} md={4}>
                  <ul>
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
                <Col xs={6} md={4}>
                  <ul>
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
            </Container>
            {/* <Container className="checklist mt-5 p-3 p-lg-3 justify-content-center align-items-center">
              <h3>Why We're Different</h3>
              <ul className="check">
                <li>
                  We hire expert tradesman and provide them with regular,
                  continuing education
                </li>
                <li>We treat our clients and their property with respect</li>
                <li>
                  We aim to start and complete projects on or ahead of schedule
                </li>
                <li>We guarantee 100% satisfaction</li>
              </ul>
            </Container>
            <div className="text-center mt-5">
              <Button btnlink="/" btnlabel="Contact Us Today" btn={true} />
            </div> */}
          </Container>
        </Col>
      </Row>
      {/* </Container> */}
    </section>
  );
};

export default ServiceArea__Body;
