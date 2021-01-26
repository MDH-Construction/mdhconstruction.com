import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgJorgInsulation = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgJorgInsulationQ {
      image: file(
        relativePath: {
          eq: "images/pages/testimonials/Mass-Save-Home-Insulation-Program-MDH-Construction-Plymouth-Massachusetts.jpg"
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
      alt="Jorg Steinhage 5-star review on Google My Business for insulation by MDH Construction Plymouth, MA"
      className={className}
    />
  );
};

export default ImgJorgInsulation;
