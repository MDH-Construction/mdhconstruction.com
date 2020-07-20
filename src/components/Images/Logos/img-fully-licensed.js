import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgFullyLicensed = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgFullyLicensedQ {
      imageDesktop: file(
        relativePath: {
          eq: "images/fully-licensed-and-insured-mdh-construction-plymouth-ma.png"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 100, width: 185, height: 147) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageMobile: file(
        relativePath: {
          eq: "images/fully-licensed-and-insured-mdh-construction-plymouth-ma-mobile.png"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 100, width: 110, height: 87) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const sources = [
    {
      ...data.imageMobile.childImageSharp.fixed,
      media: `(max-width: 767px)`,
    },
    {
      ...data.imageDesktop.childImageSharp.fixed,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <Img
      fixed={sources}
      alt="MDH Construction is a fully licensed and insured general contractor in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgFullyLicensed;
