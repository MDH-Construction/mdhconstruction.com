import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Ratings__Body from '../components/Page__About/Ratings__Body';

const RatingsPage = () => {
  const data = useStaticQuery(graphql`
    query RatingsPageQ {
      masthead: file(
        relativePath: {
          eq: "images/about-mdh-construction-general-contractor-plymouth-ma.jpg"
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
        title="Ratings And Memberships | Licensed General Contractor from Plymouth, MA"
        description="Ratings And Memberships | Licensed General Contractor from Plymouth, MA"
        canonicalLink="https://www.mdhconstruction.com/ratings-and-memberships/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Ratings And Memberships"
        hTwo="A Reliable, Family Owned And Operated Business"
        alt="Ratings And Memberships"
      />
      <Ratings__Body />
    </Layout>
  );
};

export default RatingsPage;
