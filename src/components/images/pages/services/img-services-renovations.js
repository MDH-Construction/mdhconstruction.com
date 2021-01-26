import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgServicesRenovations = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgServicesRenovationsQ {
      image: file(
        relativePath: {
          eq: "images/pages/services/services-renovations-remodeling-mdh-construction-plymouth-massachusetts.jpg"
        }
      ) {
        id
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="Renovation and remodeling services such as kitchen, bathroom, and basement remodeling by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgServicesRenovations;
