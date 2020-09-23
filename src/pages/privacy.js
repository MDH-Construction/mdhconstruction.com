import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Privacy__Body from '../components/Page__Privacy/Privacy__Body';

const PrivacyPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query PrivacyPageQ {
      masthead: file(
        relativePath: {
          eq: "images/privacy-policy-mdh-construction-general-contractor-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
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
        title="Privacy Policy | Your Privacy Is Critically Important To Us"
        description=""
        canonicalLink="https://www.mdhconstruction.com/privacy/"
      />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Privacy Policy"
        textSecondary="Please Read Our Privacy Policy Before Using Our Site"
        alt="Metal padlock signifying privacy among our users"
      />
      <Breadcrumb crumbs={crumbs} crumbSeparator="/" crumbLabel="Privacy" />
      <Privacy__Body />
    </Layout>
  );
};

export default PrivacyPage;
