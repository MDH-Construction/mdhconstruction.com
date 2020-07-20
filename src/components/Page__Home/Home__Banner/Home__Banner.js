import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';
import ImgFullyLicensed from '../../Images/Logos/img-fully-licensed';
import Button from '../../Button/Button';
import FormHomePage from '../../FormHomePage/FormHomePage';

const Home__Banner = ({ className }) => {
  const data = useStaticQuery(graphql`
    query Home__BannerQ {
      masthead: file(
        relativePath: {
          eq: "images/new-house-building-roof-mdh-construction-plymouth-ma.jpg"
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
      <Container id="home-banner-section" className="h-100">
        <Row className="h-100 align-items-center justify-content-center text-center">
          <Col lg={6} className="align-self-center">
            <h2 className="px-sm-5 px-3 p-lg-3 mb-2 mb-lg-0 drop-shadow-darker font-weight-bold">
              Superior Craftsmanship & Unmatched Customer Care
            </h2>
            <h1 className="px-sm-5 p-3 mb-3 mb-lg-0 drop-shadow-darker font-weight-bold">
              <span className="text-primary">MDH Construction</span> Is Your
              Local General Contractor & Construction Company Located In{' '}
              <span className="text-primary">Plymouth, MA</span>
            </h1>
          </Col>
          <Col lg={6}>
            <FormHomePage />
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
};

export default Home__Banner;
