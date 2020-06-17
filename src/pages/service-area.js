import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import ServiceArea__Body from '../components/Page__About/ServiceArea__Body';

const ServiceAreaPage = () => {
  const data = useStaticQuery(graphql`
    query ServiceAreaPageQ {
      masthead: file(
        relativePath: {
          eq: "images/mdh-construction-service-area-massachusetts-boston-ma-plymouth-ma.jpg"
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
        title="Service Area | Licensed General Contractor from Plymouth, MA"
        description="Service Area | Licensed General Contractor from Plymouth, MA"
        canonicalLink="https://www.mdhconstruction.com/service-area/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Service Area"
        hTwo="A Reliable, Family Owned And Operated Business"
        alt="Service Area"
      />
      <ServiceArea__Body />
    </Layout>
  );
};

export default ServiceAreaPage;
