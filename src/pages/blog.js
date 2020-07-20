import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Blog__Body from '../components/Page__Blog/Blog__Body';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query BlogPageQ {
      masthead: file(
        relativePath: {
          eq: "images/mdh-construction-blog-general-contractor-plymouth-ma.jpg"
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
        title="Construction Blog | Construction Blog"
        description="Construction Blog | Construction Blog"
        canonicalLink="https://www.mdhconstruction.com/blog/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        hOne="Construction Blog"
        hTwo="Let's Talk About General Contractors, New Construction, Roofing, Siding, Gutters, Insulation, and More"
        alt="Construction Blog"
      />
      <Blog__Body />
    </Layout>
  );
};

export default BlogPage;
