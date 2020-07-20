import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Footer__ContactInfoSection from './Footer__ContactInfoSection';
import Footer__ContactFormSection from './Footer__ContactFormSection';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query AuthorQ {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <footer>
      <Footer__ContactInfoSection />
      <Footer__ContactFormSection className="bg-img-footer-contact" />
      <section className="footer-bg">
        <Container className="p-5">
          <Row className="justify-content-around align-items-baseline">
            <Col
              xs={12}
              md={4}
              lg={4}
              className="text-left text-md-left mb-5 mb-lg-0 drop-shadow-dark"
            >
              <h5 className="text-uppercase mb-4">Navigation</h5>
              <Link className="d-flex footer-link" to="/">
                About
              </Link>
              <Link className="d-flex footer-link" to="/">
                Who We Are
              </Link>
              <Link className="d-flex footer-link" to="/">
                Licensing and Insurance
              </Link>
              <Link className="d-flex footer-link" to="/">
                Ratings and Memberships
              </Link>
              <Link className="d-flex footer-link" to="/">
                Service Area
              </Link>
              <Link className="d-flex footer-link" to="/">
                Services
              </Link>
              <Link className="d-flex footer-link" to="/">
                Gallery
              </Link>
              <Link className="d-flex footer-link" to="/">
                Testimonials
              </Link>
              <Link className="d-flex footer-link" to="/">
                Employment
              </Link>
              <Link className="d-flex footer-link" to="/">
                Contact
              </Link>
            </Col>

            <Col
              xs={12}
              md={4}
              lg={4}
              className="text-left text-md-left mb-5 mb-lg-0 drop-shadow-dark"
            >
              <h5 className="text-uppercase mb-4">Partners</h5>
              <div className="text-sans-serif d-flex py-12">
                <a href="#">HomeAdvisor</a>
              </div>
              <div className="text-sans-serif d-flex py-12">
                <a href="#">AngiesList</a>
              </div>
              <div className="text-sans-serif d-flex py-12">
                <a href="#">BuildZoom</a>
              </div>
              <div className="text-sans-serif d-flex py-12">
                <a href="#">Mass Save</a>
              </div>

              <h5 className="text-uppercase mt-5 mb-4">Social Media</h5>
              <div className="text-sans-serif d-flex py-2">
                <a href="#">
                  <i className="fab fa-2x fa-facebook mr-3"></i>
                </a>
                <a className="my-auto" href="#">
                  <span className="ml-1 my-auto">Facebook</span>
                </a>
              </div>
              <div className="text-sans-serif d-flex py-2">
                <a href="#">
                  <i className="fab fa-2x fa-instagram mr-3"></i>
                </a>
                <a className="my-auto" href="#">
                  <span className="ml-2 my-auto">Instagram</span>
                </a>
              </div>
              <div className="text-sans-serif d-flex py-2">
                <a href="#">
                  <i className="fab fa-2x fa-youtube mr-3"></i>
                </a>
                <a className="my-auto" href="#">
                  <span className="my-auto">YouTube</span>
                </a>
              </div>
            </Col>

            <Col
              xs={12}
              md={4}
              lg={4}
              className="text-left text-md-left mb-5 mb-lg-0 drop-shadow-dark"
            >
              <h5 className="text-uppercase mb-4">Company</h5>
              <div className="text-sans-serif pt-2 d-flex mb-2">
                <i className="fas fa-address-card mt-1"></i>
                <Link to="/" className="ml-3">
                  MDH Construction
                </Link>
              </div>
              <div className="text-sans-serif pt-2 d-flex mb-2">
                <i className="fas fa-phone mt-1"></i>
                <a className="ml-3" href="tel:+17742696002">
                  (774) 269-6002
                </a>
              </div>
              <div className="text-sans-serif pt-2 d-flex mb-2">
                <i className="fas fa-envelope mt-1"></i>
                <a
                  className="ml-3"
                  href="mailto:michael.maher@mdhconstruction.com?Subject=Important%20Email%20From%20Website"
                  target="_blank"
                >
                  michael.maher
                  <wbr />
                  @mdhconstruction.com
                </a>
              </div>
              <div className="text-sans-serif pt-2 d-flex mb-2">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <a
                  className="ml-1-25"
                  href="https://goo.gl/maps/Q5eUufFZPqPNvxPLA"
                  target="_blank"
                >
                  186 S Meadow Rd #2,
                  <br />
                  Plymouth, MA 02360
                </a>
              </div>
              <div className="text-sans-serif pt-2 d-flex mb-2">
                <i className="fas fa-clock mt-2"></i>
                <Table className="ml-2" borderless size="sm">
                  <tbody>
                    <tr>
                      <td>Monday</td>
                      <td>9AM–5PM</td>
                    </tr>
                    <tr>
                      <td>Tuesday</td>
                      <td>9AM–5PM</td>
                    </tr>
                    <tr>
                      <td>Wednesday</td>
                      <td>9AM–5PM</td>
                    </tr>
                    <tr>
                      <td>Thursday</td>
                      <td>9AM–5PM</td>
                    </tr>
                    <tr>
                      <td>Friday</td>
                      <td>9AM–5PM</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>9AM–5PM</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="bg-dark">
          <Container className="py-3 text-sans-serif">
            <Row className="justify-content-between align-items-baseline pt-3">
              <Col xs={12} md={12} className="small text-center">
                <p>
                  Copyright &copy; {new Date().getFullYear()}{' '}
                  <Link className="text-primary font-weight-bold" to="/">
                    MDH Construction
                  </Link>
                  , Inc. All Rights Reserved
                  <span className="d-block">
                    Home Improvement Contractor License: 183807{' '}
                  </span>
                  <span className="d-block">
                    Construction Supervisors License: 109089
                  </span>
                </p>
              </Col>
              <Col xs={12} md={12} className="small text-center">
                {' '}
                <p>
                  Design by{' '}
                  <Link className="text-primary font-weight-bold" to="/">
                    {data.site.siteMetadata.author}
                  </Link>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
