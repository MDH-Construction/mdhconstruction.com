import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgInsulationServicesMenu = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgInsulationServicesMenuQ {
      image: file(
        relativePath: {
          eq: "images/insulation-services-mass-save-program-mdh-construction-plymouth-ma-menu.jpg"
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
      alt="Mass Save home insulation program by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgInsulationServicesMenu;
