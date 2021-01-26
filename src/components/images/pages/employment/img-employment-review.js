import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgEmploymentReview = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgEmploymentReviewQ {
      image: file(
        relativePath: {
          eq: "images/employment-indeed-5-star-review-mdh-construction-general-contractor-plymouth-ma.jpg"
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
      alt="Employment job review from Indeed for MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgEmploymentReview;
