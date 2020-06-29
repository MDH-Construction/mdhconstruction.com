import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Gallery from '@browniebroke/gatsby-image-gallery';
import '@browniebroke/gatsby-image-gallery/dist/style.css';
import { Container } from 'react-bootstrap';
import Gallery__Body from '../components/Page__Gallery/Gallery__Body';

const GalleryPage = () => {
  const data = useStaticQuery(graphql`
    query GalleryPageQ {
      deckImages: allFile(
        filter: { relativeDirectory: { eq: "images/gallery-imgs/decks" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              thumb: fluid(maxWidth: 270, maxHeight: 270) {
                ...GatsbyImageSharpFluid
              }
              full: fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
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
                ...GatsbyImageSharpFluid
              }
              full: fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
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
                ...GatsbyImageSharpFluid
              }
              full: fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
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
        hOne="Gallery"
        hTwo="See Our Work"
        alt="Gallery MDH Construction"
      />
      {/* <Gallery__Body /> */}
      <section className="page-section" id="gallery-page">
        <Container className="mb-5 pb-5">
          <h3>Deck Construction</h3>
          <Gallery images={deckImages} />
        </Container>
        <Container className="mb-5 pb-5">
          <h3>Kitchen Remodels</h3>
          <Gallery images={kitchenImages} />
        </Container>
        <Container className="mb-5">
          <h3>Bathroom Remodels</h3>
          <Gallery images={bathroomImages} />
        </Container>
      </section>
    </Layout>
  );
};

export default GalleryPage;
