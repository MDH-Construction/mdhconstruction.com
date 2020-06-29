import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { Form, Button, Col, Container } from 'react-bootstrap';

const FormContactBitrix = ({ formname }) => {
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

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.all([
      axios.post(
        'https://b24-u57qin.bitrix24.com/rest/1/mtja2mf3e2o0r6s9/crm.lead.add',
        {
          fields: {
            TITLE: `${company} - ${service}`,
            NAME: `${firstName}`,
            LAST_NAME: `${lastName}`,
            SECOND_NAME: `${firstName}`,
            PHONE: [{ VALUE: `${phone}`, VALUE_TYPE: 'WORK' }],
            EMAIL: [{ VALUE: `${email}`, VALUE_TYPE: 'WORK' }],
            // COMPANY_TITLE: `${company}`,
            // POST: `${jobTitle}`,
            CURRENCY_ID: 'USD',
            OPPORTUNITY: `${budget}`,
            COMMENTS: `
            This lead came from my contact form.<br/><br/>
            <strong>Name</strong>: ${firstName} ${lastName}<br/>
            <strong>Phone</strong>: ${phone}<br/>
            <strong>Email</strong>: ${email}<br/>
            <strong>Project Location</strong>: ${projectLocation}<br/>
            <strong>Project Type</strong>: ${projectType}<br/>
            <strong>How Did You Find Us?</strong>: ${findUs}<br/><br/><br/>
            `,
          },
        }
      ),
    ]);
    navigate('/thanks/');
  };

  return (
    <Container>
      <Form
        name={formname}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="border border-secondary rounded shadow mx-lg-0 p-2 p-md-5 bg-texture-3"
        id="footer-contact-form"
        onSubmit={handleSubmit}
      >
        <h3 className="mb-1 mt-4 mt-lg-0">Request A Free Quote</h3>
        <hr className="divider pb-3 drop-shadow" />
        <input type="hidden" name="form-name" value={formname} />
        <Form.Row>
          <Form.Group as={Col} controlId="formContactBixtrixFirstName">
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
          <Form.Group as={Col} controlId="formContactBixtrixLastName">
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
          <Form.Group as={Col} controlId="formContactBixtrixPhone">
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
          <Form.Group as={Col} controlId="formContactBixtrixEmail">
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
          <Form.Group as={Col} controlId="formContactBixtrixProjectLocation">
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
          <Form.Group as={Col} controlId="formContactBixtrixProjectType">
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
                value="Insulation: Mass Save Program"
                className="bg-light"
              >
                Insulation: Mass Save Program
              </option>
              <option value="Weatherization: Air Sealing/Stripping">
                Weatherization: Air Sealing/Stripping
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
          <Form.Group as={Col} controlId="formContactBixtrixFindUs">
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
        <div className="text-center mb-5 mb-lg-0">
          <Button
            className="btn btn-xl drop-shadow-dark mt-4"
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

export default FormContactBitrix;
