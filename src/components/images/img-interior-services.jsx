import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgInteriorServices = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgInteriorServicesQ {
      image: file(
        relativePath: {
          eq: "images/interior-construction-services-kitchen-remodeling-mdh-construction-plymouth-ma.jpg"
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
      alt="Interior construction services like kitchen remodeling by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgInteriorServices;
