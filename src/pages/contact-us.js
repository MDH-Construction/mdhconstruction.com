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
          fluid(quality: 90, maxWidth: 1920) {
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
        description="Let's talk about your next project! Call us at (774) 269-6002, send an email, or complete our form to receive a free quote, make an appointment and get started!"
        canonicalLink="https://www.mdhconstruction.com/contact-us"
      />
      <Header__Contact
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Contact MDH Construction"
        textSecondary="Complete Our Form Or Call Us At (774) 269-6002"
        alt="Contact MDH Construction"
      />
      <Contact__Body />
    </Layout>
  );
};

export default ContactPage;
