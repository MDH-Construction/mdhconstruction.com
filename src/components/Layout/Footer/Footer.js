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
      <Footer__ContactInfoSection className="section-no-margin" />
      <Footer__ContactFormSection className="bg-img-footer-contact section-no-margin" />
      <section className="footer-bg section-no-margin">
        <Container className="p-5">
          <Row className="justify-content-around align-items-baseline">
            <Col
              xs={12}
              md={4}
              lg={4}
              className="text-left text-md-left mb-5 mb-lg-0 drop-shadow-dark"
            >
              <p className="text-uppercase mb-4 text-primary lead font-weight-bold">
                Navigation
              </p>
              <Link className="d-flex footer-link" to="/about">
                About
              </Link>
              <Link className="d-flex footer-link" to="/who-we-are">
                Who We Are
              </Link>
              <Link className="d-flex footer-link" to="/what-we-do">
                Licensing and Insurance
              </Link>
              <Link
                className="d-flex footer-link"
                to="/ratings-and-memberships"
              >
                Ratings and Memberships
              </Link>
              <Link className="d-flex footer-link" to="/service-area">
                Service Area
              </Link>
              <Link className="d-flex footer-link" to="/services">
                Services
              </Link>
              <Link className="d-flex footer-link" to="/gallery">
                Gallery
              </Link>
              <Link className="d-flex footer-link" to="/testimonials">
                Testimonials
              </Link>
              <Link className="d-flex footer-link" to="/employment">
                Employment
              </Link>
              <Link className="d-flex footer-link" to="/contact-us">
                Contact
              </Link>
            </Col>

            <Col
              xs={12}
              md={4}
              lg={4}
              className="text-left text-md-left mb-5 mb-lg-0 drop-shadow-dark"
            >
              <p className="text-uppercase mb-4 text-primary lead font-weight-bold">
                Memberships
              </p>
              <Container className="px-0 text-sans-serif d-flex py-12">
                <Link to="/ratings-and-memberships">HomeAdvisor</Link>
              </Container>
              <Container className="px-0 text-sans-serif d-flex py-12">
                <Link to="/ratings-and-memberships">Angie's List</Link>
              </Container>
              <Container className="px-0 text-sans-serif d-flex py-12">
                <Link to="/ratings-and-memberships">Mass Save</Link>
              </Container>
              <Container className="px-0 text-sans-serif d-flex py-12">
                <Link to="/ratings-and-memberships">BBB</Link>
              </Container>

              <p className="text-uppercase mt-5 mb-4 text-primary lead font-weight-bold">
                Social Media
              </p>
              <Container className="px-0 text-sans-serif d-flex py-2">
                <a
                  href="https://www.facebook.com/MDHConst"
                  target="_blank"
                  rel="nofollow"
                >
                  <i className="fab fa-2x fa-facebook mr-3"></i>
                </a>
                <a className="my-auto" href="https://www.facebook.com/MDHConst">
                  <span className="ml-1 my-auto">Facebook</span>
                </a>
              </Container>
              <Container className="px-0 text-sans-serif d-flex py-2">
                <a href="#" target="_blank" rel="nofollow">
                  <i className="fab fa-2x fa-instagram mr-3"></i>
                </a>
                <a className="my-auto" href="#">
                  <span className="ml-2 my-auto">Instagram</span>
                </a>
              </Container>
              <Container className="px-0 text-sans-serif d-flex py-2">
                <a href="#" target="_blank" rel="nofollow">
                  <i className="fab fa-2x fa-youtube mr-3"></i>
                </a>
                <a className="my-auto" href="#">
                  <span className="my-auto">YouTube</span>
                </a>
              </Container>
            </Col>

            <Col
              xs={12}
              md={4}
              lg={4}
              className="text-left text-md-left mb-5 mb-lg-0 drop-shadow-dark"
            >
              <p className="text-uppercase mb-4 text-primary lead font-weight-bold">
                Company
              </p>
              <Container className="px-0 text-sans-serif pt-2 d-flex mb-2">
                <a
                  href="https://www.google.com/maps?cid=1822779321272037188"
                  target="_blank"
                  rel="nofollow"
                >
                  <i className="fas fa-address-card mt-1"></i>
                </a>

                <a
                  href="https://www.google.com/maps?cid=1822779321272037188"
                  target="_blank"
                  rel="nofollow"
                  className="ml-3"
                >
                  MDH Construction
                </a>
              </Container>
              <Container className="px-0 text-sans-serif pt-2 d-flex mb-2">
                <a href="tel:+17742696002">
                  <i className="fas fa-phone mt-1"></i>
                </a>

                <a className="ml-3" href="tel:+17742696002">
                  (774) 269-6002
                </a>
              </Container>
              <Container className="px-0 text-sans-serif pt-2 d-flex mb-2">
                <a
                  href="mailto:michael.maher@mdhconstruction.com?Subject=Important%20Email%20From%20Website"
                  target="_blank"
                  rel="nofollow"
                >
                  <i className="fas fa-envelope mt-1"></i>
                </a>

                <a
                  className="ml-3"
                  href="mailto:michael.maher@mdhconstruction.com?Subject=Important%20Email%20From%20Website"
                  target="_blank"
                  rel="nofollow"
                >
                  michael.maher
                  <wbr />
                  @mdhconstruction
                  <wbr />
                  .com
                </a>
              </Container>
              <Container className="px-0 text-sans-serif pt-2 d-flex mb-2">
                <a
                  href="https://goo.gl/maps/Q5eUufFZPqPNvxPLA"
                  target="_blank"
                  rel="nofollow"
                >
                  <i className="fas fa-map-marker-alt mt-1"></i>
                </a>
                <a
                  className="ml-1-25"
                  href="https://goo.gl/maps/Q5eUufFZPqPNvxPLA"
                  target="_blank"
                  rel="nofollow"
                >
                  186 S Meadow Rd #2,
                  <br />
                  Plymouth, MA 02360
                </a>
              </Container>
              <Container className="px-0 text-sans-serif pt-2 d-flex mb-2">
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
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className="bg-dark">
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
                    Home Improvement Contractor License: 183807
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
                  <a
                    href="https://johngrattan.com/"
                    target="_blank"
                    rel="nofollow"
                    className="text-primary font-weight-bold"
                  >
                    John Grattan SEO & Web Design
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
