import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import About__Body from '../components/Page__About/About__Body';

const AboutPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query AboutPageQ {
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
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const customCrumbLabel = location.pathname.replace('/', '');
  const crumbCapitalized =
    customCrumbLabel.charAt(0).toUpperCase() + customCrumbLabel.slice(1);

  return (
    <Layout>
      <SEO
        title="About Us | Licensed General Contractor from Plymouth, MA"
        description="About Us | Licensed General Contractor from Plymouth, MA"
        canonicalLink="https://www.mdhconstruction.com/about/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="About MDH Construction"
        hTwo="A Reliable, Family Owned And Operated Business"
        alt="About MDH Construction"
      />
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator="/"
        crumbLabel={crumbCapitalized}
      />
      <About__Body />
    </Layout>
  );
};

export default AboutPage;
