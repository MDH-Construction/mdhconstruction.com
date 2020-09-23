import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderContact from '../components/Layout/Header/Header__Contact';
import ThankYou__Body from '../components/Page__ThankYou/ThankYou__Body';

const ThankYouPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query ThankYouPageQ {
      masthead: file(
        relativePath: {
          eq: "images/reviews-google-facebook-home-advisor-mdh-construction-plymouth-ma.jpg"
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
        title="Thank You! | MDH Construction | Plymouth, MA"
        description=""
        canonicalLink="https://www.mdhconstruction.com/thank-you/"
      />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <HeaderContact
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Thank You!"
        textSecondary="We will be contacting you shortly"
        alt="Thanks"
        btnlabel="Return Home"
      />
      <Breadcrumb crumbs={crumbs} crumbSeparator="/" crumbLabel="Thank You" />
      <ThankYou__Body />
    </Layout>
  );
};

export default ThankYouPage;
