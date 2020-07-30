import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgBBBTrans = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgBBBTransQ {
      image: file(
        relativePath: {
          eq: "images/bbb-better-business-buraeu-logo-trans-mdh-construction-plymouth-ma.png"
        }
      ) {
        id
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="MDH Construction is an A+ Rated company by the Better Business Beraeu in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgBBBTrans;
