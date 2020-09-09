import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Body__Banner from '../components/Layout/Body/Body__Banner';
import ServiceArea__Body from '../components/Page__About/ServiceArea__Body';

const ServiceAreaPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query ServiceAreaPageQ {
      masthead: file(
        relativePath: {
          eq: "images/pages/about/service-area/mdh-construction-service-area-massachusetts-boston-cape-cod-plymouth.jpg"
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
          eq: "images/pages/about/service-area/service-area-massachusetts-seal-mdh-construction-plymouth-ma.png"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
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
        title="Service Areas: Plymouth, MA, Plymouth County, Bristol County"
        description="MDH Construction's office is located at 186 South Meadow Rd #2, Plymouth, MA 02360 and we service Plymouth County, South Shore, Cape Cod, and the Boston area."
        canonicalLink="https://www.mdhconstruction.com/service-area/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Service Area in Massachusetts"
        textSecondary="Plymouth, Bristol, Barnstable County, & More"
        alt="Map of Massachusetts, showing MDH Construction's service areas from Boston, MA to Plymouth, MA."
      />
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator="/"
        crumbLabel="Service Area"
      />
      <Body__Banner
        Tag="div"
        className=""
        fluid={imageDataBodyBanner}
        alt="Massachusetts seal logo"
        textLeftOne="Centrally located in"
        textLeftTwo="Plymouth, MA"
        textRight={
          <p>
            MDH Construction is located on the coast of Massachusetts, with an
            office at 186 South Meadow Rd #2, Plymouth, MA 02360. We service the{' '}
            <strong>
              South Shore, Cape Cod towns (including all local villages) and the
              Boston area
            </strong>
            .
            <br />
            <br />
            If you have any questions about servicing your town/city, please
            give us a call at <a href="tel:+17742696002">(774) 269-6002</a>.
          </p>
        }
      />
      <ServiceArea__Body />
    </Layout>
  );
};

export default ServiceAreaPage;
