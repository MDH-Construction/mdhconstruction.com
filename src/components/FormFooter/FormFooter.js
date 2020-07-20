import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col, Container } from 'react-bootstrap';

const FormFooter = () => {
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

  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  return (
    <Container>
      <Form
        name="form-footer"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="border border-secondary rounded shadow mx-lg-0 p-2 p-md-5 bg-texture-3"
        id="form-footer"
        action="/thanks"
      >
        <h3 className="mb-1 mt-4 mt-md-0">Request A Free Quote</h3>
        <hr className="divider pb-3 drop-shadow" />
        <input type="hidden" name="form-name" value="form-footer" />
        <Form.Row>
          <Form.Group as={Col} controlId="formFooterFirstName">
            <Form.Label>
              First Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              value={firstName}
              onChange={handleChange}
              placeholder="John"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formFooterLastName">
            <Form.Label>
              Last Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              value={lastName}
              onChange={handleChange}
              placeholder="Smith"
              required
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formFooterPhone">
            <Form.Label>
              Phone <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              name="phone"
              type="tel"
              value={phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formFooterEmail">
            <Form.Label>
              Email <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="name@email.com"
              required
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formFooterProjectLocation">
            <Form.Label>
              Project Location <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              name="projectLocation"
              type="text"
              value={projectLocation}
              onChange={handleChange}
              placeholder="Plymouth, MA"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formFooterProjectType">
            <Form.Label>
              Project Type <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              name="projectType"
              as="select"
              value={projectType}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>
                Choose One...
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
              <option
                value="Weatherization: Insulation/Mass Save Program"
                className="bg-light"
              >
                Weatherization: Insulation/Mass Save Program
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
          <Form.Group as={Col} controlId="formFooterFindUs">
            <Form.Label>
              How Did You Find Us? <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              name="findUs"
              as="select"
              value={findUs}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>
                Choose One...
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

        <Form.Text className="text-danger small mb-3">* Required</Form.Text>
        <Form.Text className="text-muted small mb-3">
          Your information will never be shared with anyone else.
        </Form.Text>
        <div className="text-center mb-5 mb-md-0">
          <Button
            className="btn btn-xl drop-shadow mt-4"
            type="submit"
            value="Submit"
          >
            <span className="drop-shadow">Get My Quote</span>
          </Button>
        </div>
      </Form>
    </Container>
  );
};

Form.defaultProps = {
  formname: `contact-form-footer`,
};

Button.propTypes = {
  formname: PropTypes.string,
};

export default FormFooter;
