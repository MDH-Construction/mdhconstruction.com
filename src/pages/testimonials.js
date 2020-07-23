import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Testimonials__Body from '../components/Page__Testimonials/Testimonials__Body';

const TestimonialsPage = () => {
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
    }
  `);

  const imageDataHeader = data.masthead.childImageSharp.fluid;

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
      <Testimonials__Body />
    </Layout>
  );
};

export default TestimonialsPage;
