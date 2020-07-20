import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Missing__Body from '../components/Page__Missing/Missing__Body';

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query NotFoundPageQ {
      masthead: file(
        relativePath: {
          eq: "images/404-error-mdh-construction-general-contractor-plymouth-ma.jpg"
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
        title="Something Went Wrong! Page Cannot Be Found | MDH Construction"
        description="404 Not Found | Licensed General Contractor from Plymouth, MA"
        canonicalLink="https://www.mdhconstruction.com/404/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Something Went Wrong!"
        hTwo="This page cannot be found"
        alt="404 Error - Oops! This Page Cannot Be Found"
      />
      <Missing__Body />
    </Layout>
  );
};

export default NotFoundPage;
