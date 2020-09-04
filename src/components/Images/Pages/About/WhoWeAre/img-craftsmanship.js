import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgCraftsmanship = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgCraftsmanshipQ {
      image: file(
        relativePath: {
          eq: "images/pages/about/who-we-are/superior-craftsmanship-general-contractor-mdh-construction-plymouth-ma.jpg"
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
      alt="MDH Construction guarantees superior craftsmanship from our professionally trained staff in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgCraftsmanship;
