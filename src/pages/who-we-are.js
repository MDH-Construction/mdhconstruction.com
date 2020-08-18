import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import WhoWeAre__Body from '../components/Page__About/WhoWeAre__Body';
import Body__Banner from '../components/Layout/Body/Body__Banner';

const WhoWeArePage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query WhoWeArePageQ {
      masthead: file(
        relativePath: {
          eq: "images/pages/about/who-we-are/who-we-are-general-contractor-mdh-construction-plymouth-massachusetts.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bgimg: file(
        relativePath: {
          eq: "images/pages/home/home-mdh-construction-truck-general-contractor-plymouth-massachusetts.jpg"
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
  const imageDataBodyBanner = data.bgimg.childImageSharp.fluid;

  const {
    breadcrumb: { crumbs },
  } = pageContext;

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
      <Breadcrumb crumbs={crumbs} crumbSeparator="/" crumbLabel="Who We Are" />
      <Body__Banner
        Tag="div"
        className=""
        fluid={imageDataBodyBanner}
        alt="MDH Construction Services"
        textLeftOne="Your Local"
        textLeftTwo="Construction Company"
        textRight={
          <p>
            MDH Construction is a{' '}
            <strong>
              full-service, licensed and insured, general contractor and
              construction company
            </strong>{' '}
            located in Plymouth, Massachusetts.
            <br />
            <br />
            We are a <strong>family owned and operated business</strong> with a
            wide range of services including of home improvement, remodeling,
            and commercial construction.
            <br />
            <br />
            Our service area covers much of eastern Massachusetts, including the{' '}
            <strong>Boston area, South Shore, and Cape Cod</strong>.
          </p>
        }
      />
      <WhoWeAre__Body />
    </Layout>
  );
};

export default WhoWeArePage;
