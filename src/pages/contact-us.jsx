import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Accordion, Col, Container, Row, Table, Card } from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/common/SEO';
import Contact from '../components/layouts/headers/Contact';
import FormContactPage from '../components/common/forms/FormContactPage';

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query ContactPageQ {
      masthead: file(
        relativePath: {
          eq: "images/about-mdh-construction-general-contractor-plymouth-ma.jpg"
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

  return (
    <Layout>
      <SEO
        title="Contact Us Today For a FREE In-Home Estimate | Plymouth, MA"
        description="Let's talk about your next project! Call us at (774) 269-6002, send an email, or complete our form to receive a free quote, make an appointment and get started!"
        canonicalLink="https://www.mdhconstruction.com/contact-us/"
      />
      <Contact
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Contact MDH Construction"
        textSecondary="Complete Our Form Or Call Us At (774) 269-6002"
        alt="Contact MDH Construction"
      />
      <section id="contact-page">
        <Col xs={12} md={7} lg={5} className="mx-auto">
          <Container className="neg-margin-top-contact-form">
            <FormContactPage />
          </Container>
        </Col>
        <Container fluid className="pt-5 mt-5 pb-5 pb-lg-0 px-0">
          <Row noGutters className="mb-5 bg-dark">
            <Col xs={12} md={6} className="p-3 p-lg-5">
              <Container className="bg-white border border-primary p-3 p-lg-3">
                <h3 className="bg-contact-bar text-white p-2">
                  <span className="drop-shadow">Contact Us Today</span>
                </h3>
                <h4 className="text-left">Address:</h4>
                <div className="text-sans-serif d-flex mb-4 ml-3">
                  <i className="text-secondary fas fa-2x fa-home mb-3"></i>
                  <a
                    className="nap-link ml-3"
                    href="https://goo.gl/maps/Q5eUufFZPqPNvxPLA"
                    target="_blank"
                  >
                    186 S Meadow Rd #2, Plymouth, MA 02360
                  </a>
                </div>
                <h4 className="text-left">Call Us:</h4>
                <div className="text-sans-serif d-flex mb-4 ml-3">
                  <i className="text-secondary fas fa-2x fa-phone mb-3"></i>
                  <a className="nap-link ml-3" href="tel:+17742696002">
                    (774) 269-6002
                  </a>
                </div>
                <h4 className="text-left">Email Us:</h4>
                <div className="text-sans-serif d-flex mb-4 ml-3">
                  <i className="text-secondary fas fa-2x fa-envelope mb-3"></i>
                  <a
                    className="nap-link ml-3"
                    href="mailto:michael.maher@mdhconstruction.com?Subject=Important%20Email%20From%20Website"
                    target="_blank"
                  >
                    michael.maher
                    <wbr />
                    @mdhconstruction.com
                  </a>
                </div>
                <h4 className="text-left">Hours of Operation:</h4>
                <div className="text-sans-serif d-flex ml-3">
                  <i className="text-secondary fas fa-2x fa-clock mt-2"></i>
                  <Table
                    className="ml-2 font-weight-bold text-primary nap-text"
                    borderless
                    size="sm"
                  >
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
                        <td className="text-secondary">Closed</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Container>
            </Col>
            <Col xs={12} md={6}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11875.455078867!2d-70.724978!3d41.9172872!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x194bd0229c58ef44!2sMDH%20Construction!5e0!3m2!1sen!2sus!4v1593184910448!5m2!1sen!2sus"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                className="my-5 my-md-0"
              ></iframe>
            </Col>
          </Row>
        </Container>
        <Container className="py-5 my-5">
          <h2 className="mb-5 display-4 font-weight-bold">
            Need Directions to Our Office?
          </h2>
          <Accordion>
            <Card className="accordion-animation">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <span className="mr-3">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <span className="accordionText">
                  Directions from Boston, MA (about 1 hour, 15 minutes)
                </span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Get on I-93 South, then take exit 20A-20B to MA-3 South.
                  Continue on MA-3 South, then take exit 6B Samoset St. Continue
                  on Samoset St for 1.2 miles and turn left onto 7 Hills Rd,
                  followed by a slight right onto Federal Furnace Rd. Turn right
                  onto S Meadow Rd and continue for 1.7 miles. Our{' '}
                  <a
                    href="https://www.google.com/maps?cid=1822779321272037188"
                    target="_blank"
                    className="underline font-weight-bold"
                  >
                    MDH Construction office
                  </a>{' '}
                  is located on the left at 186 S Meadow Rd, Plymouth, MA 02360.
                  <div className="text-sans-serif d-flex mt-5 mb-4 justify-content-center">
                    <i className="text-secondary fas fa-2x fa-directions"></i>
                    <a
                      className="nap-link ml-3 d-block"
                      href="https://www.google.com/maps/dir//41.9172872,-70.724978/@41.917287,-70.724978,14z?hl=en"
                      target="_blank"
                    >
                      Get directions to MDH Construction office
                    </a>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="accordion-animation">
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <span className="mr-3">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <span className="accordionText">
                  Directions from Cape Cod (about 45 minutes)
                </span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Get on US-6 West from Iyannough Rd to Boston/Providence, RI.
                  Follow US-6 West and continue onto MA-3 North. Take exit 6 for
                  US-44 E/Samoset St toward Plymouth Center/Carver. Keep left at
                  the fork, follow signs for Samoset St. Continue on Samoset St
                  for 1.3 miles and turn left onto 7 Hills Rd, followed by a
                  slight right onto Federal Furnace Rd. Turn right onto S Meadow
                  Rd and continue for 1.7 miles. Our{' '}
                  <a
                    href="https://www.google.com/maps?cid=1822779321272037188"
                    target="_blank"
                    className="underline font-weight-bold"
                  >
                    MDH Construction office
                  </a>{' '}
                  is located on the left at 186 S Meadow Rd, Plymouth, MA 02360.
                  <div className="text-sans-serif d-flex mt-5 mb-4 justify-content-center">
                    <i className="text-secondary fas fa-2x fa-directions"></i>
                    <a
                      className="nap-link ml-3 d-block"
                      href="https://www.google.com/maps/dir//41.9172872,-70.724978/@41.917287,-70.724978,14z?hl=en"
                      target="_blank"
                    >
                      Get directions to MDH Construction office
                    </a>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="accordion-animation">
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <span className="mr-3">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <span className="accordionText">
                  Directions from New Bedford, MA (about 45 minutes)
                </span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Get on I-195 East from Kempton St and MA-18 North. Continue on
                  I-195 East to Wareham, then take exit 22B toward I-495
                  North/Marlboro. Merge onto I-495 North, then take exit 2 for
                  MA-58 North toward Carver/Plymouth. Turn left to stay on MA-58
                  North and follow to S Meadow Rd in Plymouth. Our{' '}
                  <a
                    href="https://www.google.com/maps?cid=1822779321272037188"
                    target="_blank"
                    className="underline font-weight-bold"
                  >
                    MDH Construction office
                  </a>{' '}
                  is located on the right at 186 S Meadow Rd, Plymouth, MA
                  02360.
                  <div className="text-sans-serif d-flex mt-5 mb-4 justify-content-center">
                    <i className="text-secondary fas fa-2x fa-directions"></i>
                    <a
                      className="nap-link ml-3 d-block"
                      href="https://www.google.com/maps/dir//41.9172872,-70.724978/@41.917287,-70.724978,14z?hl=en"
                      target="_blank"
                    >
                      Get directions to MDH Construction office
                    </a>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="accordion-animation">
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <span className="mr-3">
                  <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                </span>
                <span className="accordionText">
                  Directions from Worcester, MA (about 1 hour, 30 minutes)
                </span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  Get on MA-146 South from Southbridge St and Quinsigamond Ave.
                  Continue on MA-146 South and take exit 10 toward U.S.
                  20/Interstate 90/Boston/Springfield. Merge onto I-90
                  E/Massachusetts Turnpike, then take exit 11A to merge onto
                  I-495 South toward Cape Cod. Take exit 6 for US-44 toward
                  Plymouth/Middleboro. Turn right onto US-44 East (signs for
                  Route 44/Middleboro/Plymouth), then at the traffic circle,
                  take the 3rd exit and stay on US-44 E. Take the MA-58 exit
                  toward Carver/Plympton, turn left onto Plymouth St, then
                  continue onto Center St. Turn left onto Pond St, followed by a
                  left onto to S Meadow Rd in Plymouth. Our{' '}
                  <a
                    href="https://www.google.com/maps?cid=1822779321272037188"
                    target="_blank"
                    className="underline font-weight-bold"
                  >
                    MDH Construction office
                  </a>{' '}
                  is located on the right at 186 S Meadow Rd, Plymouth, MA
                  02360.
                  <div className="text-sans-serif d-flex mt-5 mb-4 justify-content-center">
                    <i className="text-secondary fas fa-2x fa-directions"></i>
                    <a
                      className="nap-link ml-3 d-block"
                      href="https://www.google.com/maps/dir//41.9172872,-70.724978/@41.917287,-70.724978,14z?hl=en"
                      target="_blank"
                    >
                      Get directions to MDH Construction office
                    </a>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </section>
    </Layout>
  );
};

export default ContactPage;
