import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgVinylSidingServices = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgVinylSidingServicesQ {
      image: file(
        relativePath: {
          eq: "images/vinyl-siding-services-mdh-construction-plymouth-ma-large.jpg"
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
      alt="Vinyl siding services by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgVinylSidingServices;
