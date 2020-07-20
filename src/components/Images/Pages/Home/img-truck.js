import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgTruck = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgTruckQ {
      image: file(
        relativePath: { eq: "images/mdh-construction-truck-plymouth-ma.jpg" }
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
      alt="MDH Construction has trucks servicing Massachusetts, located in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgTruck;
