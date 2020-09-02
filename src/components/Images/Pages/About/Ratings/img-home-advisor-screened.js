import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgHomeAdvisorScreened = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgHomeAdvisorScreenedQ {
      image: file(
        relativePath: {
          eq: "images/ratings-homeadvisor-screened-approved-mdh-construction-plymouth-ma.png"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 90, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="MDH Construction is a HomeAdvisor Screened & Approved construction company in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgHomeAdvisorScreened;
