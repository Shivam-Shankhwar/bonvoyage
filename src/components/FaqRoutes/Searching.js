import React from 'react';
import { Link } from 'react-router-dom';

function Searching() {
  return (
    <>
      <h2 className="mb-4">Searching on bonVoyage</h2>

      <div className="accordion accordion-flush" id="accordionExample">
        <div className="accordion-item mt-1">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <span className="fw-bold">What's included in the price?</span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
          >
            <div className="accordion-body">
              <p className="fw-bold">
                All taxes and additional fees are included in the price
                displayed on our website.
              </p>
              <p>Prices are displayed per room and per night.</p>{' '}
              <p>
                Please double-check all information on the booking site before
                completing your reservation.
              </p>{' '}
              <hr className="w-75 " />
              <p>
                The prices shown come from numerous accommodations and booking
                websites and are not set by BonVoyage. If you have a question
                about a specific price please contact the booking site offering
                the deal. The booking site’s name is displayed next to the
                price.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <span className="fw-bold">How do I report an error? </span>{' '}
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
          >
            <div className="accordion-body">
              <p>
                If the accommodation, location, or room type you have received
                is incorrect, or you are experiencing any other issues regarding
                your booking that you believe is an error on trivago,{' '}
                <span className="fw-bold">please touch some grass</span>.
              </p>{' '}
              <p>
                Be sure to attach a full copy of your booking confirmation and
                any further details that help explain the issue.
              </p>
              To inquire about the status of your booking or cancel your
              reservation, please contact the booking site directly.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <span className="fw-bold">
                How do I know if the booking site is legitimate?
              </span>{' '}
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
          >
            <div className="accordion-body">
              <p className="fw-bold mb-5">
                Before displaying rates from a booking site on trivago, we
                conduct a background check and continuously monitor their
                performance to ensure their legitimacy.
              </p>
              <p>
                If you’re having trouble contacting them or would like to leave
                a comment regarding their performance, please{' '}
                <Link to="/contact" className="text-decoration-none link-info">
                  click here
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <span className="fw-bold">
                Coronavirus (COVID-19) travel advice
              </span>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
          >
            <div className="accordion-body">
              <p>
                The coronavirus (COVID-19) pandemic is impacting travel around
                the world. Restrictions have been placed on travel to certain
                locations and there may be limitations to the availability of
                accommodations .
                <span className="fw-bold">
                  These restrictions may limit or entirely prohibit your ability
                  to travel and/or stay in hotels or other forms of
                  accommodation.
                </span>{' '}
                We encourage you to check if travel and staying in accommodation
                in your chosen location is possible and to book fully refundable
                tickets and accommodation if possible.
              </p>
              <p>
                We want to equip you with the information you need, so that
                whether you choose to stay home or choose to check in, you can
                feel secure in your travel decision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searching;
