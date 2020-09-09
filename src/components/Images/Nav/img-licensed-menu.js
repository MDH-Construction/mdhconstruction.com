import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgLicensedMenu = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgLicensedMenuQ {
      image: file(
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
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="MDH Construction is a fully licensed and insured in Massachusetts, servicing Boston, MA to Plymouth, MA."
      className={className}
    />
  );
};

export default ImgLicensedMenu;
