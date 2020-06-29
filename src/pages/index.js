import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Body from '../components/Layout/Body/Body';
import Home__Banner from '../components/Page__Home/Home__Banner/Home__Banner';
import Home__Trust from '../components/Page__Home/Home__Trust/Home__Trust';
import Home__Company from '../components/Page__Home/Home__Company/Home__Company';
import Home__About from '../components/Page__Home/Home__About/Home__About';
import Home__Services__Roofing from '../components/Page__Home/Home__Services/Home__Services__Roofing';
import Home__Services__Siding from '../components/Page__Home/Home__Services/Home__Services__Siding';
import Home__Services__Gutters from '../components/Page__Home/Home__Services/Home__Services__Gutters';
import Home__Services__Insulation from '../components/Page__Home/Home__Services/Home__Services__Insulation';
import Home__Reviews from '../components/Page__Home/Home__Reviews/Home__Reviews';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexPageQ {
      masthead: file(relativePath: { eq: "images/bg-img-thank-you.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      # texture: file(
      #   relativePath: { eq: "images/textures/gradient-squares.png" }
      # ) {
      #   childImageSharp {
      #     fluid(quality: 100, maxWidth: 1920) {
      #       ...GatsbyImageSharpFluid_withWebp
      #     }
      #   }
      # }
    }
  `);

  const imageDataHeader = data.masthead.childImageSharp.fluid;
  // const imageDataBody = data.texture.childImageSharp.fluid;

  return (
    <Layout>
      <SEO
        title="Thank you for submitting!"
        description="Thank you for submitting and showing interest! I look forward to working with you and providing value through digital marketing to your business."
        canonicalLink="https://johngrattan.com/thanks/"
      />
      <Home__Banner className="bg-img-home" />
      <Home__Trust />
      <Home__Company />
      <Home__Reviews id="home-reviews-section" />
      <Home__Services__Roofing />
      <Home__Services__Siding />
      <Home__Services__Gutters />
      <Home__Services__Insulation />
      {/* <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Thank You"
        alt="John Grattan SEO & Web Design Thank You page header background - pile of letters spelling out thank you"
      /> */}
      {/* <Body
        className="py-md-5 bg-texture-1"
        // fluid={imageDataBody}
        hTwo="I appreciate your interest!"
        alt="John Grattan SEO & Web Design Thank You background section"
        text="You will receive an email shortly."
        linkTo="/"
        icon="fas fa-3x fa-home"
        label="Return Home"
      /> */}
    </Layout>
  );
};

export default IndexPage;
