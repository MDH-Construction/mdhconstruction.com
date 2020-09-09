import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgMdhTruckMenu = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgMdhTruckMenuQ {
      image: file(
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
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="The MDH Construction truck servicing a home improvement project in Plymouth, Massachusetts"
      className={className}
    />
  );
};

export default ImgMdhTruckMenu;
