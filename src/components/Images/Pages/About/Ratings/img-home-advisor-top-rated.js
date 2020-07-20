import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgHomeAdvisorTop = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgHomeAdvisorTopQ {
      image: file(
        relativePath: {
          eq: "images/ratings-homeadvisor-top-rated-mdh-construction-plymouth-ma.png"
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
      alt="MDH Construction is a HomeAdvisor Top Rated construction company in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgHomeAdvisorTop;
