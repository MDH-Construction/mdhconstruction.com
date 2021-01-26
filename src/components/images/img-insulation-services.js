import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgInsulationServices = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgInsulationServicesQ {
      image: file(
        relativePath: {
          eq: "images/insulation-services-mass-save-program-mdh-construction-plymouth-ma.jpg"
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
      alt="Insulation services like our Mass Save Home Insulation Program by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgInsulationServices;
