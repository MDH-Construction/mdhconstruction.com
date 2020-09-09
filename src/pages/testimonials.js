import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
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
          fluid(quality: 90, maxWidth: 1920) {
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
  const customCrumbLabel = location.pathname.replace('/', '');
  const crumbCapitalized =
    customCrumbLabel.charAt(0).toUpperCase() + customCrumbLabel.slice(1);

  return (
    <Layout>
      <SEO
        title="5-Star Ratings - Google, Facebook, HomeAdvisor | Plymouth, MA"
        description="Supported by our BBB A+ rating and 5-star reviews on Google, Facebook, HomeAdvisor, and Angie's List, MDH Construction is consistently a top-rated contractor."
        canonicalLink="https://www.mdhconstruction.com/testimonials/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Testimonials"
        textSecondary="5-Star Reviews on Google, Facebook, BBB, HomeAdvisor, Angie's List"
        alt="5-Star Reviews on Google, Facebook, BBB, HomeAdvisor, Angie's List"
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
        alt="A happy home owner giving the thumbs up because she is satisfied with MDH Construction's customer service."
        textLeftOne="Read our"
        textLeftTwo="5-star reviews!"
        textRight={
          <p>
            At <Link to="/who-we-are">MDH Construction</Link> we establish{' '}
            <strong>lasting relationships with our clients</strong> because of
            our high-quality and reliable service. When you work with us you’ll
            become a customer for life, because superior craftsmanship and
            unmatched customer care are our top priorities.
            <br />
            <br />
            Supported by our{' '}
            <Link to="/ratings-and-memberships">
              Better Business Bureau A+ rating
            </Link>{' '}
            —{' '}
            <strong>
              as well as 5-star customer reviews on Google, Facebook,
              HomeAdvisor, and Angie's List
            </strong>{' '}
            — MDH Construction is consistently a top-rated contractor of
            superior home improvement, remodeling, and{' '}
            <Link to="/services">commercial construction services</Link>.
          </p>
        }
      />
      <Testimonials__Body />
    </Layout>
  );
};

export default TestimonialsPage;
