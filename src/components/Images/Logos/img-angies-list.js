import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgAngiesList = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgAngiesListQ {
      image: file(
        relativePath: {
          eq: "images/angies-list-a-rating-mdh-construction-plymouth-ma.png"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 100, width: 128, height: 126) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="MDH Construction has an A Rating with Angies List in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgAngiesList;
