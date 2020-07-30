import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import Testimonials__Body from '../components/Page__Testimonials/Testimonials__Body';
import Body__Banner from '../components/Layout/Body/Body__Banner';

const TestimonialsPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query TestimonialsPageQ {
      masthead: file(
        relativePath: {
          eq: "images/reviews-google-facebook-home-advisor-mdh-construction-plymouth-ma.jpg"
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
          eq: "images/pages/testimonials/testimomials-thumbs-up-general-contractor-mdh-construction-plymouth-massachusetts.png"
        }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
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
  const customCrumbLabel = location.pathname.replace('/', '');
  const crumbCapitalized =
    customCrumbLabel.charAt(0).toUpperCase() + customCrumbLabel.slice(1);

  return (
    <Layout>
      <SEO
        title="Testimonials | 5-Star Reviews on Google, FB, HomeAdvisor"
        description="Testimonials | Licensed General Contractor from Plymouth, MA"
        canonicalLink="https://www.mdhconstruction.com/testimonials/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Testimonials"
        hTwo="5-Star Reviews on Google, Facebook, BBB, HomeAdvisor, Angie's List"
        alt="Testimonials"
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
        textLeftOne="Check out our"
        textLeftTwo="5-star reviews!"
        textRight={
          <p>
            At MDH Construction we establish lasting relationships with our
            clients because of our high-quality and reliable service. When you
            work with us you’ll become a customer for life, because superior
            craftsmanship and unmatched customer care are our top priorities.
            <br />
            <br />
            Supported by our Better Business Bureau A+ rating — as well as
            customer reviews on Google, Facebook, HomeAdvisor, and Angie's List
            — MDH Construction is consistently a top-rated contractor of
            superior home improvement, remodeling, and commercial construction
            services.
          </p>
        }
      />
      <Testimonials__Body />
    </Layout>
  );
};

export default TestimonialsPage;
