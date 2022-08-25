import React from 'react';
import { Link } from 'react-router-dom';

function GetInTouch() {
  return (
    <>
      <h2 className="mb-3 ms-2">Other help</h2>
      <div className="accordion accordion-flush" id="accordionExample">
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
                <span className="fw-bold">
                  I have feedback on the BonVoyage website & search filters
                </span>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
            >
              <div className="accordion-body">
                <p className="fw-bold">
                  Sharing feedback takes little time but means a lot to us!
                </p>
                <p>
                  Your feedback is one of the many methods we use to improve our
                  product and create the best possible experience for our users.
                  Please{' '}
                  <Link
                    to="/contact"
                    className="text-decoration-none link-info"
                  >
                    contact us
                  </Link>{' '}
                  to submit your feedback. We look forward to hearing from you!
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
                <span className="fw-bold">
                  How do I unsubscribe from newsletters?
                </span>{' '}
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
            >
              <div className="accordion-body">
                <p className="fw-bold">
                  You can unsubscribe from our newsletters anytime by pressing
                  the “unsubscribe” button at the very bottom of the email.
                </p>
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
                  Where can I leave feedback on BonVoyage's advertising
                  campaigns?
                </span>{' '}
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
            >
              <div className="accordion-body">
                <p className="mb-4">
                  If you have any questions or would like to share feedback on
                  any of our advertising campaigns, please contact us{' '}
                  <Link
                    to="/contact"
                    className="text-decoration-none link-info"
                  >
                    here.
                  </Link>{' '}
                  .
                </p>
                <p>
                  Your thoughts and suggestions help us improve our services and
                  better tailor our campaigns to our audience.
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
                  Who do I contact about a refund or an invoicing enquiry?{' '}
                </span>{' '}
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
            >
              <div className="accordion-body">
                <p>
                  If you would like to enquire about a refund or anything to do
                  with your invoice, please contact the booking site directly.
                  They are responsible for booking and payment processes, so
                  they are in the best position to help you. The booking site’s
                  contact details can be found in your booking confirmation
                  email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetInTouch;
