import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Employment__Body from '../components/Page__Employment/Employment__Body';

const EmploymentPage = () => {
  const data = useStaticQuery(graphql`
    query EmploymentPageQ {
      masthead: file(
        relativePath: {
          eq: "images/employment-mdh-construction-general-contractor-plymouth-ma.jpg"
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
        title="Employment | Competitive Pay, Bonuses & Incentives, PTO"
        description="If you have a set of skills that relate to the home improvement, remodeling, or commercial construction industries, we want to hear from you!"
        canonicalLink="https://www.mdhconstruction.com/employment/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Employment at MDH Construction"
        hTwo="Join Our Team of Expert Tradesmen"
        alt="About MDH Construction"
      />
      <Employment__Body />
    </Layout>
  );
};

export default EmploymentPage;
