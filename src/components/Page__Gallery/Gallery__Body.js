import React from 'react';
import { Link, graphql } from 'gatsby';
import Gallery from '@browniebroke/gatsby-image-gallery';
import '@browniebroke/gatsby-image-gallery/dist/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import ImgTruck from '../ImageComps/img-truck';
import Button from '../Button/Button';

const Gallery__Body = ({ className, data }) => {
  const images = data.images.edges.map(({ node }) => node.childImageSharp);
  // `images` is an array of objects with `thumb` and `full`
  return (
    <section id="about-page">
      <Gallery images={images} />
      {/* <Row>
        <Col className="py-3 py-lg-5" xs={12} md={12}>
          <Container>
            <h2>Your Local Construction Company</h2>
            <p>
              MDH Construction remains committed to superior craftsmanship and
              unmatched customer care. Our team of highly qualified tradesmen
              take great pride in their work. Centrally located in Plymouth,
              Massachusetts, we service the Boston area, South Shore and Cape
              Cod. We specialize in a wide variety of home improvement,
              remodeling, and commercial construction services — ranging from
              large frame-to-finish building jobs to small installation
              projects.
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
      </Row> */}
    </section>
  );
};

// export const query = graphql`
//   query ImagesForGallery {
//     allFile {
//       edges {
//         node {
//           childImageSharp {
//             thumb: fluid(maxWidth: 270, maxHeight: 270) {
//               ...GatsbyImageSharpFluid
//             }
//             full: fluid(maxWidth: 1024) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export const query = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "images/gallery-imgs" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default Gallery__Body;
