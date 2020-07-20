import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import ImgJorg from '../Images/Pages/Testimonials/img-jorg-steinhage';
import ImgFranklin from '../Images/Pages/Testimonials/img-franklin-t';
import Button from '../Button/Button';

const Testimonials__Body = ({ className }) => {
  return (
    <section id="about-page">
      {/* <Container> */}
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

            <Container className="py-5 px-2 py-lg-5">
              <Carousel
                interval={null}
                className="mx-2 mx-lg-5 border rounded bg-light p-3 drop-shadow"
              >
                <Carousel.Item className="py-3 px-lg-5">
                  <Col className="text-center">
                    <ImgJorg className="no-drop-shadow" />
                    <span className="d-block text-center text-primary">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                  </Col>
                  <div className="px-5 pt-3">
                    <p className="font-italic font-weight-bold mt-3 px-md-5">
                      <span className="font-weight-normal">"</span>Positive:
                      Professionalism, Punctuality, Quality, Responsiveness,
                      Value
                    </p>
                    <p className="font-italic mt-3 px-md-5">
                      The MDH team did a great job improving the insulation of
                      our home. They had a crew of 5 people out today and did a
                      quality and efficient job. I highly recommend this company
                      and the Mass save program to improve the insulation of
                      your home. The house already feels warmer with almost no
                      air drafts. I am confident we will be saving a substantial
                      amount on our energy bills."
                    </p>
                    <p className="font-weight-bold text-primary text-right px-md-5">
                      — Jörg Steinhage
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="py-3 px-lg-5">
                  <Col className="text-center">
                    <ImgFranklin className="no-drop-shadow" />
                    <span className="d-block text-center text-primary">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                  </Col>
                  <div className="px-5 pt-3">
                    <p className="font-italic mt-3 px-md-5">
                      "I was very pleased with Matt and his team. Matt was
                      always very responsive and reasonable. He did a full
                      renovation of my house and came out on budget. There
                      weren't any of the horror stories you hear about going
                      into such a project. Everything came out great, and Matt
                      always picked up the phone throughout the project whenever
                      I had questions. Outstanding job!"
                    </p>
                    <p className="font-weight-bold text-primary text-right px-md-5">
                      — Franklin T
                    </p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Container>

            <Container className="py-5 px-2 py-lg-5">
              <Carousel
                interval={null}
                className="mx-2 mx-lg-5 border rounded bg-light p-3 drop-shadow"
              >
                <Carousel.Item className="py-3 px-lg-5">
                  <Col className="text-center">
                    <ImgJorg className="no-drop-shadow" />
                    <span className="d-block text-center text-primary">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                  </Col>
                  <div className="px-5 pt-3">
                    <p className="font-italic font-weight-bold mt-3 px-md-5">
                      <span className="font-weight-normal">"</span>Positive:
                      Professionalism, Punctuality, Quality, Responsiveness,
                      Value
                    </p>
                    <p className="font-italic mt-3 px-md-5">
                      The MDH team did a great job improving the insulation of
                      our home. They had a crew of 5 people out today and did a
                      quality and efficient job. I highly recommend this company
                      and the Mass save program to improve the insulation of
                      your home. The house already feels warmer with almost no
                      air drafts. I am confident we will be saving a substantial
                      amount on our energy bills."
                    </p>
                    <p className="font-weight-bold text-primary text-right px-md-5">
                      — Jörg Steinhage
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="py-3 px-lg-5">
                  <Col className="text-center">
                    <ImgFranklin className="no-drop-shadow" />
                    <span className="d-block text-center text-primary">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                  </Col>
                  <div className="px-5 pt-3">
                    <p className="font-italic mt-3 px-md-5">
                      "I was very pleased with Matt and his team. Matt was
                      always very responsive and reasonable. He did a full
                      renovation of my house and came out on budget. There
                      weren't any of the horror stories you hear about going
                      into such a project. Everything came out great, and Matt
                      always picked up the phone throughout the project whenever
                      I had questions. Outstanding job!"
                    </p>
                    <p className="font-weight-bold text-primary text-right px-md-5">
                      — Franklin T
                    </p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Container>

            {/* <Container className="checklist mt-5 p-3 p-lg-3 justify-content-center align-items-center">
              <h3>Why MDH Construction?</h3>
              <ul className="check">
                <li>Fully licensed and insured</li>
                <li>Expert tradesman</li>
                <li>Superior craftsmanship</li>
                <li>Unmatched customer care</li>
                <li>100% satisfaction, guaranteed</li>
              </ul>
            </Container>
            <div className="text-center mt-5">
              <Button btnlink="/" btnlabel="Contact Us Today" btn={true} />
            </div> */}
          </Container>
        </Col>
      </Row>
      {/* </Container> */}
    </section>
  );
};

export default Testimonials__Body;
