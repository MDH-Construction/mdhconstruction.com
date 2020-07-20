import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Helmet from 'react-helmet';
import Header from '../components/Layout/Header/Header';
import Thanks__Body from '../components/Page__Thanks/Thanks__Body';

const ThanksPage = () => {
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
      <Thanks__Body />
    </Layout>
  );
};

export default ThanksPage;
