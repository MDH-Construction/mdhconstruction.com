import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Body__Banner from '../components/Layout/Body/Body__Banner';
import Ratings__Body from '../components/Page__About/Ratings__Body';

const RatingsPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query RatingsPageQ {
      masthead: file(
        relativePath: {
          eq: "images/new-home-construction-ratings-memberships-mdh-construction-plymouth-ma.jpg"
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
          eq: "images/pages/about/ratings/mdh-construction-gold-stars-plymouth-massachusetts.jpg"
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
        title="Rated A+ on BBB, Top HomeAdvisor, Mass Save | Plymouth, MA"
        description="The service quality is supported by our business ratings, certifications, and professional memberships with BBB, Mass Save, HomeAdvisor, Angie's List, & more."
        canonicalLink="https://www.mdhconstruction.com/ratings-and-memberships/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Ratings And Memberships"
        textSecondary="Better Business Bureau, Mass Save, Home Advisor, & More"
        alt="An MDH Construction job site in Plymouth, MA building a new home."
      />
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator="/"
        crumbLabel="Ratings and Memberships"
      />
      <Body__Banner
        Tag="div"
        className=""
        fluid={imageDataBodyBanner}
        alt="Gold stars on a wooden table"
        textLeftOne="A local company"
        textLeftTwo="you can rely on"
        textRight={
          <p>
            At MDH Construction, we take great pride in our craftsmanship and
            customer care —{' '}
            <strong>our reputation means everything to us</strong>
            .
            <br />
            <br />
            MDH Construction is{' '}
            <strong>consistently a top-rated provider</strong> of superior home
            improvement, remodeling, and commercial construction services.
            <br />
            <br />
            The quality of our service is supported by our{' '}
            <strong>
              business ratings, certifications, and professional memberships
            </strong>
            .
          </p>
        }
      />
      <Ratings__Body />
    </Layout>
  );
};

export default RatingsPage;
