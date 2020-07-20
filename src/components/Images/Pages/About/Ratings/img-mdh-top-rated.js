import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgMdhTopRated = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgMdhTopRatedQ {
      image: file(
        relativePath: {
          eq: "images/mdh-construction-top-rated-5-star-business-plymouth-ma.png"
        }
      ) {
        id
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="MDH Construction is a top-rate, 5-star business located in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgMdhTopRated;
