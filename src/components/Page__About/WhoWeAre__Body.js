import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import ImgTruck from '../Images/Pages/Home/img-truck';
import Button from '../Button/Button';

const WhoWeAre__Body = ({ className }) => {
  return (
    <section id="about-page">
      {/* <Container> */}
      <Row>
        {/* <Col xs={12} md={6}>
          <ImgTruck />
        </Col> */}
        <Col className="py-3 py-lg-5" xs={12} md={12}>
          <Container>
            <p>
              MDH Construction is a full-service, licensed and insured, general
              contractor and construction company located in Plymouth,
              Massachusetts. We offer a wide range of services in the areas of
              home improvement, remodeling, and commercial construction. Our
              service area covers much of eastern Massachusetts, including the
              Boston area, South Shore, and Cape Cod.
            </p>
            <h2>Our Values</h2>
            <h3>Superior Craftsmanship</h3>
            <p>
              At MDH Construction we like to be known for the excellence of our
              work. In business you are only as good as the people you employ,
              which is why we thoughtfully select expert tradesmen who have an
              eye towards quality over quantity. We also support our employees
              through our continuing education program, which allows them to
              hone their trade, learn about new products and technologies, and
              stay up-to-date on local building codes.
            </p>
            <h3>Unmatched Customer Care</h3>
            <p>
              We strongly believe in giving each of our clients the attention
              and respect they deserve. We run a hands-on operation that affords
              greater accountability and more thorough attention to detail.
              Best-in-class customer service also means using the latest
              technologies in construction project management — such as our
              client portal and app — to ensure efficient service and greater
              transparency. Because of these values, we are able to provide our
              clients with finished products that surpasses their expectations
              and an experience that is hard to find anywhere else. If you have
              home improvement, remodeling, or commercial construction needs,
              please don't hesitate to contact us for a free estimate.
            </p>
            <Container className="checklist mt-5 p-3 p-lg-3 justify-content-center align-items-center">
              <h3>Why We're Different</h3>
              <ul className="check">
                <li>
                  We hire expert tradesman and provide them with regular,
                  continuing education
                </li>
                <li>We treat our clients and their property with respect</li>
                <li>
                  We aim to start and complete projects on or ahead of schedule
                </li>
                <li>We guarantee 100% satisfaction</li>
              </ul>
            </Container>
            <div className="text-center mt-5">
              <Button btnlink="/" btnlabel="Contact Us Today" btn={true} />
            </div>
          </Container>
        </Col>
      </Row>
      {/* </Container> */}
    </section>
  );
};

export default WhoWeAre__Body;
