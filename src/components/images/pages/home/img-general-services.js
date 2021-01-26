import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgGeneralServices = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgGeneralServicesQ {
      image: file(
        relativePath: {
          eq: "images/general-contractor-services-mdh-construction-plymouth-ma-large.jpg"
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
      alt="General contractor services like full construction, new additions by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgGeneralServices;
