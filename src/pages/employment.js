import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Employment__Body from '../components/Page__Employment/Employment__Body';
import Body__Banner from '../components/Layout/Body/Body__Banner';

const EmploymentPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query EmploymentPageQ {
      masthead: file(
        relativePath: {
          eq: "images/employment-mdh-construction-general-contractor-plymouth-ma.jpg"
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
          eq: "images/pages/employment/employment-help-wanted-mdh-construction-general-contractor-plymouth-massachusetts.jpg"
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

  return (
    <Layout>
      <SEO
        title="We Are Hiring! Construction Jobs, PTO, Bonuses | Plymouth, MA"
        description="If you have a set of skills related to the home improvement, remodeling, or commercial construction industries, we want to hear from you! Call (774) 269-6002"
        canonicalLink="https://www.mdhconstruction.com/employment/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Employment at MDH Construction"
        textSecondary="Join Our Team of Expert Tradesmen"
        alt="MDH Construction employees leaving a job site in Plymouth, MA after working on gutter installion, deck construction, and home insulation."
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
        alt="A person cirlcing a help wanted ad in the newspaper with a pen."
        textLeftOne="We are hiring."
        textLeftTwo="Call us today!"
        textRight={
          <p>
            At <Link to="/who-we-are/">MDH Construction</Link> we know that{' '}
            <strong>a company is only as good its people</strong>
            . That is why we've built a team of tradesmen who care deeply about
            the quality of their work and the clients we serve.
            <br />
            <br />
            If you have a set of skills that relate to the home improvement,
            remodeling, or commercial construction industries — and you believe
            in quality workmanship and stellar customer care —{' '}
            <strong>we want to hear from you</strong>
            !
            <br />
            <br />
            Please send your resume to{' '}
            <a
              className="font-weight-bold"
              href="mailto:jobs@mdhconstruction.com?Subject=Job%20Email%20From%20Website"
              target="_blank"
            >
              jobs
              <wbr />
              @mdhconstruction.com
            </a>
            .
          </p>
        }
      />
      <Employment__Body />
    </Layout>
  );
};

export default EmploymentPage;
