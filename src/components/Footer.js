import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/Footer.css';

function Footer() {
  return (
    <div className="container border-top mt-4">
      <footer className="pt-5">
        <div className="container footer-grid px-5">
          <div className="logo-col">
            <Link className="navbar-brand text-dark" to="/">
              Bon<span className="text-success me-2">Voyage</span>
              <i className="fas fa-paper-plane"></i>
            </Link>
            <p className="logo-description text-muted">
              Designed and built with all the love in the world with the help of
              our
              <Link to="/about" className="mx-1 p-0 text-dark">
                team members.
              </Link>
            </p>
          </div>

          <div className="nav-col">
            <h5>Sitemap</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/about" className="nav-link p-0 text-muted">
                  About
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/services" className="nav-link p-0 text-muted">
                  Services
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/contact" className="nav-link p-0 text-muted">
                  Contact-Us
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/sign" className="nav-link p-0 text-muted">
                  Sign-in
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav-col">
            <h5>Services</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/allactivities" className="nav-link p-0 text-muted">
                  API Hit
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/booktour" className="nav-link p-0 text-muted">
                  Book Tour
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/pricing" className="nav-link p-0 text-muted">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/faq" className="nav-link p-0 text-muted">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/about" className="nav-link p-0 text-muted">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="address-col">
            <h5>Reach Out to Us</h5>
            <div className="contacts">
              <p className="address mb-2">
                <i className="fas fa-map-marked-alt mb-1 text-muted"></i>
                23 Nehru Road, Sector 60, Noida, Uttar Pradesh
              </p>
              <a
                href="tel:790-549-8297"
                className="mb-2 footer-link text-muted"
              >
                <i className="fas fas fa-phone mb-1 text-muted"></i>
                790-605-8194
              </a>
              <br />
              <a
                href="mailto:Chandrakant19710@gmail.com"
                className="footer-link text-muted"
              >
                <i className="fas fa-envelope-open text-muted" />
                Chandrakant199710
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between pt-2 mt-4 border-top">
          <p className="text-muted">
            &copy; 2023 BonVoyage | All Rights Reserved.
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <Link className="link-dark text-primary" to="#">
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li className="ms-3">
              {/* <Link className="link-dark" to="#">
                <i className="fab fa-linkedin"></i>
              </Link> */}
              <a
                href="https://www.linkedin.com/in/chandrakant100/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="ms-3">
              <Link className="link-dark" to="#">
                <i className="fab fa-github"></i>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
