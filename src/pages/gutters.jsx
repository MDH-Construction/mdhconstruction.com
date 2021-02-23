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

const GuttersPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query GuttersPageQ {
      phoneNumber: site {
        siteMetadata {
          phoneDisplay
          phoneHref
        }
      }
      masthead: file(
        relativePath: {
          eq: "images/pages/gutters/gutter-services-gutter-cleaning-home-roof-mdh-construction.jpg"
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
          eq: "images/pages/gutters/gutter-companies-gutter-company-mdh-construction.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgGutterContractor: file(
        relativePath: {
          eq: "images/pages/gutters/gutter-companies-rain-gutter-contractor-mdh-construction.jpg"
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
  const imageDataHeader = data.masthead.childImageSharp.fluid;
  const imgGutterContractor = data.imgGutterContractor.childImageSharp.fluid;
  const imageDataBodyBanner = data.bgimg.childImageSharp.fluid;
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const navList = [
    {
      name: 'Gutter Installation',
      url: '#',
    },
    {
      name: 'Gutter Cleaning',
      url: '#',
    },
    {
      name: 'Gutter Repair',
      url: '#',
    },
    {
      name: 'Gutter Replacement',
      url: '#',
    },
    {
      name: 'Downspouts & Extensions',
      url: '#',
    },
    {
      name: 'Seamless Gutter Installation',
      url: '#',
    },
  ];

  return (
    <Layout>
      <SEO
        title="Gutter Services - Gutter Cleaning, Gutter Installation | MDH Construction"
        description="We offer gutter services such as gutter cleaning, gutter installation, gutter repair & gutter replacement for homes. Call (774) 269-6002 for a free quote"
        canonicalLink="https://www.mdhconstruction.com/gutters/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Gutter Installation, Gutter Cleaning, Gutter Repair Services"
        textSecondary="Gutter services for residential homes and businesses"
        alt="Gutter clogged with leaves and debris, in need of a gutter service from MDH Construction"
      />
      <Breadcrumb crumbs={crumbs} crumbSeparator="/" crumbLabel="Gutters" />
      {/* <Banner
        Tag="div"
        className=""
        fluid={imageDataBodyBanner}
        alt="Gutter system on residential home roof for rain drainage"
        textLeftOne="Need a gutter system?"
        textLeftTwo="Give us a call!"
        textRight={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            consectetur delectus modi qui distinctio nesciunt illo at,
            voluptatum blanditiis nemo numquam reiciendis libero maxime quo unde
            harum expedita voluptates eligendi.
          </p>
        }
      /> */}
      <Body
        bodyContent={
          <BodyContent>
            <Container className="px-3 px-lg-5">
              <h2 className="text-left mb-3">
                MDH Construction is your local gutter company
              </h2>
              <span className="display-6 font-italic">
                Professional Gutter Services At Affordable Rates
              </span>
              <p className="mt-5">
                MDH Construction offers <strong>gutter services</strong> for
                residential homes and commercial businesses. Whether you need a
                seasonal cleaning, a simple repair, or a whole new gutter system
                — we got you covered. MDH Construction is one of the most
                trusted names in the industry because{' '}
                <strong>we do not employ sub-contractors</strong>. We to do the
                work, we offer affordable rates, and we guarantee quality
                workmanship that will last season to season, year after year.
              </p>
              <p>
                Our team is here to help you with all your project decisions,
                including:
              </p>
              <ul>
                <li>The best type of gutter system to fit your needs​</li>
                <li>Which materials will work best for the job</li>
                <li>
                  Choosing colors & aesthetics to match your home or business
                </li>
              </ul>
              <p>
                Not quite sure where to start? Give us a call at{' '}
                <a
                  className="font-weight-bold text-primary"
                  href={phoneNumber.phoneHref}
                >
                  {phoneNumber.phoneDisplay}
                </a>{' '}
                and we can answer any of your questions.
              </p>
              <div className="py-5">
                <Img
                  fluid={imgGutterContractor}
                  title="MDH Construction gutter professional working on a home gutter system"
                  alt="MDH Construction gutter professional working on a home gutter system"
                />
              </div>
              <h2 className="text-left">Common problems with gutter systems</h2>
              <p>
                Are you having drainage issues with your current gutter system?
              </p>
              <p>
                Are you getting tired of clogs, leaks, or simply just inadequate
                gutters that never get the job done right?
              </p>
              <p>
                Over time it happens — especially when dealing with heavy winds,
                rains, and hurricanes in the summer, then Nor'easters,
                blizzards, and snowstorms in the winter. Putting off gutter
                maintenance can lead to bigger problems, including additional
                costs from roof leaks, foundational damage, and basement
                flooding.​​
              </p>
              <p>
                ​​Fortunately, you can rely on MDH Construction for their
                experience, knowledge, and expertise when dealing with gutter
                systems. We'll send out a team of professionals to analyze your
                project and provide an estimate for:
              </p>
              <ul>
                <li>Gutter installation​</li>
                <li>Gutter cleaning​</li>
                <li>Gutter repair​</li>
                <li>Gutter replacement​</li>
                <li>Downspouts & extensions​</li>
                <li>Seamless gutter installation​</li>
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
              ​
              {/* <h2 className="mt-4 text-left">
                Ignoring Gutter Issues Only Gets Worse
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                doloremque rem magni ea veritatis itaque ex reprehenderit odio,
                nemo, dolorem qui optio saepe. Doloribus eius blanditiis, totam
                nostrum quibusdam hic.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                doloremque rem magni ea veritatis itaque ex reprehenderit odio,
                nemo, dolorem qui optio saepe. Doloribus eius blanditiis, totam
                nostrum quibusdam hic.
              </p>
              <h3 className="mt-5">Roof Damage</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                doloremque rem magni ea veritatis itaque ex reprehenderit odio,
                nemo, dolorem qui optio saepe. Doloribus eius blanditiis, totam
                nostrum quibusdam hic.
              </p>
              <h3>Interior Damage</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                doloremque rem magni ea veritatis itaque ex reprehenderit odio,
                nemo, dolorem qui optio saepe. Doloribus eius blanditiis, totam
                nostrum quibusdam hic.
              </p>
              <h3>Foundational Damage</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                doloremque rem magni ea veritatis itaque ex reprehenderit odio,
                nemo, dolorem qui optio saepe. Doloribus eius blanditiis, totam
                nostrum quibusdam hic.
              </p> */}
            </Container>
          </BodyContent>
        }
        bodySidebar={
          <BodySidebar>
            <Container className="px-0">
              <Container className="px-0">
                <p className="lead display-6 font-weight-bold text-center text-secondary mb-4">
                  GUTTER SERVICES
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

export default GuttersPage;
