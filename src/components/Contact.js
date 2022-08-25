import React, { useEffect, useState } from 'react';

import '../stylesheets/Contact.css';

import contact1_s from '../assets/images/img/contact-1-s.jpg';
import contact1_m from '../assets/images/img/contact-1-m.jpg';
import contact1_l from '../assets/images/img/contact-1-l.jpg';
import axios from 'axios';

function Contact() {
  //Initial Values of the form i.e empty.
  const initialValues = {
    firstname: '',
    email: '',
    contact: '',
    country: '',
  };

  //Three states for formValues, errors and for submit & misc vars.
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [country, setCountry] = useState([]);
  const country_uri = 'https://restcountries.com/v2/all';

  useEffect(() => {
    axios.get(country_uri).then(res => {
      setCountry(res.data);
    });
  }, []);

  //A bunch of Form_handlers
  const handleChange = e => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(prev => !prev);
  };

  const validate = values => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstname) {
      errors.username = 'First Name is Required !';
    }

    if (!values.email) {
      errors.email = 'Please enter your email !';
    } else if (!regex.test(values.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!values.contact) {
      errors.contact = 'Please Enter Your Contact Number';
    }

    if (!values.country) {
      errors.country = 'Please enter your country !';
    }

    return errors;
  };

  return (
    <>
      <div className="services__head img-fluid mb-5">
        <picture>
          <source media="(min-width: 1000px)" srcSet={contact1_l} />
          <source
            media="(max-width: 999px) and (min-width: 800px)"
            srcSet={contact1_m}
          />
          <source media="(max-width: 799px)" srcSet={contact1_s} />
          <img
            className="services--image"
            src={contact1_l}
            alt="Village background"
          />
        </picture>
        <div className="services__head--text">
          <p className="fw-bolder mb-0">We'd Love to Hear From You</p>
        </div>
      </div>

      {/* Conditionally Rendering if form is successfully validated i.e errors.length = 0 */}
      {Object.keys(formErrors).length === 0 && isSubmit && (
        <div
          className="alert alert-success alert-dismissible fade show fs-5"
          role="alert"
        >
          <i className="fas fa-check-circle fs-4 text-success" />
          <strong>Great</strong> we've received your request.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}

      <h2 className="text-center">CONTACT US</h2>
      <hr className="w-50 m-auto" />
      <hr className="w-50 m-auto" />
      <p className="text-muted text-center mt-1">
        Para todas las consultas, envíenos un correo electrónico utilizando el
        siguiente formulario.
      </p>

      <section className="contact_form mx-auto py-5">
        <p className="mb-2 fs-5 fw-bold">How can we help you?</p>
        {/* <pre className="ms-2 mt-2">{JSON.stringify(formValues)}</pre>  */}
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="firstname" className="form-label">
              First Name<span className="text-danger fs-5">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="First Name"
              onChange={handleChange}
              value={formValues.firstname}
            />
            <p className="error ms-1 mt-1">{formErrors.username}</p>
          </div>

          <div className="col-md-6 marginTopForLastName">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              id="lastname"
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="email" className="form-label">
              Email Address<span className="text-danger fs-5">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email Address"
              onChange={handleChange}
              value={formValues.email}
            />
            <p className="error ms-1 mt-1">{formErrors.email}</p>
          </div>

          <div className="col-md-6">
            <label htmlFor="contact" className="form-label">
              Contact Number<span className="text-danger fs-5">*</span>
            </label>
            <input
              className="form-control"
              type="tel"
              id="contact"
              placeholder="10-Digit Number"
              pattern="[0-9]{10}"
              onChange={handleChange}
              value={formValues.contact}
            />
            <p className="error ms-1 mt-1">{formErrors.contact}</p>
          </div>

          <div className="col-md-6">
            <label htmlFor="country" className="form-label">
              Country<span className="text-danger fs-5">*</span>
            </label>

            <select
              className="form-select"
              id="country"
              aria-label="Country"
              onChange={handleChange}
              value={formValues.country}
            >
              <option defaultValue={'---Select Your Country---'}>
                ---Select Your Country---
              </option>
              {country.map((name, index) => {
                return (
                  <option value={name.name} key={index}>
                    {name.name}
                  </option>
                );
              })}
            </select>
            <p className="error ms-1 mt-1">{formErrors.country}</p>
          </div>

          <div className="col-md-12">
            <label htmlFor="textarea" className="form-label">
              Message
            </label>
            <textarea
              id="textarea"
              className="form-control"
              rows="3"
              aria-label="Optional Message"
              placeholder="Please Write us down your thoughts...."
            />
          </div>

          <div className="d-grid col-3 mt-14">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
