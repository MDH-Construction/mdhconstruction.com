import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';
import ImgHomeAdvisor from '../../images/logos/img-home-advisor';
import ImgAngiesList from '../../images/logos/img-angies-list';
import ImgBBB from '../../images/logos/img-bbb';

const Trust = ({ className }) => {
  const data = useStaticQuery(graphql`
    query TrustQ {
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
      className="px-0 py-4 section-no-margin bg-img-dark-gradient"
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="John Grattan SEO & Web Design homepage background section - computer screen with SEO stats"
    >
      <Container className="text-center pb-1">
        <span className="lead text-white drop-shadow-darker">
          Trusted By{' '}
          <span className="font-weight-bold">Top Industry Organizations</span>:
        </span>
        <hr className="divider mt-2 pb-3 drop-shadow-darker" />
        <Row className="justify-content-center">
          <Col className="mb-3 mb-lg-0 mx-auto" xs={'6'} lg={4}>
            <ImgBBB />
          </Col>
          <Col className="mb-3 mb-lg-0 mx-auto" xs={'6'} lg={4}>
            <ImgAngiesList />
          </Col>
          <Col className="mb-3 mb-lg-0 mx-auto" xs={'6'} lg={4}>
            <ImgHomeAdvisor />
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
};

export default Trust;
