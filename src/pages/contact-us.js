import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Contact__Body from '../components/Page__Contact/Contact__Body';

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query ContactPageQ {
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
        title="Contact Us | Licensed General Contractor from Plymouth, MA"
        description="Contact Us | Licensed General Contractor from Plymouth, MA"
        canonicalLink="https://www.mdhconstruction.com/contact-us/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Contact MDH Construction"
        hTwo="A Reliable, Family Owned And Operated Business"
        alt="Contact MDH Construction"
      />
      <Contact__Body />
    </Layout>
  );
};

export default ContactPage;
