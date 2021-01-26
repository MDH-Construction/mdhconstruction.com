import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgRoofingServices = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgRoofingServicesQ {
      image: file(
        relativePath: {
          eq: "images/exterior-construction-services-roofing-mdh-construction-plymouth-ma-large.jpg"
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
      alt="Exterior construction services like roofing by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgRoofingServices;
