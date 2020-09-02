import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgJessicaLynneDeck = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgJessicaLynneDeckQ {
      image: file(
        relativePath: {
          eq: "images/gallery-imgs/decks/Deck-Construction-Deck-Installation-MDH-Construction-Plymouth-Massachusetts-11.jpg"
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
      alt="5-star review on Facebook for deck construction by MDH Construction Plymouth, MA"
      className={className}
    />
  );
};

export default ImgJessicaLynneDeck;
