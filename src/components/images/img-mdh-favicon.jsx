import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgMdhFavicon = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgMdhFaviconQ {
      image: file(relativePath: { eq: "images/favicon-mdh-construction.png" }) {
        id
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="MDH Construction, your local general contractor located in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgMdhFavicon;
