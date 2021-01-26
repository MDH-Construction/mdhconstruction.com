import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgBBB = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgBBBQ {
      image: file(
        relativePath: {
          eq: "images/bbb-better-business-bureau-logo-blue-mdh-construction-plymouth-ma.png"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 90, width: 100, height: 126) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="MDH Construction is an A+ Rated company by the Better Business Bureau in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgBBB;
