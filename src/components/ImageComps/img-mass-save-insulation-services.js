import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgMassSaveInsulationServices = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgMassSaveInsulationServicesQ {
      image: file(
        relativePath: {
          eq: "images/mass-save-home-insulation-program-mdh-construction-plymouth-ma-large.jpg"
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
      alt="Mass Save home insulation program by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgMassSaveInsulationServices;
