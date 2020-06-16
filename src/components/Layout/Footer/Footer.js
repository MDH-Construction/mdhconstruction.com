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
              <h5 className="text-uppercase mb-4">Company</h5>
              <Link className="d-flex footer-link" to="/">
                About
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
              <h5 className="text-uppercase mb-4">Top Services</h5>
              <Link className="d-flex footer-link" to="/">
                Roofing Installation and Repair
              </Link>
              <Link className="d-flex footer-link" to="/">
                Siding Installation and Repair
              </Link>
              <Link className="d-flex footer-link" to="/">
                Gutters and Downspouts
              </Link>
              <Link className="d-flex footer-link" to="/">
                Additions and New Construction
              </Link>
              <Link className="d-flex footer-link" to="/">
                Mass Save Home Insulation
              </Link>
              <Link className="d-flex footer-link" to="/">
                Kitchen and Bathroom Remodeling
              </Link>
            </Col>

            <Col
              xs={12}
              md={4}
              lg={4}
              className="text-left text-md-left mb-5 mb-lg-0 drop-shadow-dark"
            >
              <h5 className="text-uppercase mb-4">Info</h5>
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
                  michael.maher@mdhconstruction.com
                </a>
              </div>
              <div className="text-sans-serif pt-2 d-flex mb-2">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <a
                  className="ml-1-25"
                  href="https://g.page/john-grattan-seo-web-design?share"
                  target="_blank"
                >
                  186 S Meadow Rd #2,
                  <br />
                  Plymouth, MA 02360
                </a>
              </div>
              <div className="text-sans-serif pt-2 d-flex mb-2">
                <i className="far fa-clock mt-2"></i>
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
              {/* <Col xs={12} md={4} className="small text-center">
              {' '}
              <a href="#">
                <i className="fab fa-2x fa-facebook px-2"></i>
              </a>
              <a href="#">
                <i className="fab fa-2x fa-instagram px-2"></i>
              </a>
              <a href="#">
                <i className="fab fa-2x fa-twitter px-2"></i>
              </a>
              <a href="#">
                <i className="fab fa-2x fa-youtube px-2"></i>
              </a>
              <a href="#">
                <i className="fab fa-2x fa-linkedin px-2"></i>
              </a>
              <a href="#">
                <i className="fab fa-2x fa-github px-2"></i>
              </a>
            </Col> */}
            </Row>
          </Container>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
