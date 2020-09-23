import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import WhatWeDo__Body from '../components/Page__About/WhatWeDo__Body';
import Body__Banner from '../components/Layout/Body/Body__Banner';

const WhatWeDoPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query WhatWeDoPageQ {
      masthead: file(
        relativePath: {
          eq: "images/pages/about/what-we-do/licensing-insurance-home-improvement-contractor-mdh-construction-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bgimg: file(
        relativePath: {
          eq: "images/pages/about/what-we-do/mdh-construction-massachusetts-boston-ma-plymouth-ma.jpg"
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
  const imageDataBodyBanner = data.bgimg.childImageSharp.fluid;

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout>
      <SEO
        title="Licensed Contractor, Full Liability Insurance | Plymouth, MA"
        description="MDH Construction is a fully licensed home improvement contractor & construction supervisor in Massachusetts. We also carry full-coverage liability insurance."
        canonicalLink="https://www.mdhconstruction.com/what-we-do/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Licensing and Insurance"
        textSecondary="Fully Licensed in Massachusetts With Full Coverage Liability Insurance"
        alt="An MDH Construction job site in Plymouth, MA working on a roof replacement."
      />
      <Breadcrumb crumbs={crumbs} crumbSeparator="/" crumbLabel="What We Do" />
      <Body__Banner
        Tag="div"
        className=""
        fluid={imageDataBodyBanner}
        alt="A map of Massachusetts, showing where MDH Construction services home and business owners."
        textLeftOne="Licensed contractor in"
        textLeftTwo="Massachusetts"
        textRight={
          <p>
            MDH Construction’s licensing status{' '}
            <strong>provides proof that we meet industry training</strong>{' '}
            standards for general contracting and construction supervision.
            <br />
            <br />
            <strong>
              These licenses also allow MDH Construction to pull the necessary
              permits to complete a project
            </strong>{' '}
            — something an unlicensed contractor is unable to do. Furthermore,
            our licenses hold us responsible for ensuring that our work meets
            local building codes.
          </p>
        }
      />
      <WhatWeDo__Body />
    </Layout>
  );
};

export default WhatWeDoPage;
