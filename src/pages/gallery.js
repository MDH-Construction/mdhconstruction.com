import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from 'react-bootstrap';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import Gallery from '@browniebroke/gatsby-image-gallery';
import '@browniebroke/gatsby-image-gallery/dist/style.css';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Body__Banner from '../components/Layout/Body/Body__Banner';

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
              thumb: fluid(maxWidth: 500, maxHeight: 300) {
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
  const customCrumbLabel = location.pathname.replace('/', '');
  const crumbCapitalized =
    customCrumbLabel.charAt(0).toUpperCase() + customCrumbLabel.slice(1);

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
        title="Wow! View Our Completed Construction Projects | Plymouth, MA"
        description="We take great pride in our work and love displaying completed construction projects! View our gallery for home improvement ideas or to see our craftsmanship."
        canonicalLink="https://www.mdhconstruction.com/gallery"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Construction Project Gallery"
        textSecondary="Before & After Photos, Decks, Remodels, & More"
        alt="Gallery MDH Construction"
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
        textLeftTwo="completed work!"
        textRight={
          <p>
            We take great pride in our work and{' '}
            <strong>love to display our completed construction projects</strong>
            !
            <br />
            <br />
            Take a look at our gallery to get ideas for your next home
            improvement project or just to see our craftsmanship.
            <br />
            <br />
            <strong>If you see anything you like, please let us know</strong>!
          </p>
        }
      />
      <section className="section-container" id="gallery-page">
        <Container className="mb-5 pb-5">
          <h2 className="display-4 font-weight-bold">Before & After</h2>
          <Gallery images={beforeAfterImages} />
        </Container>
        <Container className="mb-5 pb-5">
          <h2 className="display-4 font-weight-bold">Deck Construction</h2>
          <Gallery images={deckImages} />
        </Container>
        <Container className="mb-5 pb-5">
          <h2 className="display-4 font-weight-bold">Kitchen Remodeling</h2>
          <Gallery images={kitchenImages} />
        </Container>
        <Container className="mb-5">
          <h2 className="display-4 font-weight-bold">Bathroom Remodeling</h2>
          <Gallery images={bathroomImages} />
        </Container>
      </section>
    </Layout>
  );
};

export default GalleryPage;
