import React from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';

import '../stylesheets/Faq.css';
import Bookings from './FaqRoutes/Bookings';
import HowItWorks from './FaqRoutes/HowItWorks';
import Searching from './FaqRoutes/Searching';
import OtherHelp from './FaqRoutes/OtherHelp';

function Faq() {
  return (
    <>
      <main role="main" className="mt-1 mb-4">
        <ul className="nav nav-tabs container">
          <li className="nav-item">
            <Link className={`nav-link`} aria-current="page" to="bookings">
              Bookings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="howitworks">
              How BonVoyage works
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link`} to="searching">
              Searching on BonVoyage
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="otherhelp">
              Other Help
            </Link>
          </li>
        </ul>
      </main>
      <div className="container-md">
        <div className="row d-flex flex-wrap">
          <div className="col-md-8">
            <Routes>
              <Route
                path="/"
                element={<Navigate to="bookings" replace={true} />}
              />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/howitworks" element={<HowItWorks />} />
              <Route path="/searching" element={<Searching />} />
              <Route path="/otherhelp" element={<OtherHelp />} />
            </Routes>
          </div>
          <aside className="col-md-4">
            <div className="card p-4 my-4">
              <h3 className="mt-2 fs-4 fw-bold">Couldn't find your answer?</h3>
              <p className="fs-5 fw-normal">We're here to help!</p>
              <Link className="btn btn-outline-success w-auto" to="/contact">
                Submit a request
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default Faq;
