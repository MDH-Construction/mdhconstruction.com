import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgServicesPainting = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgServicesPaintingQ {
      image: file(
        relativePath: {
          eq: "images/pages/services/services-exterior-interior-house-painting-mdh-construction-plymouth-massachusetts.jpg"
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
      alt="Other services such as interior & exterior painting, construction management, and debris clean up by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgServicesPainting;
