import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgTopRatedMenu = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgTopRatedMenuQ {
      image: file(
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
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="MDH Construction is a top-rated Home Advisor construction company in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgTopRatedMenu;
