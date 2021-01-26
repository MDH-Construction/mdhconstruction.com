import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';
import ImgMdhFavicon from '../../images/img-mdh-favicon';
import ButtonInternal from '../../common/buttons/ButtonInternal';

const Section = ({ className }) => {
  const data = useStaticQuery(graphql`
    query SectionQ {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            timeToRead
            frontmatter {
              path
              date
              title
              author
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
      }
    }
  `);

  return (
    <Container className="mt-5 pt-5">
      <h2 className="text-center mt-0 mb-5">Latest Construction Blog Posts</h2>
      <Row className="justify-content-center align-items-baseline">
        {data.allMdx.edges.map((post) => (
          <Col xs={12} md={6} lg={6} key={post.node.id}>
            <div className="container seo-blog mb-5 p-2 border rounded bg-white">
              <Link to={post.node.frontmatter.path}>
                <Img
                  className="mb-2"
                  fluid={post.node.frontmatter.image.childImageSharp.fluid}
                  alt="MDH Construction blog post thumbnail"
                />
              </Link>
              <div>
                <div>
                  <h3>{post.node.frontmatter.title}</h3>
                </div>
                <Row className="text-muted ml-1">
                  <ImgMdhFavicon className="mr-2" />
                  <small>
                    {post.node.frontmatter.author} •{' '}
                    {post.node.frontmatter.date}
                  </small>
                </Row>
                <Row className="row text-muted ml-3">
                  <small className="col">{post.node.timeToRead} min read</small>
                </Row>
                <div className="text-center my-3">
                  <ButtonInternal
                    btnlink={post.node.frontmatter.path}
                    btnlabel="Read Blog Post"
                    btn={true}
                  />
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Section;
