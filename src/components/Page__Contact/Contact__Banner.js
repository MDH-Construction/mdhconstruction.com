import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';
import ImgFullyLicensed from '../ImageComps/img-fully-licensed';
import Button from '../Button/Button';
import FormContactBanner from '../FormContactBanner/FormContactBanner';

const Contact__Banner = ({ className }) => {
  const data = useStaticQuery(graphql`
    query Contact__BannerQ {
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

  const imageData = data.masthead.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="header"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="John Grattan SEO & Web Design homepage background section - computer screen with SEO stats"
    >
      <Container id="contact-banner-section" className="h-100">
        <Row className="h-100 align-items-center justify-content-center text-center">
          <Col lg={6} className="align-self-center">
            <h1 className="px-sm-5 p-3 drop-shadow-darker font-weight-bold">
              Contact MDH Construction
            </h1>
            <h2 className="px-sm-5 px-3 p-lg-3 drop-shadow-darker font-weight-bold">
              A Reliable, Family Owned And Operated Business
            </h2>
          </Col>
          <Col lg={6}>
            <FormContactBanner formname="form-contact-banner" />
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
};

export default Contact__Banner;
