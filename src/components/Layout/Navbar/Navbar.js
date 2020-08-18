import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import ImgMDHLogo from '../../Images/Logos/img-mdh-logo';
import ImgMdhTruckMenu from '../../Images/Nav/img-mdh-truck-menu';
import ImgTopRatedMenu from '../../Images/Nav/img-top-rated-menu';
import ImgLicensedMenu from '../../Images/Nav/img-licensed-menu';
import ImgServiceAreaMenu from '../../Images/Nav/img-service-area-menu';
import ImgExteriorServicesMenu from '../../Images/Nav/img-exterior-services-menu';
import ImgInteriorServicesMenu from '../../Images/Nav/img-interior-services-menu';
import ImgInsulationServicesMenu from '../../Images/Nav/img-insulation-services-menu';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <>
        <Navbar
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
          expand="lg"
          collapseOnSelect={true}
        >
          <Container className="align-content-center">
            <Link
              to="/"
              className="svg-size-logo js-scroll-trigger text-secondary text-uppercase align-content-center pointer"
            >
              <ImgMDHLogo />
            </Link>
            <Navbar.Toggle
              aria-label="Toggle navigation"
              aria-controls="navbarResponsive"
            >
              <span> </span>
              <span> </span>
              <span> </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarResponsive" aria-expanded="false">
              <Nav className="navbar-nav ml-auto mt-2 my-lg-0 ">
                {/* Desktop Menu */}
                <li className="nav-item my-dropdown d-none d-lg-inline nav-li-m-top">
                  <Link className="nav-link text-uppercase" to="/about">
                    About <i className="fas fa-angle-down ml-1"></i>
                  </Link>
                  <Row className="my-dropdown-menu px-2 py-3 mt-0 rounded drop-shadow">
                    <Col lg={3}>
                      <Link to="/who-we-are">
                        <div className="text-center p-3 bg-dark-gray">
                          <ImgMdhTruckMenu className="border rounded" />
                        </div>
                      </Link>
                      <Link
                        className="nav-link px-3 py-2 text-uppercase text-center"
                        to="/who-we-are"
                      >
                        Who We Are
                      </Link>
                    </Col>
                    <Col lg={3}>
                      <Link to="/what-we-do">
                        <div className="text-center p-3 bg-dark-gray">
                          <ImgLicensedMenu className="border rounded" />
                        </div>
                      </Link>
                      <Link
                        className="nav-link px-3 py-2 text-uppercase text-center"
                        to="/what-we-do"
                      >
                        Licensing And Insurance
                      </Link>
                    </Col>
                    <Col lg={3}>
                      <Link to="/ratings-and-memberships">
                        <div className="text-center p-3 bg-dark-gray">
                          <ImgTopRatedMenu className="border rounded" />
                        </div>
                      </Link>
                      <Link
                        className="nav-link px-3 py-2 text-uppercase text-center"
                        to="/ratings-and-memberships"
                      >
                        Ratings And Memberships
                      </Link>
                    </Col>
                    <Col lg={3}>
                      <Link to="/service-area">
                        <div className="text-center p-3 bg-dark-gray">
                          <ImgServiceAreaMenu className="border rounded" />
                        </div>
                      </Link>
                      <Link
                        className="nav-link px-3 py-2 text-uppercase text-center"
                        to="/service-area"
                      >
                        Service Area
                      </Link>
                    </Col>
                  </Row>
                </li>
                <li className="nav-item my-dropdown d-none d-lg-inline nav-li-m-top">
                  <Link className="nav-link text-uppercase" to="/services">
                    Services <i className="fas fa-angle-down ml-1"></i>
                  </Link>
                  <Row className="my-dropdown-menu px-2 py-3 mt-0 rounded drop-shadow">
                    <Col xs={4}>
                      <Link to="/">
                        <div className="text-center p-3 bg-dark-gray">
                          <ImgExteriorServicesMenu className="border rounded" />
                        </div>
                      </Link>
                      <Link
                        className="nav-link px-3 py-2 text-uppercase text-center"
                        to="/about"
                      >
                        Exterior
                      </Link>
                    </Col>
                    <Col xs={4}>
                      <Link to="/">
                        <div className="text-center p-3 bg-dark-gray">
                          <ImgInteriorServicesMenu className="border rounded" />
                        </div>
                      </Link>
                      <Link
                        className="nav-link px-3 py-2 text-uppercase text-center"
                        to="/about"
                      >
                        Interior
                      </Link>
                    </Col>
                    <Col xs={4}>
                      <Link to="/">
                        <div className="text-center p-3 bg-dark-gray">
                          <ImgInsulationServicesMenu className="border rounded" />
                        </div>
                      </Link>
                      <Link
                        className="nav-link px-3 py-2 text-uppercase text-center"
                        to="/about"
                      >
                        Weatherization
                      </Link>
                    </Col>
                  </Row>
                </li>
                <li className="nav-item d-none d-lg-inline nav-li-m-top">
                  <Link className="nav-link text-uppercase" to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item d-none d-lg-inline nav-li-m-top">
                  <Link className="nav-link text-uppercase" to="/testimonials">
                    Testimonials
                  </Link>
                </li>
                <li className="nav-item d-none d-lg-inline nav-li-m-top">
                  <Link className="nav-link text-uppercase" to="/employment">
                    Employment
                  </Link>
                </li>
                <li className="nav-item d-none d-lg-inline nav-li-m-top">
                  <Link className="nav-link text-uppercase" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item my-auto d-none d-lg-inline">
                  <Link
                    className="btn-nav nav-link text-uppercase py-2 ml-4 drop-shadow pointer"
                    to="/contact-us"
                  >
                    <span className="drop-shadow">Contact</span>
                  </Link>
                </li>
                {/* Mobile Menu */}
                <Link to="/">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="mt-5 bg-secondary border-menu-item-top">
                      <div className="d-flex">
                        <i className="fas fa-home mt-3 mr-3 text-white"></i>
                        <span
                          className="nav-button text-uppercase drop-shadow"
                          to="/"
                        >
                          Home
                        </span>
                      </div>
                    </Container>
                  </li>
                </Link>
                <Link to="/about">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="bg-secondary border-menu-item">
                      <div className="d-flex">
                        <i className="fas fa-address-card mt-3 mr-3 text-white"></i>
                        <span className="nav-button text-uppercase drop-shadow">
                          About
                        </span>
                      </div>
                    </Container>
                  </li>
                </Link>
                <Link to="/services">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="bg-secondary border-menu-item">
                      <div className="d-flex">
                        <i className="fas fa-tools mt-3 mr-3 text-white"></i>
                        <span className="nav-button text-uppercase drop-shadow">
                          Services
                        </span>
                      </div>
                    </Container>
                  </li>
                </Link>
                <Link to="/gallery">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="bg-secondary border-menu-item">
                      <div className="d-flex">
                        <i className="fas fa-camera mt-3 mr-3 text-white"></i>
                        <span className="nav-button text-uppercase drop-shadow">
                          Gallery
                        </span>
                      </div>
                    </Container>
                  </li>
                </Link>
                <Link to="/testimonials">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="bg-secondary border-menu-item">
                      <div className="d-flex">
                        <i className="fas fa-medal mt-3 mr-3 text-white"></i>
                        <span className="nav-button text-uppercase drop-shadow">
                          Testimonials
                        </span>
                      </div>
                    </Container>
                  </li>
                </Link>
                <Link to="/employment">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="bg-secondary border-menu-item">
                      <div className="d-flex">
                        <i className="fas fa-hard-hat mt-3 mr-3 text-white"></i>
                        <span className="nav-button text-uppercase drop-shadow">
                          Employment
                        </span>
                      </div>
                    </Container>
                  </li>
                </Link>
                <Link to="/blog">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="bg-secondary border-menu-item">
                      <div className="d-flex">
                        <i className="fas fa-pencil-alt mt-3 mr-3 text-white"></i>
                        <span className="nav-button text-uppercase drop-shadow">
                          Blog
                        </span>
                      </div>
                    </Container>
                  </li>
                </Link>
                <Link to="/contact-us">
                  <li className="nav-item mx-3 d-lg-none">
                    <Row>
                      <Container>
                        <Col
                          xs={12}
                          className="py-3 bg-primary container justify-content-center align-items-center border-menu-contact"
                        >
                          <span className="nav-button text-uppercase text-white">
                            <span className="drop-shadow mobile-menu-contact-text">
                              Contact
                            </span>
                          </span>
                        </Col>
                      </Container>
                    </Row>
                  </li>
                </Link>
                <li className="nav-item mx-3 d-lg-none">
                  <Row>
                    <Container>
                      <Col
                        xs={6}
                        className="bg-secondary py-3 text-center justify-content-center align-items-center border-menu-item-bottom-left"
                      >
                        <a
                          className="nav-button text-uppercase drop-shadow-dark"
                          href="tel:+14012169868"
                        >
                          <i className="fas fa-phone mr-3 text-white"></i>Call
                        </a>
                      </Col>
                      <Col
                        xs={6}
                        className="bg-secondary py-3 text-center justify-content-center align-items-center border-menu-item-bottom-right"
                      >
                        <a
                          className="nav-button text-uppercase drop-shadow-dark"
                          href="mailto:contact@johngrattan.com?Subject=Important%20Email%20From%20Website"
                          target="_blank"
                        >
                          <i className="fas fa-envelope mr-3 text-white"></i>
                          Email
                        </a>
                      </Col>
                    </Container>
                  </Row>
                </li>
                {/* <div className="d-lg-none mt-4 mb-1 text-center text-white">
                  <a href="#">
                    <i className="fab fa-2x fa-facebook px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-instagram px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-twitter px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-youtube px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-linkedin px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-github px-2"></i>
                  </a>
                </div> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
