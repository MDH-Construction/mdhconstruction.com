import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgServiceAreaMenu = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgServiceAreaMenuQ {
      imageDesktop: file(
        relativePath: {
          eq: "images/mdh-construction-service-area-plymouth-boston-massachusetts.jpg"
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
          eq: "images/mdh-construction-service-area-plymouth-boston-massachusetts.jpg"
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
      alt="A map of Massachusetts showing MDH Construction's service area from Boston, MA to Plymouth, MA."
      className={className}
    />
  );
};

export default ImgServiceAreaMenu;
