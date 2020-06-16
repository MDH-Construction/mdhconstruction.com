import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import WhatWeDo__Body from '../components/Page__About/WhatWeDo__Body';

const WhatWeDoPage = () => {
  const data = useStaticQuery(graphql`
    query WhatWeDoPageQ {
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
        title="What We Do | Licensed General Contractor from Plymouth, MA"
        description="What We Do | Licensed General Contractor from Plymouth, MA"
        canonicalLink="https://www.mdhconstruction.com/what-we-do/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="What We Do"
        hTwo="A Reliable, Family Owned And Operated Business"
        alt="What We Do"
      />
      <WhatWeDo__Body />
    </Layout>
  );
};

export default WhatWeDoPage;
