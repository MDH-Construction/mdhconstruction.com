import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';
import ReviewBox from '../../../common/ReviewBox';
import ImgJessicaLynneDeck from '../../../images/pages/testimonials/img-jessica-lynne-deck';
import ButtonInternal from '../../../common/buttons/ButtonInternal';

const Insulation = ({ className }) => {
  const data = useStaticQuery(graphql`
    query InsulationQ {
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
      backgroundColor="#040e18"
      alt="Asphalt shingles for roof replacement and roof repair services by MDH Construction in Plymouth, MA"
    >
      <Container className="py-5 px-0">
        <h2 className="display-4 font-weight-bold text-white drop-shadow-darker mb-4 px-2 px-lg-0">
          5-Star Home Insulation Reviews
        </h2>
        <hr className="divider-long" />
        <Container className="p-1 p-lg-3 rounded my-3 drop-shadow">
          <Row noGutters className="p-3">
            <Col
              xs={12}
              lg={6}
              className="order-1 order-lg-1 bg-white mb-4 mb-lg-0"
            >
              <ReviewBox
                reviewImage={
                  <i className="text-dark fas fa-3x fa-user-circle mb-2" />
                }
                reviewTitle="Project: Home Insulation & Weatherization"
                reviewBody={
                  <span>
                    I had the pleasure of being referred to this company via
                    ********.{' '}
                    <strong>
                      I couldn't be more pleased with the insulation job and the
                      crew
                    </strong>
                    . They were prompt, courteous, professional and very
                    respectful. I was kept informed every step of the way.
                    Excellent job and employees!
                  </span>
                }
                reviewName="Lisa H"
              />
            </Col>
            <Col xs={12} lg={6} className="order-2 order-lg-2 bg-light">
              <ReviewBox
                reviewImage={
                  <i className="text-dark fas fa-3x fa-user-circle mb-2" />
                }
                reviewTitle="Project: Home Insulation & Weatherization"
                reviewBody={
                  <span>
                    My husband and I recently had the pleasure of using this
                    company to have blown in insulation added in our attic. I
                    can't say enough about the professionalism of the 2 men who
                    punctually arrived at our home to do the work. They were
                    friendly, knowledgeable, and definitely neat.{' '}
                    <strong>
                      It was truly refreshing to do business with this company
                    </strong>
                    .
                  </span>
                }
                reviewName="Brenda D"
              />
            </Col>
          </Row>
        </Container>
        <Container className="text-center my-4">
          <ButtonInternal
            btnlink="/testimonials/"
            btnlabel="Read More 5-Star Reviews"
            btn
          />
        </Container>
      </Container>
    </BackgroundImage>
  );
};

export default Insulation;
