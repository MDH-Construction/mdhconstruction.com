import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgFranklin = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgFranklinQ {
      image: file(
        relativePath: {
          eq: "images/franklin-t-5-star-review-google-my-business-mdh-construction-plymouth-ma.png"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 100, width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="Jorg Steinhage 5-star review in Google My Business MDH Construction Plymouth, MA"
      className={className}
    />
  );
};

export default ImgFranklin;
