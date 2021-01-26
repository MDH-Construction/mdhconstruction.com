import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgGetFreeQuote = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgGetFreeQuoteQ {
      image: file(
        relativePath: {
          eq: "images/pages/home/home-mdh-construction-get-free-quote-plymouth-massachusetts.jpg"
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
      alt="MDH Construction offers free quotes for general contracting and home improvement projects in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgGetFreeQuote;
