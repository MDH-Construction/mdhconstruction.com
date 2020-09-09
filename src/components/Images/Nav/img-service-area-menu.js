import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgServiceAreaMenu = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgServiceAreaMenuQ {
      image: file(
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
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="A map of Massachusetts showing MDH Construction's service area from Boston, MA to Plymouth, MA."
      className={className}
    />
  );
};

export default ImgServiceAreaMenu;
