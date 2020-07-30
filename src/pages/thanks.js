import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Helmet from 'react-helmet';
import Header from '../components/Layout/Header/Header';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import Thanks__Body from '../components/Page__Thanks/Thanks__Body';

const ThanksPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query ThanksPageQ {
      masthead: file(
        relativePath: {
          eq: "images/reviews-google-facebook-home-advisor-mdh-construction-plymouth-ma.jpg"
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
  const customCrumbLabel = location.pathname.replace('/', '');
  const crumbCapitalized =
    customCrumbLabel.charAt(0).toUpperCase() + customCrumbLabel.slice(1);

  return (
    <Layout>
      <SEO
        title="Thanks | 5-Star Reviews on Google, FB, HomeAdvisor"
        description="Thanks | Licensed General Contractor from Plymouth, MA"
        canonicalLink="https://www.mdhconstruction.com/thanks/"
      />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Thanks"
        hTwo="Thank You"
        alt="Thanks"
      />
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator="/"
        crumbLabel={crumbCapitalized}
      />
      <Thanks__Body />
    </Layout>
  );
};

export default ThanksPage;
