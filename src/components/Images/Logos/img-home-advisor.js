import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgHomeAdvisor = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgHomeAdvisorQ {
      image: file(
        relativePath: {
          eq: "images/homeadvisor-top-rated-logo-white-mdh-construction-plymouth-ma.png"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 100, width: 112, height: 126) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="MDH Construction is a top-rated HomeAdvisor construction company in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgHomeAdvisor;
