import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgBBB = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgBBBQ {
      image: file(
        relativePath: {
          eq: "images/bbb-better-business-buraeu-logo-blue-mdh-construction-plymouth-ma.png"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 100, width: 100, height: 126) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="MDH Construction is an A+ Rated company by the Better Business Beraeu in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgBBB;
