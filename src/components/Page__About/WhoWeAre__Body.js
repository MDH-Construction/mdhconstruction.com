import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import ImgTruck from '../Images/Pages/Home/img-truck';
import Button from '../Button/Button';

const WhoWeAre__Body = ({ className }) => {
  return (
    <section className="section-container" id="about-page">
      <Container>
        <h2 className="display-4">Our Values</h2>
        <Tabs defaultActiveKey="Superior Craftmanship" id="who-we-are-tabs">
          <Tab eventKey="Superior Craftmanship" title="Superior Craftmanship">
            <p className="mt-4 mt-lg-0">
              <strong>
                At MDH Construction we like to be known for the excellence of
                our work.
              </strong>
            </p>
            <p>
              In business you are only as good as the people you employ, which
              is why we thoughtfully select expert tradesmen who have an eye
              towards quality over quantity.
            </p>
            <p>
              We also support our employees through our continuing education
              program, which allows them to hone their trade, learn about new
              products and technologies, and stay up-to-date on local building
              codes.
            </p>
          </Tab>
          <Tab
            eventKey="Unmatched Customer Care"
            title="Unmatched Customer Care"
          >
            <p className="mt-4 mt-lg-0">
              <strong>
                We strongly believe in giving each of our clients the attention
                and respect they deserve.
              </strong>
            </p>
            <p className="mt-4 mt-lg-0">
              We run a hands-on operation that affords greater accountability
              and more thorough attention to detail.
            </p>
            <p className="mt-4 mt-lg-0">
              Because of these values, we are able to provide our clients with
              finished products that surpasses their expectations and an
              experience that is hard to find anywhere else.
            </p>
            <p className="mt-4 mt-lg-0">
              If you have home improvement, remodeling, or commercial
              construction needs, please don't hesitate to{' '}
              <Link to="/contact-us">contact us</Link> for a free estimate.
            </p>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <p className="mt-4 mt-lg-0">
              <strong>
                We strongly believe in giving each of our clients the attention
                and respect they deserve.
              </strong>
            </p>
            <p className="mt-4 mt-lg-0">
              We run a hands-on operation that affords greater accountability
              and more thorough attention to detail.
            </p>
            <p className="mt-4 mt-lg-0">
              Because of these values, we are able to provide our clients with
              finished products that surpasses their expectations and an
              experience that is hard to find anywhere else.
            </p>
            <p className="mt-4 mt-lg-0">
              If you have home improvement, remodeling, or commercial
              construction needs, please don't hesitate to{' '}
              <Link to="/contact-us">contact us</Link> for a free estimate.
            </p>
          </Tab>
        </Tabs>
        {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="mx-2 mx-lg-0 pt-3 p-2 p-lg-3 border bg-white rounded drop-shadow">
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className="border border-primary rounded drop-shadow mb-2 mb-lg-1">
                  <Nav.Link className="active-link" eventKey="first">
                    <h3 className="mb-1">Superior Craftsmanship</h3>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="border border-primary rounded drop-shadow">
                  <Nav.Link className="active-link" eventKey="second">
                    <h3 className="mb-1">Unmatched Customer Care</h3>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p className="mt-4 mt-lg-0">
                    <strong>
                      At MDH Construction we like to be known for the excellence
                      of our work.
                    </strong>
                  </p>
                  <p>
                    In business you are only as good as the people you employ,
                    which is why we thoughtfully select expert tradesmen who
                    have an eye towards quality over quantity.
                  </p>
                  <p>
                    We also support our employees through our continuing
                    education program, which allows them to hone their trade,
                    learn about new products and technologies, and stay
                    up-to-date on local building codes.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p className="mt-4 mt-lg-0">
                    <strong>
                      We strongly believe in giving each of our clients the
                      attention and respect they deserve.
                    </strong>
                  </p>
                  <p className="mt-4 mt-lg-0">
                    We run a hands-on operation that affords greater
                    accountability and more thorough attention to detail.
                  </p>
                  <p className="mt-4 mt-lg-0">
                    Because of these values, we are able to provide our clients
                    with finished products that surpasses their expectations and
                    an experience that is hard to find anywhere else.
                  </p>
                  <p className="mt-4 mt-lg-0">
                    If you have home improvement, remodeling, or commercial
                    construction needs, please don't hesitate to{' '}
                    <Link to="/contact-us">contact us</Link> for a free
                    estimate.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container> */}
      </Container>
    </section>
  );
};

export default WhoWeAre__Body;
