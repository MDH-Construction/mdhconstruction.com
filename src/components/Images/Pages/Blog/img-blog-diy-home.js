import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgBlogDiyHome = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgBlogDiyHomeQ {
      image: file(
        relativePath: {
          eq: "images/diy-home-improvement-mdh-construction-plymouth-ma.jpg"
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
      alt="DIY home improvement blog by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgBlogDiyHome;
