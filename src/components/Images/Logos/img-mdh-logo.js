import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgMDHLogo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgMDHLogoQ {
      image: file(
        relativePath: {
          eq: "images/mdh-construction-general-contractor-plymouth-ma-logo.png"
        }
      ) {
        id
        childImageSharp {
          fixed(width: 140, height: 45) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="MDH Construction company logo"
      className={className}
    />
  );
};

export default ImgMDHLogo;
