import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgWindowReplacement = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgWindowReplacementQ {
      image: file(
        relativePath: {
          eq: "images/pages/home/home-mdh-construction-window-replacement-plymouth-massachusetts.jpg"
        }
      ) {
        id
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="Home improvement services include window and door replacement, deck and porch construction, roof and siding installation and more by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgWindowReplacement;
