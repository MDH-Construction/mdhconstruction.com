import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgServicesDecks = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgServicesDecksQ {
      image: file(
        relativePath: {
          eq: "images/pages/services/services-decks-porches-mdh-construction-plymouth-massachusetts.jpg"
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
      alt="Outdoor living construction services such as deck, porch, fencing, and retainer wall installation by MDH Construction in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgServicesDecks;
