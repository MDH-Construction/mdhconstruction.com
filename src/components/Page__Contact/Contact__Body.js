import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import ImgTruck from '../ImageComps/img-truck';
import Button from '../Button/Button';
import FormContactPage from '../FormContactPage/FormContactPage';

const Contact__Body = ({ className }) => {
  return (
    <section id="contact-page">
      <Col xs={12} md={5} className="container neg-margin-top-contact-form">
        <FormContactPage formname="form-contact-page" />
      </Col>
      <Container>
        <Row>
          <Col className="py-3 py-lg-5" xs={12} md={12}>
            <Container>
              <h2>Your Local Construction Company</h2>
              <p>
                MDH Construction remains committed to superior craftsmanship and
                unmatched customer care. Our team of highly qualified tradesmen
                take great pride in their work. Centrally located in Plymouth,
                Massachusetts, we service the Boston area, South Shore and Cape
                Cod. We specialize in a wide variety of home improvement,
                remodeling, and commercial construction services — ranging from
                large frame-to-finish building jobs to small installation
                projects.
              </p>
            </Container>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <Container className="bg-white border border-primary p-3 p-lg-3">
              <h3 className="bg-primary text-white p-2">
                <span className="drop-shadow">Contact Us Today</span>
              </h3>
              <h4 className="text-left">Address:</h4>
              <div className="text-sans-serif d-flex mb-4 ml-3">
                <i className="text-secondary fas fa-2x fa-home mb-3"></i>
                <a
                  className="nap-text ml-3"
                  href="https://g.page/john-grattan-seo-web-design?share"
                  target="_blank"
                >
                  186 S Meadow Rd #2, Plymouth, MA 02360
                </a>
              </div>
              <h4 className="text-left">Call Us:</h4>
              <div className="text-sans-serif d-flex mb-4 ml-3">
                <i className="text-secondary fas fa-2x fa-phone mb-3"></i>
                <a className="nap-text ml-3" href="tel:+17742696002">
                  (774) 269-6002
                </a>
              </div>
              <h4 className="text-left">Email Us:</h4>
              <div className="text-sans-serif d-flex ml-3">
                <i className="text-secondary fas fa-2x fa-envelope mb-3"></i>
                <a
                  className="nap-text ml-3"
                  href="mailto:michael.maher@mdhconstruction.com?Subject=Important%20Email%20From%20Website"
                  target="_blank"
                >
                  michael.maher@mdhconstruction.com
                </a>
              </div>
            </Container>
          </Col>
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11875.455078867!2d-70.724978!3d41.9172872!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x194bd0229c58ef44!2sMDH%20Construction!5e0!3m2!1sen!2sus!4v1593184910448!5m2!1sen!2sus"
              width="600"
              height="450"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
            <div className="text-sans-serif d-flex mb-4 justify-content-center">
              <a
                className="nap-text ml-3 d-block"
                href="https://www.google.com/maps/dir//41.9172872,-70.724978/@41.917287,-70.724978,14z?hl=en"
                target="_blank"
              >
                Get directions to MDH Construction office
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact__Body;
