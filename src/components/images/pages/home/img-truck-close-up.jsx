import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgTruckCloseUp = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgTruckCloseUpQ {
      image: file(
        relativePath: {
          eq: "images/pages/home/home-mdh-construction-truck-close-up-plymouth-massachusetts.jpg"
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
      alt="MDH Construction truck close up during a home improvement project in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgTruckCloseUp;
