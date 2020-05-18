import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgStatsSeoFirstPage = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgStatsSeoFirstPageQ {
      image: file(
        relativePath: { eq: "images/stats-seo-first-page-results.jpg" }
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
      alt="75% of users don’t even scroll past the first page of results - Source: HubSpot"
      className={className}
    />
  );
};

export default ImgStatsSeoFirstPage;
