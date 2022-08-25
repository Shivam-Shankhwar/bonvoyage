import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success px-2">
        <div className="container-fluid">
          <Link className="navbar-brand text-dark fs-3" to="/">
            Bon<span className="text-white me-2">Voyage</span>
            <i className="fas fa-paper-plane header_brand_icon"></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-6 text-center">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">
                  Contact-Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/sign">
                  Sign-In
                </Link>
              </li>
              <li className="cart nav-item position-relative align-self-center">
                <Link to="/booktour">
                  <i className="cart__icon fas fa-shopping-cart" />
                  <span className="cart__items translate-middle position-absolute top-0 start-100 badge rounded-pill bg-danger">
                    {props.addToCart}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
