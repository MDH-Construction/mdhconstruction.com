import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgServicesRoofing = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgServicesRoofingQ {
      image: file(
        relativePath: {
          eq: "images/pages/services/services-roofing-siding-mdh-construction-plymouth-massachusetts.jpg"
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
      alt="Roofing and siding services such as roof installation, roof replacement, roof repair, and vinyl siding installation by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgServicesRoofing;
