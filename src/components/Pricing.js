import React from 'react';
import '../stylesheets/Pricing.css';
import { Link } from 'react-router-dom';

import contact1_s from '../assets/images/img/pricing-1-s.jpg';
import contact1_m from '../assets/images/img/pricing-1-m.jpg';
import contact1_l from '../assets/images/img/pricing-1-l.jpg';

const pricing = props => {
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
          <p className="fw-bolder mb-0">Most Affordable Prices</p>
        </div>
      </div>

      <section className="py-4">
        <div className="container text-center">
          {/* 3d-Perspective Cards */}
          <section className="section-tours">
            <h2 className="tours__heading">Most Popular Tours</h2>
            {/* CUSTOM CARD AHEAD */}
            <div className="card__container mt-5">
              {/* First Card */}
              <div className="card__side">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    The sea explorer
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>3 Day Tour</li>
                    <li>Up to 30 People</li>
                    <li>2 Tour Guide</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty:easy</li>
                  </ul>
                </div>
                <div className="card__price card__price--1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$299</p>
                    </div>
                    <Link to="/booktour" className="btn btn-light">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Second Card */}
              <div className="card__side">
                <div className="card__picture card__picture--2">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    The forest hiker
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>7 Day Tour</li>
                    <li>Up to 40 People</li>
                    <li>6 Tour Guide</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty:medium</li>
                  </ul>
                </div>
                <div className="card__price card__price--2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$499</p>
                    </div>
                    <Link to="/booktour" className="btn btn-light">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Third Card */}
              <div className="card__side">
                <div className="card__picture card__picture--3">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    The snow adventurer
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>5 Day Tour</li>
                    <li>Up to 15 People</li>
                    <li>3 Tour Guide</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty:hard</li>
                  </ul>
                </div>
                <div className="card__price card__price--3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$897</p>
                    </div>
                    <Link to="/booktour" className="btn btn-light">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default pricing;
