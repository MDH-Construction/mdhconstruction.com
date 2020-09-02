import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';
import ReviewBox from '../../ReviewBox/ReviewBox';
import Button from '../../Button/Button';
import ImgFranklin from '../../Images/Pages/Testimonials/img-franklin-t';

const Home__ReviewsFranklin = ({ className }) => {
  const data = useStaticQuery(graphql`
    query Home__ReviewsFranklinQ {
      masthead: file(
        relativePath: {
          eq: "images/pages/home/asphalt-shingles-brown-siding-roofing-mdh-construction-plymouth-massachusetts.jpg"
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
        <h2 className="display-4 font-weight-bold text-white drop-shadow-darker mb-4 px-2 px-lg-0">
          5-Star Home Remodeling Reviews
        </h2>
        <hr className="divider-long" />
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
                reviewTitle="Project: New Windows"
                reviewBody={
                  <span>
                    I have never had a contractor over my house that was like
                    these guys. To begin, they were exactly on time.{' '}
                    <strong>
                      Their mannerism was very professional. They are very
                      respectful. The job was well done
                    </strong>
                    . When we ran into a problem, they actually cared and took
                    action to take care of it. They moved my furniture for me
                    out of the way to do their work and also moved it back
                    nicely when they were done. They did not leave any messes
                    and they respected my property. They even did me an extra
                    favor by taking my shutter off my window for me that was too
                    up high for me to reach. They are hard workers and they do a
                    great job. I would recommend them to anyone!
                  </span>
                }
                reviewName="Alyssa H"
              />
            </Col>
            <Col xs={12} lg={6} className="order-2 order-lg-2 bg-light">
              <ReviewBox
                reviewImage={<ImgFranklin />}
                reviewTitle="Project: Remodel or Renovate One or More Rooms"
                reviewBody={
                  <span>
                    I was very pleased with Matt and his team. Matt was always
                    very responsive and reasonable. He did a full renovation of
                    my house and came out on budget. There weren't any of the
                    horror stories you hear about going into such a project.{' '}
                    <strong>
                      Everything came out great, and Matt always picked up the
                      phone
                    </strong>{' '}
                    throughout the project whenever I had questions. Outstanding
                    job!
                  </span>
                }
                reviewName="Franklin T"
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

export default Home__ReviewsFranklin;
