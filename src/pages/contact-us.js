import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact__Body from '../components/Page__Contact/Contact__Body';
import Header__Contact from '../components/Layout/Header/Header__Contact';

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
        title="Contact Us Today For a FREE In-Home Estimate | Plymouth, MA"
        description="Please feel free to give us a call, send us an email, or fill out our contact form and we'll be sure to answer any of your questions, comments, or concerns."
        canonicalLink="https://www.mdhconstruction.com/contact-us"
      />
      <Header__Contact
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Contact MDH Construction"
        hTwo="Fill Out Our Form Or Give Us A Call At (774) 269-6002"
        alt="Contact MDH Construction"
      />
      <Contact__Body />
    </Layout>
  );
};

export default ContactPage;
