import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgFiveStarReviews = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgFiveStarReviewsQ {
      image: file(
        relativePath: {
          eq: "images/pages/home/home-mdh-construction-5-star-reviews-plymouth-massachusetts.jpg"
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
      alt="MDH Construction 5-star reviews for general contracting and home improvement projects in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgFiveStarReviews;
