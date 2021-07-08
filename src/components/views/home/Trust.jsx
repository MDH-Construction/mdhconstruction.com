import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
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
      imgBuildzoom: file(
        relativePath: {
          eq: "images/top-5-general-contractor-buildzoom-2021-mdh-construction-plymouth-ma.png"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 90, height: 126) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mobileImgBuildzoom: file(
        relativePath: {
          eq: "images/top-5-general-contractor-buildzoom-2021-mdh-construction-plymouth-ma.png"
        }
      ) {
        childImageSharp {
          fixed(quality: 90, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      desktopImgBuildzoom: file(
        relativePath: {
          eq: "images/top-5-general-contractor-buildzoom-2021-mdh-construction-plymouth-ma.png"
        }
      ) {
        childImageSharp {
          fixed(quality: 90, height: 126) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const imageData = data.masthead.childImageSharp.fluid;
  const imgBuildzoom = data.imgBuildzoom.childImageSharp.fixed;
  const sourcesBuildzoom = [
    data.mobileImgBuildzoom.childImageSharp.fixed,
    {
      ...data.desktopImgBuildzoom.childImageSharp.fixed,
      media: `(min-width: 768px)`,
    },
  ];

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
        <div className="flex text-center mx-auto">
          <Img
            fixed={sourcesBuildzoom}
            alt="MDH Construction has been awarded Top 5 General Contractor in Plymouth by Buildzoom"
            className="mx-4 align-items-center align-content-center"
          />
        </div>
        <div className="pt-lg-3">
          <div className="flex text-center mx-auto">
            <ImgBBB className="mx-4" />
            <ImgAngiesList className="mx-4" />
            <ImgHomeAdvisor className="mx-4" />
          </div>
        </div>
        {/* <Row className="flex justify-content-center">
          <Col className="mb-3 mb-lg-0 mx-auto" xs={'6'} lg={2}>
            <ImgBBB />
          </Col>
          <Col className="mb-3 mb-lg-0 mx-auto" xs={'6'} lg={6}>
            <Img
              fixed={imgBuildzoom}
              alt="MDH Construction has been awarded Top 5 General Contractor in Plymouth by Buildzoom"
            />
          </Col>
          <Col className="mb-3 mb-lg-0 mx-auto" xs={'6'} lg={2}>
            <ImgAngiesList />
          </Col>
          <Col className="mb-3 mb-lg-0 mx-auto" xs={'6'} lg={2}>
            <ImgHomeAdvisor />
          </Col>
        </Row> */}
      </Container>
    </BackgroundImage>
  );
};

export default Trust;
