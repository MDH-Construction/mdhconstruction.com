import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Reviews__Body from '../components/Page__Reviews/Reviews__Body';

const ReviewsPage = () => {
  const data = useStaticQuery(graphql`
    query ReviewsPageQ {
      masthead: file(
        relativePath: {
          eq: "images/reviews-mdh-construction-general-contractor-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageDataHeader = data.masthead.childImageSharp.fluid;

  return (
    <Layout>
      <SEO
        title="Reviews | Licensed General Contractor from Plymouth, MA"
        description="Reviews | Licensed General Contractor from Plymouth, MA"
        canonicalLink="https://www.mdhconstruction.com/reviews/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Reviews of MDH Construction"
        hTwo="We always guarantee 100% customer satisfaction"
        alt="Reviews of MDH Construction"
      />
      <Reviews__Body />
    </Layout>
  );
};

export default ReviewsPage;
