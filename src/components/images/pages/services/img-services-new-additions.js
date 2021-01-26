import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgServicesNewAdditions = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgServicesNewAdditionsQ {
      image: file(
        relativePath: {
          eq: "images/pages/services/services-new-additions-mdh-construction-plymouth-massachusetts.jpg"
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
      alt="New addition construction services such as additional rooms, living spaces, attached garages, and new floors by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgServicesNewAdditions;
