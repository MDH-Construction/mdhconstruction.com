import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewBox from '../../ReviewBox/ReviewBox';
import ImgJorg from '../../Images/Pages/Testimonials/img-jorg-steinhage';
import ImgJorgInsulation from '../../Images/Pages/Testimonials/img-jorg-insulation';
import Button from '../../Button/Button';

const Home__ReviewsJorg = ({ className }) => {
  return (
    <section className="py-5 section-no-margin" id="home-reviews-section">
      <h2 className="text-white">5-Star Insulation Review</h2>
      <hr className="divider" />
      <Container className="p-1 p-lg-3 rounded my-3 drop-shadow">
        <Row noGutters className="p-3">
          <Col xs={12} lg={4} className="order-1 order-lg-2">
            <ImgJorgInsulation />
          </Col>
          <Col xs={12} lg={8} className="order-2 order-lg-1 bg-light">
            <ReviewBox
              reviewImage={<ImgJorg />}
              reviewTitle="Positive: Professionalism, Punctuality, Quality,
                        Responsiveness, Value"
              reviewBody="The MDH team did a great job improving the insulation of our
                        home. They had a crew of 5 people out today and did a quality
                        and efficient job. I highly recommend this company and the
                        Mass save program to improve the insulation of your home. The
                        house already feels warmer with almost no air drafts. I am
                        confident we will be saving a substantial amount on our energy
                        bills."
              reviewName="Jörg Steinhagen"
            />
          </Col>
        </Row>
      </Container>
      <Container className="text-center my-4">
        <Button
          btnlink="/testimonials"
          btnlabel="Read More 5-Star Reviews"
          btn={true}
        />
      </Container>
    </section>
  );
};

export default Home__ReviewsJorg;
