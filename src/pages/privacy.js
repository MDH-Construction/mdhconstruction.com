import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Privacy__Body from '../components/Page__Privacy/Privacy__Body';

const PrivacyPage = () => {
  const data = useStaticQuery(graphql`
    query PrivacyPageQ {
      masthead: file(
        relativePath: {
          eq: "images/privacy-policy-mdh-construction-general-contractor-plymouth-ma.jpg"
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
        title="Privacy Policy | Your Privacy Is Critically Important To Us"
        description="Privacy Policy | Your Privacy Is Critically Important To Us"
        canonicalLink="https://www.mdhconstruction.com/privacy/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Privacy Policy"
        hTwo="Your privacy is critically important to us"
        alt="Privacy"
      />
      <Privacy__Body />
    </Layout>
  );
};

export default PrivacyPage;
