import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgGutterServices = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgGutterServicesQ {
      image: file(
        relativePath: {
          eq: "images/exterior-construction-services-gutters-downspouts-mdh-construction-plymouth-ma-large.jpg"
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
      alt="Exterior construction services like gutters and downspouts by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgGutterServices;
