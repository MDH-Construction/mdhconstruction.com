import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgExteriorServicesMenu = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgExteriorServicesMenuQ {
      image: file(
        relativePath: {
          eq: "images/exterior-construction-services-roofing-mdh-construction-plymouth-ma-menu.jpg"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 90, width: 200, height: 175) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="Exterior construction services like roofing by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgExteriorServicesMenu;
