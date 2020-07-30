import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import Ratings__Body from '../components/Page__About/Ratings__Body';

const RatingsPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query RatingsPageQ {
      masthead: file(
        relativePath: {
          eq: "images/new-home-construction-ratings-memberships-mdh-construction-plymouth-ma.jpg"
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
  const {
    breadcrumb: { crumbs },
  } = pageContext;

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
        hTwo="Better Business Bureau, Mass Save, Home Advisor, & More"
        alt="Ratings And Memberships"
      />
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator="/"
        crumbLabel="Ratings and Memberships"
      />
      <Ratings__Body />
    </Layout>
  );
};

export default RatingsPage;
