import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgEmploymentHelpWanted = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgEmploymentHelpWantedQ {
      image: file(
        relativePath: {
          eq: "images/employment-help-wanted-mdh-construction-general-contractor-plymouth-ma.jpg"
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
      alt="Employment job opportunities with MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgEmploymentHelpWanted;
