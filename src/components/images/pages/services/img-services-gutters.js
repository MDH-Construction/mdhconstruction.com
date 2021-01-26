import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgServicesGutters = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgServicesGuttersQ {
      image: file(
        relativePath: {
          eq: "images/pages/services/services-seamless-gutters-mdh-construction-plymouth-massachusetts.jpg"
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
      alt="Gutter services such as gutter installation, cleaning, repair, seamless gutter installation, downspout installation by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgServicesGutters;
