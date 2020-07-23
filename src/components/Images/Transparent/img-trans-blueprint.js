import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgTransBlueprint = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgTransBlueprintQ {
      image: file(
        relativePath: {
          eq: "images/blueprint-transparent-mdh-construction-general-contractor-plymouth-ma.png"
        }
      ) {
        id
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="House construction blueprint by MDH Construction, a general contractor in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgTransBlueprint;
