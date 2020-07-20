import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgCone = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgConeQ {
      image: file(
        relativePath: { eq: "images/404-cone-mdh-construction-plymouth-ma.png" }
      ) {
        id
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="404 Cone - Page Missing - MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgCone;
