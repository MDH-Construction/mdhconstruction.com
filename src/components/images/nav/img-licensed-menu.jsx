import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgLicensedMenu = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgLicensedMenuQ {
      imageDesktop: file(
        relativePath: {
          eq: "images/mdh-construction-fully-licensed-insured-plymouth-ma-menu.png"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 90, width: 200, height: 175) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageMobile: file(
        relativePath: {
          eq: "images/mdh-construction-fully-licensed-insured-plymouth-ma-menu.png"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 90, width: 150, height: 132) {
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
      alt="MDH Construction is a fully licensed and insured in Massachusetts, servicing Boston, MA to Plymouth, MA."
      className={className}
    />
  );
};

export default ImgLicensedMenu;
