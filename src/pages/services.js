import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Services__Body from '../components/Page__Services/Services__Body';

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query ServicesPageQ {
      masthead: file(
        relativePath: {
          eq: "images/construction-services-roofing-siding-mdh-construction-plymouth-ma.jpg"
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
        title="Services | Licensed General Contractor from Plymouth, MA"
        description="Services | Licensed General Contractor from Plymouth, MA"
        canonicalLink="https://www.mdhconstruction.com/about/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Construction Services"
        hTwo="Gutters, Insulation, Decks, Windows, Doors & More"
        alt="MDH Construction Services"
      />
      <Services__Body />
    </Layout>
  );
};

export default ServicesPage;
