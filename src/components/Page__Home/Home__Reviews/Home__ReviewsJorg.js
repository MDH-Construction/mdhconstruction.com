import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';
import ReviewBox from '../../ReviewBox/ReviewBox';
import ImgJorg from '../../Images/Pages/Testimonials/img-jorg-steinhage';
import ImgJorgInsulation from '../../Images/Pages/Testimonials/img-jorg-insulation';
import Button from '../../Button/Button';

const Home__ReviewsJorg = ({ className }) => {
  const data = useStaticQuery(graphql`
    query Home__ReviewsJorgQ {
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
          5-Star Mass Save Insulation Review
        </h2>
        <hr className="divider-long" />
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
      </Container>
    </BackgroundImage>
  );
};

export default Home__ReviewsJorg;
