import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import ImgJorg from '../Images/Pages/Testimonials/img-jorg-steinhage';
import ImgFranklin from '../Images/Pages/Testimonials/img-franklin-t';
import ReviewBox from '../ReviewBox/ReviewBox';
import ImgJessicaLynneDeck from '../Images/Pages/Testimonials/img-jessica-lynne-deck';
import ImgJorgInsulation from '../Images/Pages/Testimonials/img-jorg-insulation';

const Testimonials__Body = ({ className }) => {
  return (
    <section className="section-container" id="about-page">
      <Container>
        <Container className="px-0 py-5 py-lg-5">
          <h2 className="display-4">What People Are Saying...</h2>
          <Container className="p-1 p-lg-3 bg-secondary rounded my-5 drop-shadow">
            <Row noGutters className="p-3">
              <Col xs={12} lg={5} className="order-1 order-lg-1">
                <ImgJessicaLynneDeck />
              </Col>
              <Col xs={12} lg={7} className="order-2 order-lg-2 bg-light">
                <ReviewBox
                  reviewImage={
                    <i className="text-dark fas fa-3x fa-user-circle mb-2"></i>
                  }
                  reviewTitle="Project: Deck Construction, Home Improvement"
                  reviewBody={
                    <span>
                      Michael and his crews have been awesome to work with for
                      our home improvements. They have been amazing at keeping
                      the areas they have worked on clean when they leave for
                      the day,{' '}
                      <strong>
                        they are fast, efficient, and we’re very happy with the
                        work done so far
                      </strong>
                      . There were some snags with getting the lumber due to
                      Covid-19, but Michael kept us informed along the way and
                      was able to get every we needed. He had a solution to keep
                      our project on track if he couldn’t, which was awesome. We
                      even threw a couple extra projects on because they have
                      been so easy to work with. Highly recommend giving Michael
                      a call for any of your house projects.
                    </span>
                  }
                  reviewName="Jessica Lynne"
                />
              </Col>
            </Row>
          </Container>

          <Container className="p-1 p-lg-3 bg-secondary rounded my-5 drop-shadow">
            <Row noGutters className="p-3">
              <Col xs={12} lg={4} className="order-1 order-lg-2">
                <ImgJorgInsulation />
              </Col>
              <Col xs={12} lg={8} className="order-2 order-lg-1 bg-light">
                <ReviewBox
                  reviewImage={<ImgJorg />}
                  reviewTitle="Project: Mass Save Home Insulation Program"
                  reviewBody={
                    <span>
                      Positive: Professionalism, Punctuality, Quality,
                      Responsiveness, Value.
                      <br />
                      <strong>
                        The MDH team did a great job improving the insulation of
                        our home
                      </strong>
                      . They had a crew of 5 people out today and did a quality
                      and efficient job. I highly recommend this company and the
                      Mass save program to improve the insulation of your home.
                      The house already feels warmer with almost no air drafts.
                      I am confident we will be saving a substantial amount on
                      our energy bills.
                    </span>
                  }
                  reviewName="Jörg Steinhagen"
                />
              </Col>
            </Row>
          </Container>

          <Container className="p-1 p-lg-3 bg-secondary rounded my-5 drop-shadow">
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
                  reviewTitle="Project: Home Insulation & Weatherization"
                  reviewBody={
                    <span>
                      I had the pleasure of being referred to this company via
                      ********.{' '}
                      <strong>
                        I couldn't be more pleased with the insulation job and
                        the crew
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
                    <i className="text-dark fas fa-3x fa-user-circle mb-2"></i>
                  }
                  reviewTitle="Project: Home Insulation & Weatherization"
                  reviewBody={
                    <span>
                      My husband and I recently had the pleasure of using this
                      company to have blown in insulation added in our attic. I
                      can't say enough about the professionalism of the 2 men
                      who punctually arrived at our home to do the work. They
                      were friendly, knowledgeable, and definitely neat.{' '}
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

          <Container className="p-1 p-lg-3 bg-secondary rounded my-5 drop-shadow">
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
                      these guys. To begin, they were exactly on time. Their
                      mannerism was very professional. They are very respectful.
                      The job was well done.{' '}
                      <strong>
                        When we ran into a problem, they actually cared and took
                        action to take care of it
                      </strong>
                      . They moved my furniture for me out of the way to do
                      their work and also moved it back nicely when they were
                      done. They did not leave any messes and they respected my
                      property. They even did me an extra favor by taking my
                      shutter off my window for me that was too up high for me
                      to reach. They are hard workers and they do a great job. I
                      would recommend them to anyone!
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
                      very responsive and reasonable. He did a full renovation
                      of my house and came out on budget. There weren't any of
                      the horror stories you hear about going into such a
                      project.{' '}
                      <strong>
                        Everything came out great, and Matt always picked up the
                        phone
                      </strong>{' '}
                      throughout the project whenever I had questions.
                      Outstanding job!
                    </span>
                  }
                  reviewName="Franklin T"
                />
              </Col>
            </Row>
          </Container>

          <Container className="p-1 p-lg-3 bg-secondary rounded my-5 drop-shadow">
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
                  reviewTitle="Project: Install or Replace Interior Doors"
                  reviewBody={
                    <span>
                      They installed 6 interior door slabs, 4 slabs provided by
                      contractor and 2 slabs and all hardware by us. They sent
                      the proposal in a timely fashion and we accepted the
                      proposal and sent deposit on 5/23. We set up the date for
                      install for 6/1. They were on time.{' '}
                      <strong>
                        They covered the floor with a cloth as it was raining
                        out and cleaned up as they went along
                      </strong>
                      . They were very polite and friendly and the place was
                      spotless when they left. We are very happy with our new
                      doors.
                    </span>
                  }
                  reviewName="Janet S"
                />
              </Col>
              <Col xs={12} lg={6} className="order-2 order-lg-2 bg-light">
                <ReviewBox
                  reviewImage={
                    <i className="text-dark fas fa-3x fa-user-circle mb-2"></i>
                  }
                  reviewTitle="Project: Install or Upgrade Blown-In Insulation"
                  reviewBody={
                    <span>
                      <strong>They were very thorough and professional</strong>{' '}
                      and paid a lot of attention to the little things like
                      sealing the rim joists and outlet boxes.
                    </span>
                  }
                  reviewName="Arthur C"
                />
              </Col>
            </Row>
          </Container>

          <Container className="p-1 p-lg-3 bg-secondary rounded my-5 drop-shadow">
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
                  reviewTitle="Project: Install or Replace Seamless Metal Gutters"
                  reviewBody={
                    <span>
                      Quality work. Polite and quick.{' '}
                      <strong>Hired again for gutter covers</strong>!
                    </span>
                  }
                  reviewName="Stacy M"
                />
              </Col>
              <Col xs={12} lg={6} className="order-2 order-lg-2 bg-light">
                <ReviewBox
                  reviewImage={
                    <i className="text-dark fas fa-3x fa-user-circle mb-2"></i>
                  }
                  reviewTitle="Project: Repair or Replace Section of Seamless Metal Gutters"
                  reviewBody={
                    <span>
                      Repercussions.mdid an <strong>excellent job</strong>
                    </span>
                  }
                  reviewName="George G"
                />
              </Col>
            </Row>
          </Container>

          <Container className="p-1 p-lg-3 bg-secondary rounded my-5 drop-shadow">
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
                  reviewTitle="Project: Install or Upgrade Batt, Rolled or Reflective Insulation"
                  reviewBody={
                    <span>
                      Responsive, professional,{' '}
                      <strong>good value for money</strong>. These guys are top
                      notch.
                    </span>
                  }
                  reviewName="Peter A"
                />
              </Col>
              <Col xs={12} lg={6} className="order-2 order-lg-2 bg-light">
                <ReviewBox
                  reviewImage={
                    <i className="text-dark fas fa-3x fa-user-circle mb-2"></i>
                  }
                  reviewTitle="Project: Install or Upgrade Batt, Rolled or Reflective Insulation"
                  reviewBody={
                    <span>
                      <strong>They showed up on time</strong>, did the job as I
                      had requested promptly and efficiently, cleaned up after
                      themselves, and charged a fair price.
                    </span>
                  }
                  reviewName="George L"
                />
              </Col>
            </Row>
          </Container>

          <Container className="p-1 p-lg-3 bg-secondary rounded my-5 drop-shadow">
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
                  reviewTitle="Project: Install or Replace Weatherstripping"
                  reviewBody={
                    <span>
                      Although the project was a small one,{' '}
                      <strong>
                        they treated it as important to do correctly
                      </strong>
                    </span>
                  }
                  reviewName="Roger Y"
                />
              </Col>
              <Col xs={12} lg={6} className="order-2 order-lg-2 bg-light">
                <ReviewBox
                  reviewImage={
                    <i className="text-dark fas fa-3x fa-user-circle mb-2"></i>
                  }
                  reviewTitle="Project: Install or Upgrade Blown-In Insulation"
                  reviewBody={
                    <span>
                      Showed up on time..answered all questions..kind
                      guys...cleaned up...<strong>highly recommended</strong>
                    </span>
                  }
                  reviewName="Shawn M"
                />
              </Col>
            </Row>
          </Container>

          <Container className="p-1 p-lg-3 bg-secondary rounded my-5 drop-shadow">
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
                  reviewTitle="Project: Remodel, Home Improvement"
                  reviewBody={
                    <span>
                      MDH built a beautiful mantel around my fire place. I
                      showed the builder a picture of what I wanted and he built
                      it exactly the same.{' '}
                      <strong>I would highly recommend MDH</strong>. They are
                      also very nice people to work with.
                    </span>
                  }
                  reviewName="Roxanne Pepe"
                />
              </Col>
              <Col xs={12} lg={6} className="order-2 order-lg-2 bg-light">
                <ReviewBox
                  reviewImage={
                    <i className="text-dark fas fa-3x fa-user-circle mb-2"></i>
                  }
                  reviewTitle="Project: Donation"
                  reviewBody={
                    <span>
                      I recommend this company because they just{' '}
                      <strong>donated 400 protective face mask</strong> to the
                      hospital staff to protect them from the Coronavirus
                    </span>
                  }
                  reviewName="Cheryl Gorveatt"
                />
              </Col>
            </Row>
          </Container>

          <Container className="p-1 p-lg-3 bg-secondary rounded my-5 drop-shadow">
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
                  reviewTitle="Project: Seamless Gutters"
                  reviewBody={
                    <span>
                      Awesome guys. Great work.{' '}
                      <strong>Would totally recommend</strong>
                    </span>
                  }
                  reviewName="Josh Ziegler"
                />
              </Col>
              <Col xs={12} lg={6} className="order-2 order-lg-2 bg-light">
                <ReviewBox
                  reviewImage={
                    <i className="text-dark fas fa-3x fa-user-circle mb-2"></i>
                  }
                  reviewTitle="Project: Deck Construction, Home Improvement"
                  reviewBody={
                    <span>
                      They are fast, efficient ,and{' '}
                      <strong>very reasonably priced</strong>
                    </span>
                  }
                  reviewName="Charlene Ellis"
                />
              </Col>
            </Row>
          </Container>

          <Container className="p-1 p-lg-3 bg-secondary rounded my-5 drop-shadow">
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
                  reviewTitle="Project: Floor Replacement, Remodel"
                  reviewBody={
                    <span>
                      <strong>The best</strong>! In and out in 5 minutes. Scale
                      house staff very helpful. The old timer at de tipping
                      floor very helpful too
                    </span>
                  }
                  reviewName="Milo M Goodman"
                />
              </Col>
              <Col xs={12} lg={6} className="order-2 order-lg-2 bg-light">
                <ReviewBox
                  reviewImage={
                    <i className="text-dark fas fa-3x fa-user-circle mb-2"></i>
                  }
                  reviewTitle="Project: Seamless Gutters"
                  reviewBody="Great guys"
                  reviewName="Jason Kuhn"
                />
              </Col>
            </Row>
          </Container>

          <Container className="p-1 p-lg-3 bg-secondary rounded my-5 drop-shadow">
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
                  reviewTitle="Project: Remodeling, Basement Waterproofing"
                  reviewBody={
                    <span>
                      They did a great job. The workmen were decent, friendly,
                      skilled and professional. They were prompt,{' '}
                      <strong>working when expected and cleaned up</strong>{' '}
                      after doing the job each day. We are highly satisfied.
                    </span>
                  }
                  reviewName="Angie's List"
                />
              </Col>
              <Col xs={12} lg={6} className="order-2 order-lg-2 bg-light">
                <ReviewBox
                  reviewImage={
                    <i className="text-dark fas fa-3x fa-user-circle mb-2"></i>
                  }
                  reviewTitle="Project: Remodeling, Roofing"
                  reviewBody={
                    <span>
                      Excellent, fast and <strong>reasonably priced</strong>
                    </span>
                  }
                  reviewName="Angie's List"
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </section>
  );
};

export default Testimonials__Body;
