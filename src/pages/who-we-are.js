import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import WhoWeAre__Body from '../components/Page__About/WhoWeAre__Body';

const WhoWeArePage = () => {
  const data = useStaticQuery(graphql`
    query WhoWeArePageQ {
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
        title="Who We Are | Licensed General Contractor from Plymouth, MA"
        description="Who We Are | Licensed General Contractor from Plymouth, MA"
        canonicalLink="https://www.mdhconstruction.com/who-we-are/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Who We Are"
        hTwo="A Reliable, Family Owned And Operated Business"
        alt="Who We Are"
      />
      <WhoWeAre__Body />
    </Layout>
  );
};

export default WhoWeArePage;
