import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgMdhTruckMenu = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgMdhTruckMenuQ {
      imageDesktop: file(
        relativePath: {
          eq: "images/mdh-construction-truck-plymouth-ma-menu.jpg"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 90, width: 200, height: 175) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      imageMobile: file(
        relativePath: {
          eq: "images/mdh-construction-truck-plymouth-ma-menu.jpg"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 90, width: 150, height: 132) {
            ...GatsbyImageSharpFixed_withWebp
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
      alt="The MDH Construction truck servicing a home improvement project in Plymouth, Massachusetts"
      className={className}
    />
  );
};

export default ImgMdhTruckMenu;
