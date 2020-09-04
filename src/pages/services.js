import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Body__Banner from '../components/Layout/Body/Body__Banner';
import Services__Body from '../components/Page__Services/Services__Body';

const ServicesPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query ServicesPageQ {
      masthead: file(
        relativePath: {
          eq: "images/construction-services-roofing-siding-mdh-construction-plymouth-ma.jpg"
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
          eq: "images/pages/services/services-tools-general-contractor-mdh-construction-plymouth-massachusetts.jpg"
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
  const customCrumbLabel = location.pathname.replace('/', '');
  const crumbCapitalized =
    customCrumbLabel.charAt(0).toUpperCase() + customCrumbLabel.slice(1);

  return (
    <Layout>
      <SEO
        title="Decks, Gutters, Insulation, Remodel & More | Plymouth, MA"
        description="MDH Construction has the knowledge & expertise to handle any home improvement, remodeling, or commercial construction project. Call 774-269-6002 for free quotes"
        canonicalLink="https://www.mdhconstruction.com/services"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Construction Services"
        textSecondary="Gutters, Insulation, Decks, Windows, Doors & More"
        alt="MDH Construction Services"
      />
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator="/"
        crumbLabel={crumbCapitalized}
      />
      <Body__Banner
        Tag="div"
        className=""
        fluid={imageDataBodyBanner}
        alt="MDH Construction Services"
        textLeftOne="Got service questions?"
        textLeftTwo="Give us a call!"
        textRight={
          <p>
            MDH Construction has the knowledge and expertise to handle any{' '}
            <strong>
              home improvement, remodeling, or commercial construction project
            </strong>
            .
            <br />
            <br />
            Whether the job is large or small, we take great pride in our
            craftsmanship and want to help you meet your goals.
            <br />
            <br />
            Our <strong>
              highly skilled professionals can assist you
            </strong>{' '}
            with a broad range of services, including:
          </p>
        }
      />
      <Services__Body />
    </Layout>
  );
};

export default ServicesPage;
