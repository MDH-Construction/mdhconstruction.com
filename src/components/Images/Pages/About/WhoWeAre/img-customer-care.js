import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgCustomerCare = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgCustomerCareQ {
      image: file(
        relativePath: {
          eq: "images/pages/about/who-we-are/customer-care-general-contractor-mdh-construction-plymouth-ma.jpg"
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
      alt="MDH Construction makes unmatched customer care a top priority while servicing Plymouth, MA"
      className={className}
    />
  );
};

export default ImgCustomerCare;
