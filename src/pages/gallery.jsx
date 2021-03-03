import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import Gallery from '@browniebroke/gatsby-image-gallery';
import '@browniebroke/gatsby-image-gallery/dist/style.css';

import Layout from '../components/layout';
import SEO from '../components/common/SEO';
import Header from '../components/layouts/headers/Header';
import Banner from '../components/layouts/bodies/Banner';

const GalleryPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query GalleryPageQ {
      bgimg: file(
        relativePath: {
          eq: "images/gallery-imgs/decks/Deck-Construction-Deck-Installation-MDH-Construction-Plymouth-Massachusetts-01.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      beforeAfterImages: allFile(
        filter: {
          relativeDirectory: { eq: "images/gallery-imgs/before-after" }
        }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              thumb: fluid(maxWidth: 500, maxHeight: 325) {
                ...GatsbyImageSharpFluid_withWebp
              }
              full: fluid(quality: 90, maxWidth: 1024) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      renovationImages: allFile(
        filter: { relativeDirectory: { eq: "images/gallery-imgs/renovations" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              thumb: fluid(maxWidth: 270, maxHeight: 270) {
                ...GatsbyImageSharpFluid_withWebp
              }
              full: fluid(quality: 90, maxWidth: 1024) {
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
              full: fluid(quality: 90, maxWidth: 1024) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      stairImages: allFile(
        filter: { relativeDirectory: { eq: "images/gallery-imgs/stairs" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              thumb: fluid(maxWidth: 270, maxHeight: 270) {
                ...GatsbyImageSharpFluid_withWebp
              }
              full: fluid(quality: 90, maxWidth: 1024) {
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
              full: fluid(quality: 90, maxWidth: 1024) {
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
              full: fluid(quality: 90, maxWidth: 1024) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      basementImages: allFile(
        filter: { relativeDirectory: { eq: "images/gallery-imgs/basements" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              thumb: fluid(maxWidth: 270, maxHeight: 270) {
                ...GatsbyImageSharpFluid_withWebp
              }
              full: fluid(quality: 90, maxWidth: 1024) {
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

  const beforeAfterImages = data.beforeAfterImages.edges.map(
    ({ node }) => node.childImageSharp
  );
  const renovationImages = data.renovationImages.edges.map(
    ({ node }) => node.childImageSharp
  );
  const deckImages = data.deckImages.edges.map(
    ({ node }) => node.childImageSharp
  );
  const stairImages = data.stairImages.edges.map(
    ({ node }) => node.childImageSharp
  );
  const kitchenImages = data.kitchenImages.edges.map(
    ({ node }) => node.childImageSharp
  );
  const bathroomImages = data.bathroomImages.edges.map(
    ({ node }) => node.childImageSharp
  );
  const basementImages = data.basementImages.edges.map(
    ({ node }) => node.childImageSharp
  );

  const lightboxOptions = {
    imageCaption: 'MDH Construction Gallery',
  };

  return (
    <Layout>
      <SEO
        title="Wow! View Our Completed Construction Projects | Plymouth, MA"
        description="We take great pride in our work and love displaying completed construction projects! View our gallery for home improvement ideas or to see our craftsmanship."
        canonicalLink="https://www.mdhconstruction.com/gallery/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Construction Project Gallery"
        textSecondary="Before & After Photos, Decks, Remodels, & More"
        alt="Gallery images of MDH Construction projects throughout Massachusetts"
      />
      <Breadcrumb crumbs={crumbs} crumbSeparator="/" crumbLabel="Gallery" />
      <Banner
        Tag="div"
        className=""
        fluid={imageDataBodyBanner}
        alt="A new deck built by MDH Construction at a residential home in Plymouth, MA."
        textLeftOne="Check out our"
        textLeftTwo="completed work!"
        textRight={
          <p>
            We take great pride in our work and{' '}
            <strong>love to display our completed construction projects</strong>
            !
            <br />
            <br />
            Take a look at our gallery to get ideas for your next{' '}
            <Link to="/services/">home improvement project</Link> or just to see
            our craftsmanship.
            <br />
            <br />
            <strong>
              If you see anything you like, feel free to{' '}
              <Link to="/contact-us/" className="font-weight-normal">
                contact us
              </Link>
            </strong>
            !
          </p>
        }
      />
      <section className="section-container" id="gallery-page">
        <Container className="mb-5 pb-5">
          <h2 className="display-4 font-weight-bold">Before & After</h2>
          <Gallery
            images={beforeAfterImages}
            lightboxOptions={lightboxOptions}
          />
        </Container>
        <Container className="mb-5 pb-5">
          <h2 className="display-4 font-weight-bold">Home Renovations</h2>
          <Gallery
            images={renovationImages}
            lightboxOptions={lightboxOptions}
          />
        </Container>
        <Container className="mb-5 pb-5">
          <h2 className="display-4 font-weight-bold">Deck Construction</h2>
          <Gallery images={deckImages} lightboxOptions={lightboxOptions} />
        </Container>
        <Container className="mb-5 pb-5">
          <h2 className="display-4 font-weight-bold">Stair Construction</h2>
          <Gallery images={stairImages} lightboxOptions={lightboxOptions} />
        </Container>
        <Container className="mb-5 pb-5">
          <h2 className="display-4 font-weight-bold">Kitchen Remodeling</h2>
          <Gallery images={kitchenImages} lightboxOptions={lightboxOptions} />
        </Container>
        <Container className="mb-5">
          <h2 className="display-4 font-weight-bold">Bathroom Remodeling</h2>
          <Gallery images={bathroomImages} lightboxOptions={lightboxOptions} />
        </Container>
        <Container className="mb-5">
          <h2 className="display-4 font-weight-bold">Basement Remodeling</h2>
          <Gallery images={basementImages} lightboxOptions={lightboxOptions} />
        </Container>
      </section>
    </Layout>
  );
};

export default GalleryPage;
