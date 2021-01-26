import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgArrowLeft = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgArrowLeftQ {
      image: file(
        relativePath: {
          eq: "images/pages/contact/arrow-left-mdh-construction-plymouth-ma.png"
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
      alt="Arrow pointing to our contact form to request a free in-home quote for your next construction project"
      className={className}
    />
  );
};

export default ImgArrowLeft;
