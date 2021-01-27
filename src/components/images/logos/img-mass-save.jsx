import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgMassSave = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgMassSaveQ {
      image: file(
        relativePath: {
          eq: "images/mass-save-home-energy-services-program-logo-white-mdh-construction-plymouth-ma.jpg"
        }
      ) {
        id
        childImageSharp {
          fixed(quality: 90, width: 150, height: 126) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="MDH Construction is a Mass Save Energy Services program partner doing home insulation in Plymouth, MA"
      className={className}
    />
  );
};

export default ImgMassSave;
