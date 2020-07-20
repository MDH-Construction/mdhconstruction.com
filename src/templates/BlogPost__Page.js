import React from 'react';
import { Link, graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Blog__PostHeader from '../components/Page__Blog/Blog__PostHeader';
import ImgMdhLogoFluid from '../components/Images/Logos/img-mdh-logo-fluid';
import Button from '../components/Button/Button';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

const BlogPostTemplate = ({ data }) => {
  const post = data.mdx;
  const postImg = `${(
    <Img
      className="container mb-5 drop-shadow-dark rounded"
      fluid={post.frontmatter.image.childImageSharp.fluid}
      alt={post.frontmatter.alt}
    />
  )}`;

  const structuredDataArticle = `{
    "@context": "http://schema.org",
    "@type": "Article",
    "name": "${post.frontmatter.title}",
    "author": {
      "@type": "Person",
      "name": "${post.frontmatter.author}"
    },
    "datePublished": "${post.frontmatter.date}",
    "image": "https://johngrattan.com/static/44c818c675ed93993775d2fb37a86cd5/a1eb1/john-grattan-logo-gmb.jpg",
    "url": "${post.frontmatter.url}",
    "publisher": {
      "@type": "Organization",
      "name": "John Grattan SEO & Web Design",
      "logo": {
        "@type": "ImageObject",
        "url": "https://johngrattan.com/static/44c818c675ed93993775d2fb37a86cd5/a1eb1/john-grattan-logo-gmb.jpg"
      }
    },
    "headline" : "${post.frontmatter.title}",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${post.frontmatter.url}"
    }
  }`;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        canonicalLink={post.frontmatter.url}
      />
      <Helmet>
        <script type="application/ld+json">{structuredDataArticle}</script>
      </Helmet>
      <Blog__PostHeader
        Tag="header"
        className="bg-img-page-top"
        hOne={post.frontmatter.title}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
        timeToRead={post.timeToRead}
      />
      <Container className="mt-5">
        <div className="drop-shadow p-3 mb-5 bg-white rounded">
          <Link className="font-weight-bold" to="/">
            Home
          </Link>
          <span className="mx-3 text-secondary">/</span>
          <Link className="font-weight-bold" to="/blog">
            Blog
          </Link>
          <span className="mx-3 text-secondary">/</span>

          <span className="text-secondary">{post.frontmatter.title}</span>
        </div>
        <Row className="mx-0 px-0 mb-5 mb-lg-0 container justify-content-center">
          <Col lg={9} className="px-0 pr-lg-5">
            <Img
              className="container mb-5 drop-shadow-dark rounded"
              fluid={post.frontmatter.image.childImageSharp.fluid}
              alt={post.frontmatter.alt}
            />
            <MDXRenderer>{post.body}</MDXRenderer>
          </Col>
          <div className="col-lg-3 mt-5 mt-lg-0 height-fit-content p-3 bg-white rounded drop-shadow">
            <p className="text-dark font-weight-bold text-center mb-4">
              Share this article!
            </p>
            <Row className="justify-content-around mb-5">
              <Col className="text-center" xs={12} md={8} lg={12}>
                <FacebookShareButton
                  url={post.frontmatter.url}
                  size={32}
                  className="pointer drop-shadow px-md-3"
                >
                  <FacebookIcon
                    url={post.frontmatter.url}
                    size={32}
                    round={true}
                  />
                </FacebookShareButton>
                <TwitterShareButton
                  url={post.frontmatter.url}
                  size={32}
                  className="pointer drop-shadow px-md-3"
                >
                  <TwitterIcon
                    url={post.frontmatter.url}
                    size={32}
                    round={true}
                  />
                </TwitterShareButton>
                <LinkedinShareButton
                  url={post.frontmatter.url}
                  size={32}
                  className="pointer drop-shadow px-md-3"
                >
                  <LinkedinIcon
                    url={post.frontmatter.url}
                    size={32}
                    round={true}
                  />
                </LinkedinShareButton>
                <EmailShareButton
                  url={post.frontmatter.url}
                  size={32}
                  className="pointer drop-shadow px-md-3"
                >
                  <EmailIcon
                    url={post.frontmatter.url}
                    size={32}
                    round={true}
                  />
                </EmailShareButton>
              </Col>
            </Row>
            <p className="lead mb-5 py-1 text-dark bg-secondary rounded drop-shadow text-center">
              <strong className="text-white">About the author</strong>
            </p>
            <Col className="mx-auto" xs={12} md={8} lg={12}>
              <ImgMdhLogoFluid className="no-drop-shadow" />
            </Col>
            <div className="text-center text-dark mt-3">
              <strong className="">{post.frontmatter.author}</strong>
              <small className="d-block mt-0">[NEED JOB TITLE]</small>
            </div>
            <hr className="light" />
            <p className="text-left text-dark">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              eius minima inventore sunt, omnis quidem quod. Eveniet odio
              officiis id modi fugit tempora ab unde neque sapiente debitis,
              harum accusantium.
            </p>
            <p className="text-left text-dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              mollitia tenetur beatae possimus, dolorum dolores non distinctio
              libero tempora provident totam? Alias distinctio sed accusamus rem
              minus animi explicabo reprehenderit?
            </p>
            <div className="text-center mb-3 mt-4">
              <Button btnlabel="About Us" btnlink="/about" btnsolid={true} />
            </div>
          </div>
        </Row>
      </Container>
    </Layout>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      timeToRead
      frontmatter {
        path
        url
        date
        title
        description
        author
        alt
        image {
          id
          relativePath
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default BlogPostTemplate;
