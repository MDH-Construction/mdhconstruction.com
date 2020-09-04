import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgBBBAcc = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImgBBBAccQ {
      image: file(
        relativePath: {
          eq: "images/ratings-bbb-better-business-buraeu-accreditation-mdh-construction-plymouth-ma.png"
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
      alt="MDH Construction is an accredited construction company in Plymouth, MA with the Better Business Buraeu BBB since 9/2/2015"
      className={className}
    />
  );
};

export default ImgBBBAcc;
