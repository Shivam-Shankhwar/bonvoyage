import React, { useState } from 'react';

import '../stylesheets/Sign.css';

const Sign = () => {
  //Initial Values of the Form
  const initialValues = {
    username: '',
    email: '',
    password: '',
    password2: '',
    check: '',
  };

  //States for the Form
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //Handlers
  const handleChange = e => {
    const { id, value, checked } = e.target;
    setFormValues({ ...formValues, [id]: value, check: checked });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = values => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = 'Username is Required 😒';
    }

    if (!values.email) {
      errors.email = 'Email is Required 😠';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format !';
    }

    if (!values.password) {
      errors.password = 'Password is Required 😤';
    } else if (values.password.length < 5 || values.password.length > 12) {
      errors.password = 'Password must be 6 to 12 characters!';
    }

    if (values.password !== values.password2) {
      errors.password2 = 'You Password does not match !';
    }

    if (!values.check) {
      errors.check = 'Please check the box 🤯';
    }

    return errors;
  };

  return (
    <>
      {
        //Conditional Rendering if form is successfully validated
        Object.keys(formErrors).length === 0 && isSubmit && (
          <div
            className="alert alert-success alert-dismissible fade show fs-5"
            role="alert"
          >
            <i className="fas fa-check-circle fs-4 text-success" />
            <strong>Great</strong> You have successfully Signed In.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )
      }

      {/* <pre className='ms-2 mt-2'>{ JSON.stringify(formValues) }</pre> */}
      <section className="section_sign py-5">
        <main className="form-signIn border rounded">
          <form onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">
              {' '}
              <span className="text-black">Sign In</span>{' '}
              <span className="text-success">Safely</span>
            </h1>

            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                values={formValues.username}
                onChange={handleChange}
              />
              <label htmlFor="username">Username</label>
              <p className="error ms-1 mt-1">{formErrors.username}</p>
            </div>

            <div className="form-floating mt-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                values={formValues.email}
                onChange={handleChange}
                autoComplete="on"
              />
              <label htmlFor="email">Email address</label>
              <p className="error ms-1 mt-1">{formErrors.email}</p>
            </div>

            <div className="form-floating mt-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                values={formValues.password}
                onChange={handleChange}
                autoComplete="on"
              />
              <label htmlFor="password">Password</label>
              <p className="error ms-1 mt-1">{formErrors.password}</p>
            </div>

            <div className="form-floating mt-3">
              <input
                type="password"
                className="form-control"
                id="password2"
                placeholder="Confirm Password"
                values={formValues.password}
                onChange={handleChange}
                autoComplete="on"
              />
              <label htmlFor="password2">Confirm Password</label>
              <p className="error ms-1 mt-1">{formErrors.password2}</p>
            </div>

            <div className="mb-3 form-check mt-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="check"
                onClick={handleChange}
              />
              <label className="form-check-label" htmlFor="check">
                Remember me
              </label>
              <p className="error mt-1">{formErrors.check}</p>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <div id="emailHelp" className="form-text mt-2">
              We'll never share your email with anyone else.
            </div>
          </form>
        </main>
      </section>
    </>
  );
};

export default Sign;
