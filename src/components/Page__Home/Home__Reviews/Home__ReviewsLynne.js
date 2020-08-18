import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';
import ReviewBox from '../../ReviewBox/ReviewBox';
import ImgJessicaLynneDeck from '../../Images/Pages/Testimonials/img-jessica-lynne-deck';
import Button from '../../Button/Button';

const Home__ReviewsLynne = ({ className }) => {
  const data = useStaticQuery(graphql`
    query Home__ReviewsLynneQ {
      masthead: file(
        relativePath: {
          eq: "images/pages/home/asphalt-shingles-siding-roofing-mdh-construction-plymouth-massachusetts.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.masthead.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className="py-5 section-no-margin bg-img-dark-gradient-20"
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="Asphalt shingles for roof replacement and roof repair services by MDH Construction in Plymouth, MA"
    >
      <Container className="py-5 px-0">
        <h2 className="display-4 font-weight-bold text-white drop-shadow-darker mb-4">
          5-Star Home Improvement Review
        </h2>
        <hr className="divider-long" />
        <Container className="p-1 p-lg-3 rounded my-3 drop-shadow">
          <Row noGutters className="p-3">
            <Col xs={12} lg={4} className="order-1 order-lg-1">
              <ImgJessicaLynneDeck />
            </Col>
            <Col xs={12} lg={8} className="order-2 order-lg-2 bg-light">
              <ReviewBox
                reviewImage={
                  <i className="text-dark fas fa-3x fa-user-circle mb-2"></i>
                }
                reviewBody="Michael and his crews have been awesome to work with for our home improvements. They have been amazing at keeping the areas they have worked on clean when they leave for the day, they are fast, efficient, and we’re very happy with the work done so far. There were some snags with getting the lumber due to Covid-19, but Michael kept us informed along the way and was able to get every we needed. He had a solution to keep our project on track if he couldn’t, which was awesome. We even threw a couple extra projects on because they have been so easy to work with. Highly recommend giving Michael a call for any of your house projects."
                reviewName="Jessica Lynne"
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
      </Container>
    </BackgroundImage>
  );
};

export default Home__ReviewsLynne;
