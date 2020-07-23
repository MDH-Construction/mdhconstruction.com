import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BlogSection from '../Page__Blog/Blog__Section';

const Blog__Body = ({ className }) => {
  return (
    <section id="about-page">
      <Container>
        <p className="lead text-center">
          Check out our blog posts for home improvement tips, tricks, and
          information!
        </p>
        <BlogSection />
      </Container>
    </section>
  );
};

export default Blog__Body;
