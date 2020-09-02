import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgHomeAdvisorFive = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgHomeAdvisorFiveQ {
      image: file(
        relativePath: {
          eq: "images/ratings-homeadvisor-5-years-mdh-construction-plymouth-ma.png"
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
      alt="MDH Construction is a HomeAdvisor 5-year Screened & Approved construction company in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgHomeAdvisorFive;
