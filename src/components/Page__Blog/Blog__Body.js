import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BlogSection from '../Page__Blog/Blog__Section';

const Blog__Body = ({ className }) => {
  return (
    <section id="about-page">
      <Row>
        <Col className="py-3 py-lg-5" xs={12} md={12}>
          <Container>
            <p>
              At MDH Construction we establish lasting relationships with our
              clients because of our high-quality and reliable service. When you
              work with us you’ll become a customer for life, because superior
              craftsmanship and unmatched customer care are our top priorities.
              Supported by our Better Business Bureau A+ rating — as well as
              customer reviews on Facebook, HomeAdvisor, and Redbeacon — MDH
              Construction is consistently a top-rated contractor of superior
              home improvement, remodeling, and commercial construction
              services:
            </p>
            <BlogSection />
          </Container>
        </Col>
      </Row>
    </section>
  );
};

export default Blog__Body;
