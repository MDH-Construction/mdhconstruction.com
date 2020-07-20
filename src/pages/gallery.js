import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Gallery from '@browniebroke/gatsby-image-gallery';
import '@browniebroke/gatsby-image-gallery/dist/style.css';
import { Container } from 'react-bootstrap';

const GalleryPage = () => {
  const data = useStaticQuery(graphql`
    query GalleryPageQ {
      beforeAfterImages: allFile(
        filter: {
          relativeDirectory: { eq: "images/gallery-imgs/before-after" }
        }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              thumb: fluid(maxWidth: 500, maxHeight: 300) {
                ...GatsbyImageSharpFluid_withWebp
              }
              full: fluid(quality: 100, maxWidth: 1024) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      deckImages: allFile(
        filter: { relativeDirectory: { eq: "images/gallery-imgs/decks" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              thumb: fluid(maxWidth: 270, maxHeight: 270) {
                ...GatsbyImageSharpFluid_withWebp
              }
              full: fluid(quality: 100, maxWidth: 1024) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      kitchenImages: allFile(
        filter: { relativeDirectory: { eq: "images/gallery-imgs/kitchens" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              thumb: fluid(maxWidth: 270, maxHeight: 270) {
                ...GatsbyImageSharpFluid_withWebp
              }
              full: fluid(quality: 100, maxWidth: 1024) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      bathroomImages: allFile(
        filter: { relativeDirectory: { eq: "images/gallery-imgs/bathrooms" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              thumb: fluid(maxWidth: 270, maxHeight: 270) {
                ...GatsbyImageSharpFluid_withWebp
              }
              full: fluid(quality: 100, maxWidth: 1024) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      masthead: file(
        relativePath: {
          eq: "images/our-work-gallery-mdh-construction-general-contractor-plymouth-ma.jpg"
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

  const beforeAfterImages = data.beforeAfterImages.edges.map(
    ({ node }) => node.childImageSharp
  );
  const deckImages = data.deckImages.edges.map(
    ({ node }) => node.childImageSharp
  );
  const kitchenImages = data.kitchenImages.edges.map(
    ({ node }) => node.childImageSharp
  );
  const bathroomImages = data.bathroomImages.edges.map(
    ({ node }) => node.childImageSharp
  );

  return (
    <Layout>
      <SEO
        title="Gallery | Licensed General Contractor from Plymouth, MA"
        description="Gallery | Licensed General Contractor from Plymouth, MA"
        canonicalLink="https://www.mdhconstruction.com/gallery/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Construction Project Gallery"
        hTwo="See Our Completed Decks and Remodels"
        alt="Gallery MDH Construction"
      />
      <section className="page-section" id="gallery-page">
        <Container className="text-center">
          <p className="lead font-weight-bold">
            We take great pride in our work and love to display our completed
            construction projects!
          </p>
          <p className="lead font-weight-bold mb-5 pb-5">
            Take a look at our gallery to get ideas for your next project or
            just to see our craftsmanship.
          </p>
        </Container>
        <Container className="mb-5 pb-5">
          <h2>Before & After</h2>
          <Gallery images={beforeAfterImages} />
        </Container>
        <Container className="mb-5 pb-5">
          <h2>Deck Construction</h2>
          <Gallery images={deckImages} />
        </Container>
        <Container className="mb-5 pb-5">
          <h2>Kitchen Remodeling</h2>
          <Gallery images={kitchenImages} />
        </Container>
        <Container className="mb-5">
          <h2>Bathroom Remodeling</h2>
          <Gallery images={bathroomImages} />
        </Container>
      </section>
    </Layout>
  );
};

export default GalleryPage;
