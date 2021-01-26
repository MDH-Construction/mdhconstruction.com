import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgMDHLogoFluid = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgMDHLogoFluidQ {
      image: file(
        relativePath: {
          eq: "images/mdh-construction-general-contractor-plymouth-ma-logo.png"
        }
      ) {
        id
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="MDH Construction company logo"
      className={className}
    />
  );
};

export default ImgMDHLogoFluid;
