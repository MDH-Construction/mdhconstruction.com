import React from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
import ImgMdhTruckMenu from '../Images/Nav/img-mdh-truck-menu';
import ImgLicensedMenu from '../Images/Nav/img-licensed-menu';
import ImgTopRatedMenu from '../Images/Nav/img-top-rated-menu';
import ImgServiceAreaMenu from '../Images/Nav/img-service-area-menu';

const AboutNav = () => {
  return (
    <Row
      noGutters
      className="about-dropdown about-dropdown-menu px-0 py-5 mt-0 mb-5 rounded drop-shadow text-center"
    >
      <Col xs={6} md={6} lg={3} className="mb-5 mb-lg-0 px-1 px-lg-3">
        <Link to="/who-we-are/">
          <div className="text-center p-1 p-md-3 bg-dark-gray">
            <ImgMdhTruckMenu className="border rounded" />
          </div>
        </Link>
        <Link
          className="nav-link px-3 py-2 text-uppercase text-center bg-primary text-white font-weight-bold"
          to="/who-we-are/"
        >
          Who <br />
          We Are
        </Link>
      </Col>
      <Col xs={6} md={6} lg={3} className="mb-5 mb-lg-0 px-1 px-lg-3">
        <Link to="/what-we-do/">
          <div className="text-center p-1 px-0 p-md-3 bg-dark-gray">
            <ImgLicensedMenu className="border rounded" />
          </div>
        </Link>
        <Link
          className="nav-link px-3 py-2 text-uppercase text-center bg-primary text-white font-weight-bold"
          to="/what-we-do/"
        >
          Licensing <br />& Insurance
        </Link>
      </Col>
      <Col xs={6} md={6} lg={3} className="mb-5 mb-lg-0 px-1 px-lg-3">
        <Link to="/ratings-and-memberships/">
          <div className="text-center p-1 px-0 p-md-3 bg-dark-gray">
            <ImgTopRatedMenu className="border rounded" />
          </div>
        </Link>
        <Link
          className="nav-link px-3 py-2 text-uppercase text-center bg-primary text-white font-weight-bold"
          to="/ratings-and-memberships/"
        >
          Ratings And <br />
          Memberships
        </Link>
      </Col>
      <Col xs={6} md={6} lg={3} className="mb-5 mb-lg-0 px-1 px-lg-3">
        <Link to="/service-area/">
          <div className="text-center p-1 px-0 p-md-3 bg-dark-gray">
            <ImgServiceAreaMenu className="border rounded" />
          </div>
        </Link>
        <Link
          className="nav-link px-3 py-2 text-uppercase text-center bg-primary text-white font-weight-bold"
          to="/service-area/"
        >
          Service <br />
          Area
        </Link>
      </Col>
    </Row>
  );
};

export default AboutNav;
