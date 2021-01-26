import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgServicesWindows = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgServicesWindowsQ {
      image: file(
        relativePath: {
          eq: "images/pages/services/services-windows-doors-mdh-construction-plymouth-massachusetts.jpg"
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
      alt="Window and door services such as window installation, interior and exterior door installation by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgServicesWindows;
