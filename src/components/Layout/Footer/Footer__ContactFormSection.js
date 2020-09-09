import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Container, Row, Col } from 'react-bootstrap';
import FormFooter from '../../FormFooter/FormFooter';

const Footer__ContactFormSection = ({ className }) => {
  const data = useStaticQuery(graphql`
    query Footer__ContactFormSectionQ {
      footerContact: file(
        relativePath: {
          eq: "images/new-house-roof-frame-mdh-construction-plymouth-ma.jpg"
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

  const imageData = data.footerContact.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="A MDH Construction job site in Plymouth, MA building a new home."
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="px-0 my-5">
            <FormFooter />
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
};

export default Footer__ContactFormSection;
