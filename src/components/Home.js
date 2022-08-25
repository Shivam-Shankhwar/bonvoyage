import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/Home.css';

import facebook from '../assets/images/utilities/facebook.png';
import twitter from '../assets/images/utilities/twitter.png';
import instagram from '../assets/images/utilities/instagram.png';
import bgVideo from '../assets/videos/video3.mp4';
import img2 from '../assets/images/img/nat-2-m.jpg';
import img3 from '../assets/images/img/nat-3-m.jpg';
import img4 from '../assets/images/img/nat-4-m.jpg';
import img5 from '../assets/images/img/nat-5-m.jpg';
import trivago from '../assets/images/utilities/trivago.png';
import yatra from '../assets/images/utilities/yatra.jpg';
import makemytrip from '../assets/images/utilities/makemytrip.png';

function Home() {
  return (
    <>
      {/*--------- Landing Section------------ */}
      <section className="section-showcase">
        <video autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="overlay" />

        <div className="text">
          <h2>Never Stop</h2>
          <h3>Exploring The World</h3>
          <blockquote className="text-light fst-italic">
            "They say the World has Seven wonders, We think that's only the
            beginning."
          </blockquote>
          <p>Give us a chance to make your journey #HassleFree.</p>
          <Link to="/allactivities" className="btn btn-light showcase_btn">
            EXPLORE &rarr;
          </Link>
        </div>

        <ul className="social">
          <li>
            <Link to="#">
              <img src={facebook} alt="Facebook_logo_inverted" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={twitter} alt="img1" />
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="img1" />
            </a>
          </li>
        </ul>
      </section>

      {/*-------------- Body Section -----------*/}
      <div className="container">
        <h1 className="text-center mt-4">
          {' '}
          <span className="text-black">What</span>{' '}
          <span className="text-success">We Do</span>
          <hr className="w-25 m-auto" />
          <hr className="w-25 m-auto" />
        </h1>

        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 mt-5">
            <h1>
              What Services do <span className="text-success">We Provide</span>{' '}
            </h1>
            <hr className="w-100% " />

            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores delectus quo, quos id dicta autem consectetur
              recusandae ex tempora sequi itaque quibusdam nesciunt commodi,
              vitae ullam. Officia corporis possimus laborum, rerum aliquid
              consequuntur earum consequatur laudantium tempora vero illum eaque
              reiciendis voluptas laboriosam sint, quasi unde adipisci sunt
              natus recusandae.
            </p>

            <div className="accordion accordion-flush" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Travel Management
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                >
                  <div className="accordion-body">
                    <strong>We provide services that include</strong> the
                    management and reservation of transport tickets, searches
                    for accommodations, car rentals along with price comparisons
                    from across others to give you the best offer we could.
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
                    Consulting & 24x7 Support
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                >
                  <div className="accordion-body">
                    <strong>With our consulting services</strong> we'll help you
                    with the information of interest (customs of the country of
                    destination, recommendations on behavior, etc.), cost
                    optimization and control, advice on travel policies.
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
                    Leisure Services
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                >
                  <div className="accordion-body">
                    <strong>Our Travel Management team</strong> offers direct
                    discounts or improved conditions on travel and leisure
                    activities for you and your family/friends.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end mt-5 ps-5">
              <img src={img5} alt="" srcSet="" id="img" className="img-fluid img-thumbnail" />
            </div> */}
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide homeCarousel"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img4} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img5} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h1 className="text-center">
          <span className="text-black">Some of our</span>{' '}
          <span className="text-success">Travel Partners</span>
        </h1>
        <hr className="w-25 m-auto" />
        <hr className="w-25 m-auto" />
        <br />
        <br />
        <div className="row ">
          <div className="col-lg-4 px-5">
            <img src={yatra} height={170} alt="YATRA Company" />
            <h2 className="text-black">YATRA</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              rerum totam vitae et illo recusandae.
            </p>
            <p>
              <a
                className="btn btn-outline-primary btn-sm"
                href="https://www.yatra.com/"
                target={'blank'}
              >
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-4 px-5">
            <img src={trivago} height={170} alt="Trivago Company" />
            <h2 className="text-black">TRIVAGO</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              rerum totam vitae et illo recusandae.
            </p>
            <p>
              <a
                className="btn btn-outline-primary btn-sm"
                href="https://www.trivago.com/"
                target={'blank'}
              >
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-4 px-5">
            <img src={makemytrip} height={170} alt="MakeMyTrip Company" />

            <h2 className="text-black">MAKEMYTRIP</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              rerum totam vitae et illo recusandae.
            </p>
            <p>
              <a
                className="btn btn-outline-primary btn-sm"
                href="https://www.makemytrip.com/"
                target={'blank'}
              >
                View details »
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
