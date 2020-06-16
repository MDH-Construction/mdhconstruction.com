import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import About__Body from '../components/Page__About/About__Body';

const AboutPage = () => {
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
      <About__Body />
    </Layout>
  );
};

export default AboutPage;
