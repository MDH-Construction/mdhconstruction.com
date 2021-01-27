import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgServicesFullConstruction = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgServicesFullConstructionQ {
      image: file(
        relativePath: {
          eq: "images/pages/services/services-full-construction-mdh-construction-plymouth-massachusetts.jpg"
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
      alt="Full construction services such as new residential homes, new commercial buildings, and detached garages by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgServicesFullConstruction;
