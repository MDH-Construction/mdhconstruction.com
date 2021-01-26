import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgServicesInsulation = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgServicesInsulationQ {
      image: file(
        relativePath: {
          eq: "images/pages/services/services-mass-save-home-insulation-mdh-construction-plymouth-massachusetts.jpg"
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
      alt="Insulation services such as Mass Save home insulation program, blow-in, batt and roll, reflective insulation by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgServicesInsulation;
