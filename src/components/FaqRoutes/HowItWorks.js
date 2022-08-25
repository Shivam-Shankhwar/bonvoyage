import React from 'react';
import { Link } from 'react-router-dom';

function GetInTouch() {
  return (
    <>
      <h2 className="mb-4 ms-2">How BonVoyage works</h2>
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
                What is the difference between BonVoyage and a booking site?{' '}
              </span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
          >
            <div className="accordion-body">
              <p>
                <span className="fw-bold">
                  BonVoyage is a all-in-one stop that compares accommodation
                  prices and offers provided to us by many different booking
                  sites
                </span>
                globally, including online travel agencies (OTAs), accommodation
                chains and independent hotels. This means that while users
                decide on BonVoyage which hotel best suits their needs, the
                booking process itself is completed through the booking sites,
                which are linked to our website.
              </p>
              <p className="mt-3">
                <span className="fw-bold">
                  Meanwhile, a booking site or Online Travel Agency (OTA) is a
                  web-based marketplace that allows consumers to research and
                  book travel products and services
                </span>
                , including hotels, flights, cars, cruises, activities and more,
                directly with travel suppliers.
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
              <span className="fw-bold">What is BonVoyage? </span>{' '}
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
          >
            <div className="accordion-body">
              <p>
                <span className="fw-bold">
                  We are a one-stop solution for all your traveling needs from
                  booking a hotel to reserving seats. We compare and display
                  different offers from many booking sites
                </span>
                , and they pay us a fee if a user clicks on their specific deal.
                We are not a party to any booking agreement between you and the
                site or accommodation you book with. We do not collect any
                payments for your stay and are not liable for the services
                offered by the booking site and the accommodation provider.
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
                How to contact BonVoyage user support: email or phone-call?{' '}
              </span>{' '}
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
          >
            <div className="accordion-body">
              <p className="fw-bold">
                If you are experiencing any issues with our platform, have a
                suggestion for a new feature, or would like to share your
                thoughts on anything else related to trivago, please{' '}
                <Link to="/contact" className="text-decoration-none link-info">
                  click here
                </Link>{' '}
                to get in touch.
              </p>
              <p>
                Your feedback helps us continuously improve our product and
                create the best possible experience for you.
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
                How does BonVoyage protect personal information & why does
                BonVoyage use cookies?
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
                We take protecting your personal information very seriously!
              </p>
              <p>
                <span className="fw-bold">
                  When you use our services, we may collect information using
                  cookies
                </span>
                . Something you eat? Not in this case; cookies are small data
                files that are stored in a user’s browser when they visit a
                website.{' '}
              </p>{' '}
              <p>
                <span className="fw-bold">
                  The use of cookies allows us to offer you a more personalized
                  experience on our site
                </span>{' '}
                - win-win situation, right? For more information on this, please
                see here.
              </p>
              Still have questions?{' '}
              <Link className="text-decoration-none link-info" to="/contact">
                reach out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetInTouch;
