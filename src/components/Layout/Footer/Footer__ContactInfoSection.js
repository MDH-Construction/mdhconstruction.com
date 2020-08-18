import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';

const Footer__ContactInfoSection = () => {
  const data = useStaticQuery(graphql`
    query Footer__ContactInfoSectionQ {
      masthead: file(
        relativePath: {
          eq: "images/pages/home/wood-shingles-siding-roofing-mdh-construction-plymouth-massachusetts.jpg"
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

  const imageData = data.masthead.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className="footer-contact-info-section py-0 pt-5 py-lg-5 section-no-margin"
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="John Grattan SEO & Web Design homepage background section - computer screen with SEO stats"
    >
      <Container className="p-5">
        <h2 className="display-4 font-weight-bold text-white mb-5 drop-shadow-darker">
          Getting Started Is Easy!
        </h2>
        <Row className="justify-content-center">
          <Col className="mb-5 mb-lg-0 drop-shadow-darker" xs={12} md={4}>
            <Container className="bg-primary p-3 text-center text-white">
              <span className="font-weight-bold lead drop-shadow">Step 1:</span>
            </Container>
            <Container className="bg-white p-3">
              <p>
                <strong className="text-dark">
                  Request An In-Home Appointment
                </strong>
              </p>
              <p className="text-dark">
                Complete our form below and we'll contact you to schedule an
                in-home appointment. If you’d prefer, you can also contact us by
                phone at{' '}
                <a
                  className="font-weight-bold text-primary"
                  href="tel:+17742696002"
                >
                  (774) 269-6002
                </a>
                .
              </p>
            </Container>
          </Col>
          <Col className="mb-5 mb-lg-0 drop-shadow-darker" xs={12} md={4}>
            <Container className="bg-primary p-3 text-center text-white">
              <span className="font-weight-bold lead drop-shadow">Step 2:</span>
            </Container>
            <Container className="bg-white p-3">
              <p>
                <strong className="text-dark">Schedule Your Project</strong>
              </p>
              <p className="text-dark">
                We'll come to your home, assess your needs, and follow-up with a
                quote. When you're ready, just call, and we’ll schedule your
                project.
              </p>
            </Container>
          </Col>
          <Col className="mb-5 mb-lg-0 drop-shadow-darker" xs={12} md={4}>
            <Container className="bg-primary p-3 text-center text-white">
              <span className="font-weight-bold lead drop-shadow">Step 3:</span>
            </Container>
            <Container className="bg-white p-3">
              <p>
                <strong className="text-dark">Let The Work Begin!</strong>
              </p>
              <p className="text-dark">
                A team of MDH Construction craftsmen will start your project on
                time and finish on schedule — 100% satisfaction, guaranteed!
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
};

export default Footer__ContactInfoSection;
