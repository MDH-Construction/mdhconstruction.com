import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgTopRatedMenu = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgTopRatedMenuQ {
      imageDesktop: file(
        relativePath: {
          eq: "images/mdh-construction-top-rated-home-advisor-plymouth-ma-menu.png"
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
          eq: "images/mdh-construction-top-rated-home-advisor-plymouth-ma-menu.png"
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
      alt="MDH Construction is a top-rated Home Advisor construction company in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgTopRatedMenu;
