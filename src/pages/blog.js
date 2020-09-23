import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Blog__Body from '../components/Page__Blog/Blog__Body';
import Body__Banner from '../components/Layout/Body/Body__Banner';

const BlogPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query BlogPageQ {
      masthead: file(
        relativePath: {
          eq: "images/pages/blog/blog-pencils-pens-tools-mdh-construction-general-contractor-plymouth-massachusetts.jpg"
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
          eq: "images/pages/blog/blog-pencil-ruler-mdh-construction-general-contractor-plymouth-massachusetts.jpg"
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
        title="Home Improvement & Construction Blog | Plymouth, MA"
        description="For DIY home improvement tips, tricks, guides, and inspiration for your renovation projects, check our blog! We answer common questions and share our knowledge"
        canonicalLink="https://www.mdhconstruction.com/blog/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain="Construction Blog"
        textSecondary="Let's Talk About General Contractors, New Construction, Roofing, Siding, Gutters, Insulation, and More"
        alt="A wooden table with construction tools and paint brushes."
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
        alt="An MDH Construction employee using a triangular ruler to draw a line on wood with a pencil."
        textLeftOne="Got any questions?"
        textLeftTwo="We've got answers!"
        textRight={
          <p>
            Check back regularly for our blog posts on{' '}
            <strong>home improvement tips, tricks, and information</strong>
            !
            <br />
            <br />
            We'll <strong>help answer common questions</strong> and show you how
            to do proper installations, removals, and cleanings of everything
            from gutters, insulation, new construction projects, and more.
            <br />
            <br />
            If you need any help with these types of{' '}
            <Link to="/services/">construction services</Link>, please feel free
            to
            <Link to="/contact-us/">contact us</Link>!
          </p>
        }
      />
      <Blog__Body />
    </Layout>
  );
};

export default BlogPage;
