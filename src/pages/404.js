import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import Missing__Body from '../components/Page__Missing/Missing__Body';

const NotFoundPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query NotFoundPageQ {
      masthead: file(
        relativePath: {
          eq: "images/404-error-mdh-construction-general-contractor-plymouth-ma.jpg"
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
  const customCrumbLabel = location.pathname.replace('/', '');
  const crumbCapitalized =
    customCrumbLabel.charAt(0).toUpperCase() + customCrumbLabel.slice(1);

  return (
    <Layout>
      <SEO
        title="Something Went Wrong! Page Cannot Be Found | MDH Construction"
        description=""
        canonicalLink="https://www.mdhconstruction.com/404"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Something Went Wrong!"
        textSecondary="This page cannot be found"
        alt="404 Error - Oops! This Page Cannot Be Found"
      />
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator="/"
        crumbLabel={crumbCapitalized}
      />
      <Missing__Body />
    </Layout>
  );
};

export default NotFoundPage;
