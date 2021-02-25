import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Container } from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/common/SEO';
import Header from '../components/layouts/headers/Header';
import Banner from '../components/layouts/bodies/Banner';
import Body from '../components/Body';
import BodyContent from '../components/BodyContent';
import BodySidebar from '../components/BodySidebar';
import SidebarNav from '../components/layouts/navbars/SidebarNav';
import FormSidebar from '../components/common/forms/FormSidebar';

const FullConstructionPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query FullConstructionPageQ {
      phoneNumber: site {
        siteMetadata {
          phoneDisplay
          phoneHref
        }
      }
      masthead: file(
        relativePath: {
          eq: "images/pages/full-construction/new-home-construction-services-commerical-buildings--mdh-construction.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgFirst: file(
        relativePath: {
          eq: "images/pages/full-construction/new-home-construction-stack-wooden-planks-mdh-construction.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgSecond: file(
        relativePath: {
          eq: "images/pages/full-construction/new-dream-home-residential-single-family-mdh-construction.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgThird: file(
        relativePath: {
          eq: "images/pages/full-construction/new-commerical-building-construction-mdh-construction.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgFourth: file(
        relativePath: {
          eq: "images/pages/full-construction/new-detached-garage-construction-mdh-construction.jpg"
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

  const phoneNumber = data.phoneNumber.siteMetadata;
  const imgMasthead = data.masthead.childImageSharp.fluid;
  const imgFirst = data.imgFirst.childImageSharp.fluid;
  const imgSecond = data.imgSecond.childImageSharp.fluid;
  const imgThird = data.imgThird.childImageSharp.fluid;
  const imgFourth = data.imgFourth.childImageSharp.fluid;
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const navList = [
    {
      name: 'New Residential Home Construction',
      url: '#',
    },
    {
      name: 'New Commercial Building Construction',
      url: '#',
    },
    {
      name: 'New Detached Garage Construction',
      url: '#',
    },
  ];

  return (
    <Layout>
      <SEO
        title="Full Construction Services - New Homes & New Buildings | MDH Construction"
        description="We offer full construction services for new residential homes, new commercial buildings, and new detached garages. Call (774) 269-6002 for a free quote"
        canonicalLink="https://www.mdhconstruction.com/full-construction/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imgMasthead}
        textMain="New Residential Home & Commercial Building Construction"
        textSecondary="Full construction services for new homes, buildings, garages"
        alt="Residential home construction company building a new house"
      />
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator="/"
        crumbLabel="Full Construction"
      />
      <Body
        bodyContent={
          <BodyContent>
            <Container className="px-3 px-lg-5">
              <h2 className="text-left mb-3">
                MDH Construction offers new construction services for
                residential homes & commercial businesses
              </h2>
              <span className="display-6 font-italic">
                Professional New Construction Services At Affordable Rates
              </span>
              <p className="mt-5">
                MDH Construction is a{' '}
                <strong>full-service home construction company</strong> that
                offers everything from new house builds to commercial building
                construction. Our skilled team is experienced in all facets of
                construction from framing to drywall. We have a tradition of
                hiring only top-quality, experienced craftsmen, and{' '}
                <Link to="/employment/">we're always looking for more</Link>.
              </p>
              <p>
                MDH Construction is one of the most trusted names in the
                industry because{' '}
                <strong>we do not employ sub-contractors</strong>. We do all the
                work at affordable rates, and guarantee customer satisfaction.
              </p>
              <p>
                Our team is available to assist you with all of your new
                construction projects, such as:
              </p>
              <ul>
                <li>Single-family homes</li>
                <li>Communities of single-family homes or townhomes</li>
                <li>Detached garages</li>
                <li>Condominiums</li>
                <li>Multi-family properties</li>
                <li>Apartment buildings</li>
                <li>Commercial buildings</li>
              </ul>
              <p>
                Ready for an estimate? Give us a call at{' '}
                <a
                  className="font-weight-bold text-primary"
                  href={phoneNumber.phoneHref}
                >
                  {phoneNumber.phoneDisplay}
                </a>{' '}
                and we can get started.
              </p>
              <div className="py-5">
                <Img
                  fluid={imgFirst}
                  title="MDH Construction preparing to build a new residential home"
                  alt="MDH Construction preparing to build a new residential home"
                />
              </div>
              <h2 className="text-left">
                New residential home construction contractor
              </h2>
              <p>
                We take pride in building new homes for families throughout
                Massachusetts. What makes us different from other home builders?
                We’re a home construction company that specializes in all phases
                of residential construction. From the foundation to the last
                coat of paint, we do it all.
              </p>
              <p>
                Since 2014, MDH Construction has been a family-run, locally
                trusted business with years of experience building homes. We’re
                proud to bring our expertise to every job we take on.
              </p>
              <p>
                Avoid the headaches, unexpected surprises, and schedule delays
                when dealing with inexperienced contractors.
              </p>
              <p>
                Give us a call at{' '}
                <a
                  className="font-weight-bold text-primary"
                  href={phoneNumber.phoneHref}
                >
                  {phoneNumber.phoneDisplay}
                </a>{' '}
                and we can take the first steps to building your dream home.
              </p>
              <div className="py-5">
                <Img
                  fluid={imgSecond}
                  title="MDH Construction is home construction company that can build your dream home"
                  alt="MDH Construction is home construction company that can build your dream home"
                />
              </div>
              <h2 className="text-left">
                New commercial building construction contractor
              </h2>
              <p>
                MDH Construction offers construction services for commercial
                business buildings. Our general commercial construction services
                include:
              </p>
              <ul>
                <li>Commercial office building construction</li>
                <li>Commercial warehouse construction</li>
                <li>Commercial manufacturing building construction</li>
                <li>Commercial food processing building construction</li>
              </ul>
              <p>
                We have experience in every aspect of commercial construction,
                including: foundation, framing, interior and exterior framing,
                roofing, siding, and exterior features.
              </p>
              <div className="py-5">
                <Img
                  fluid={imgThird}
                  title="MDH Construction constructing a commercial building for a local business"
                  alt="MDH Construction constructing a commercial building for a local business"
                />
              </div>
              <h2 className="text-left">
                New detached garage construction contractor
              </h2>
              <p>
                Looking to add value to your property with a detached garage?
                Building a detached garage is a common practice for many
                homeowners, as it provides a place to store cars, lawn mowers,
                and other outdoor tools and equipment.
              </p>
              <p>
                The process of building a detached garage is similar to that of
                building a single-family home. With our experience, we can help
                you match the style to your house using high-quality materials.
                We offer various garage styles, such as:
              </p>
              <ul>
                <li>Barn​</li>
                <li>Modern​</li>
                <li>Victorian​</li>
                <li>Ranch​</li>
              </ul>
              <p>
                All you have to do is give us a call at{' '}
                <a
                  className="font-weight-bold text-primary"
                  href={phoneNumber.phoneHref}
                >
                  {phoneNumber.phoneDisplay}
                </a>{' '}
                for your free quote.
              </p>
              <div className="py-5">
                <Img
                  fluid={imgFourth}
                  title="MDH Construction specializes in build detached garages for residential homes"
                  alt="MDH Construction specializes in build detached garages for residential homes"
                />
              </div>
            </Container>
          </BodyContent>
        }
        bodySidebar={
          <BodySidebar>
            <Container className="px-0">
              <Container className="px-0">
                <p className="lead display-6 font-weight-bold text-center text-secondary mb-4">
                  NEW FULL CONSTRUCTION SERVICES
                </p>
                <Container className="px-0">
                  <SidebarNav navList={navList} />
                </Container>
              </Container>
              <Container className="mx-0 px-0 my-3">
                <FormSidebar />
              </Container>
            </Container>
          </BodySidebar>
        }
      />
    </Layout>
  );
};

export default FullConstructionPage;
