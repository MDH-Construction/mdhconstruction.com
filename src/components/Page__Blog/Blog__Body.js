import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BlogSection from '../Page__Blog/Blog__Section';

const Blog__Body = ({ className }) => {
  return (
    <section className="section-container" id="about-page">
      <BlogSection />
    </section>
  );
};

export default Blog__Body;
