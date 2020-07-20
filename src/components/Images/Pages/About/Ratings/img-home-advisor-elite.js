import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgHomeAdvisorElite = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgHomeAdvisorEliteQ {
      image: file(
        relativePath: {
          eq: "images/ratings-homeadvisor-elite-service-mdh-construction-plymouth-ma.png"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 100, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="MDH Construction is a HomeAdvisor Elite Service rated construction company in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgHomeAdvisorElite;
