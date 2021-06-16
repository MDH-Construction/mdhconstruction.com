import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col, Container } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';

const FormSidebar = () => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    projectLocation: '',
    projectType: '',
    findUs: '',
  });

  const {
    firstName,
    lastName,
    phone,
    email,
    projectLocation,
    projectType,
    findUs,
  } = contact;

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const data = useStaticQuery(graphql`
    query FormSidebarQ {
      phoneNumber: site {
        siteMetadata {
          phoneDisplay
          phoneHref
        }
      }
    }
  `);

  const phoneNumber = data.phoneNumber.siteMetadata;

  return (
    <Form
      name="form-sidebar"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="bg-dark border border-primary rounded shadow px-2 px-lg-4 py-5"
      id="form-sidebar"
    >
      <p className="lead text-primary font-weight-bold text-center mb-1 mt-3 mt-lg-0">
        REQUEST A FREE QUOTE
      </p>
      <hr className="divider pb-3 drop-shadow border-light" />
      <Container className="pt-2 pb-4">
        <p className="text-light">
          Wondering how much your next project will cost? Need us to come out
          and do an estimate?
        </p>
        <p className="text-light">
          Give us a call at{' '}
          <a
            className="font-weight-bold text-primary"
            href={phoneNumber.phoneHref}
          >
            {phoneNumber.phoneDisplay}
          </a>{' '}
          or fill out the form below.
        </p>
      </Container>
      <input type="hidden" name="form-name" value="form-sidebar" />
      <Form.Row>
        <Form.Group as={Col} controlId="formHomePageFirstName">
          <Form.Control
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formHomePageLastName">
          <Form.Control
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formHomePagePhone">
          <Form.Control
            name="phone"
            type="tel"
            value={phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formHomePageEmail">
          <Form.Control
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formHomePageProjectLocation">
          <Form.Control
            name="projectLocation"
            type="text"
            value={projectLocation}
            onChange={handleChange}
            placeholder="Project Location"
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formHomePageProjectType">
          <Form.Control
            name="projectType"
            as="select"
            value={projectType}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              Project Type...
            </option>
            <option value="Exterior: Addition/New Construction">
              Exterior: Addition/New Construction
            </option>
            <option value="Exterior: Roofing/Siding" className="bg-light">
              Exterior: Roofing/Siding
            </option>
            <option value="Exterior: Gutters/Downspouts">
              Exterior: Gutters/Downspouts
            </option>
            <option value="Exterior: Deck/Porch" className="bg-light">
              Exterior: Deck/Porch
            </option>
            <option value="Exterior: Windows/Doors">
              Exterior: Windows/Doors
            </option>
            <option
              value="Interior: Kitchen/Bathroom/Basement Remodel"
              className="bg-light"
            >
              Interior: Kitchen/Bathroom/Basement Remodel
            </option>
            <option value="Interior: Flooring/Tiling">
              Interior: Flooring/Tiling
            </option>
            <option value="Weatherization: Insulation" className="bg-light">
              Weatherization: Insulation
            </option>
            <option value="Weatherization: Air Sealing/Stripping/Diagnostics">
              Weatherization: Air Sealing/Stripping/Diagnostics
            </option>
            <option
              value="Other: Painting/Handyman/Debris"
              className="bg-light"
            >
              Other: Painting/Handyman/Debris
            </option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formHomePageFindUs">
          <Form.Control
            name="findUs"
            as="select"
            value={findUs}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              How Did You Find Us?
            </option>
            <option value="Angie's List">Angie's List</option>
            <option value="Facebook" className="bg-light">
              Facebook
            </option>
            <option value="Family/Friend">Family/Friend</option>
            <option value="Google/Bing" className="bg-light">
              Google/Bing
            </option>
            <option value="HomeAdvisor">HomeAdvisor</option>
            <option value="Lawn/Truck Ad" className="bg-light">
              Lawn/Truck Ad
            </option>
            <option value="Referral">Referral</option>
            <option value="Website (Yellowpages, etc.)" className="bg-light">
              Website (Yellowpages, etc.)
            </option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <div className="text-center">
        <Button
          className="btn btn-xl drop-shadow mt-4 mb-4 mb-lg-0"
          type="submit"
          value="Submit"
        >
          <span className="drop-shadow">Get My Quote</span>
        </Button>
      </div>
    </Form>
  );
};

Form.defaultProps = {
  formname: `form-sidebar`,
};

Button.propTypes = {
  formname: PropTypes.string,
};

export default FormSidebar;
