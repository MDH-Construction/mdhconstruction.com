import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgInteriorServicesMenu = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgInteriorServicesMenuQ {
      image: file(
        relativePath: {
          eq: "images/interior-construction-services-kitchen-remodeling-mdh-construction-plymouth-ma-menu.jpg"
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
      alt="Interior construction services like kitchen remodeling by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgInteriorServicesMenu;
