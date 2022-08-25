import React from 'react';

function Bookings() {
  return (
    <>
      <h2 className="mb-4">Bookings</h2>
      <p className="ms-1">
        When you click on a deal that you saw on BonVoyage, we redirect you to
        the booking site to complete your reservation. After you make the
        payment to the booking site, you will receive a confirmation email at
        the email address used for the booking.
      </p>
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
                How to cancel or change my reservation?
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
                To cancel or change your reservation, please contact the booking
                site directly. You can can find the booking site’s contact
                details in your confirmation email.
              </p>
              <p>
                If you can’t find your booking confirmation, we recommend
                checking your spam folder first. If you still cannot find it, we
                recommend a few simple tips for you!
              </p>
              <p>
                Still need help? Check the information we offer on contacting
                the booking site.
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
              <span className="fw-bold">Where is my booking reservation? </span>{' '}
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
          >
            <div className="accordion-body">
              <p>
                Sometimes it can take up to 72 hours for the booking
                confirmation to be received at your email address.
              </p>
              <p className="fw-bold fs-5">Did not receive anything yet? </p>
              <p className="mb-1">
                <span className="fw-bold">Check your spam folder</span> - In
                most cases, the confirmation email is already received there.
              </p>
              <p>
                If you still haven't received it, please contact the booking
                site you used, they will be able to assist you.
              </p>
              <p className="fw-bold fs-5 mt-4 mb-2">
                Can’t remember the name of the booking site?
              </p>{' '}
              <p>
                If you made the payment to the booking site already, then you
                can{' '}
                <span className="fw-bold">
                  check the payment transaction on your credit card or bank
                  statement
                </span>
                . The name of the booking site will show on the outgoing
                payment.
              </p>
              <p className="mt-4 fw-bold">
                Here we offer a few more tips to help you find out who you
                booked with!
              </p>{' '}
              <ul>
                <li className="mb-2">
                  Try searching your email for keywords relating to your planned
                  trip; the booking confirmation email might be in your spam
                  folder.
                </li>
                <li>
                  Try checking your internet browser history for the day you
                  booked, the booking site should appear right after BonVoyage
                  in your browser history.
                </li>
              </ul>
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
                Why doesn't the property have my reservation?{' '}
              </span>{' '}
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
          >
            <div className="accordion-body">
              <span className="fw-bold">Before arriving at the property</span>
              <p className="mt-2 mb-4">
                It can sometimes take a few days for the booking site to
                communicate your reservation details to the property. If your
                reservation still isn’t showing up after this time or your stay
                is scheduled sooner than that, the booking site will be able to
                assist you.
              </p>{' '}
              <span className="fw-bold">Upon arrival at the property</span>
              <p className="mt-2">
                In this case, please{' '}
                <span className="fw-bold">
                  contact the booking site directly
                </span>
                . They are responsible for booking and payment processes, so
                they are in the best position to help. The booking site’s
                contact details can be found in your booking confirmation email.
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
                They are responsible for booking and payment processes, so they
                are in the best position to help you. The booking site’s contact
                details can be found in your booking confirmation email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookings;
