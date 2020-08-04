import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewBox from '../../ReviewBox/ReviewBox';
import ImgJessicaLynneDeck from '../../Images/Pages/Testimonials/img-jessica-lynne-deck';
import Button from '../../Button/Button';

const Home__ReviewsInsulation = ({ className }) => {
  return (
    <section className="py-5 section-no-margin" id="home-reviews-section">
      <h2 className="text-white">5-Star Insulation Reviews</h2>
      <hr className="divider" />
      <Container className="p-1 p-lg-3 rounded my-5 drop-shadow">
        <Row noGutters className="p-3">
          <Col
            xs={12}
            lg={6}
            className="order-1 order-lg-1 bg-white mb-4 mb-lg-0"
          >
            <ReviewBox
              reviewImage={
                <i className="text-dark fas fa-3x fa-user-circle mb-2"></i>
              }
              reviewBody="I had the pleasure of being referred to this company via ********. I couldn't be more pleased with the insulation job and the crew. They were prompt, courteous, professional and very respectful. I was kept informed every step of the way. Excellent job and employees!"
              reviewName="Lisa H"
            />
          </Col>
          <Col xs={12} lg={6} className="order-2 order-lg-2 bg-light">
            <ReviewBox
              reviewImage={
                <i className="text-dark fas fa-3x fa-user-circle mb-2"></i>
              }
              reviewBody="My husband and I recently had the pleasure of using this company to have blown in insulation added in our attic. I can't say enough about the professionalism of the 2 men who punctually arrived at our home to do the work. They were friendly, knowledgeable, and definitely neat. It was truly refreshing to do business with this company."
              reviewName="Brenda D"
            />
          </Col>
        </Row>
      </Container>
      <Container className="text-center mt-5">
        <Button
          btnlink="/testimonials"
          btnlabel="Read More 5-Star Reviews"
          btn={true}
        />
      </Container>
    </section>
  );
};

export default Home__ReviewsInsulation;
