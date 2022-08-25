import React from 'react';

import '../stylesheets/About.css';

import about1_s from '../assets/images/img/about-1-s.jpg'
import about1_m from '../assets/images/img/about-1-m.jpg'
import about1_l from '../assets/images/img/about-1-l.jpg'
import about2 from '../assets/images/img/about-2.jpg';
import about3 from '../assets/images/img/about-3.jpg';
import about4 from '../assets/images/img/about-4.jpg';
import about6 from '../assets/images/img/about-6.jpg';
import about7 from '../assets/images/img/about-7.jpg';

function About() {
  return (
    <>

      <div className='about__head img-fluid'>
        <picture>
          <source media="(min-width: 1000px)" srcSet={about1_l} />
          <source media="(max-width: 999px) and (min-width: 800px)" srcSet={about1_m} />
          <source media="(max-width: 799px)" srcSet={about1_s} />
          <img className='head--image' src={about1_l} alt='Village background' />
        </picture>
        <div className='aboutText'>
          <h1 className='text-light fw-bolder'>About <span className='text-success'>BonVoyage</span></h1>
          <h4 className='text-light'>A Journey full of Adventures</h4>
        </div>
      </div>

      <h1 className='text-center'>
        <span className='text-black'>Our -</span> <span className='text-info'>Team</span>
        <hr className="w-25 m-auto" />
        <hr className="w-25 m-auto" />
      </h1>

      <div id="carouselExampleDark" className="carousel carousel-dark slide mt-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active text-center" data-bs-interval="10000">
            <img src={about2} className="bd-placeholder-img rounded-circle mt-2"  height={400} alt="..." />
            <div className="carousel-caption d-md-block">
              <h5>Himanshu</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item text-center" data-bs-interval="2000">
            <img src={about3} className="bd-placeholder-img rounded-circle mt-2" height={400} alt="..." />
            <div className="carousel-caption d-md-block">
              <h5>Anonymous Female Coder</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item text-center">
            <img src={about4} className="bd-placeholder-img rounded-circle mt-2" height={400} alt="..." />
            <div className="carousel-caption d-md-block">
              <h5>Kartik</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container mt-5">
        <div className="p-3 p-md-6 mb-4 rounded aboutCard1">
          <div className="col-md-6 px-0">
            <h1 className="display-6 fst-italic fw-normal">Meet us at the Nearest Branch</h1>
            <p className="lead my-3 fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore saepe nihil? Commodi quo ad assumenda aut dolore neque saepe  ...............</p>
            <p className='fw-bolder'>Mob no- 79 0549 8297</p>
            <p className='fw-bolder'>E-mail- Shivamshankhwar559@gmail.com</p>
            <p className='fw-bolder'>Location - Shahjahanpur (242001)</p>
          </div>
        </div>
        <div className="row featurette mt-5  bd-placeholder-img">

          <div className="col-md-7 align-self-center">
            <h2 className="featurette-heading" id='h2'>One of our Most Booked Locations</h2>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ad incidunt magni eaque sapiente alias, omnis quod delectus quidem pariatur enim! Est, itaque, ratione deleniti facere quia quaerat ipsa ullam blanditiis quae in quam dignissimos eveniet consectetur asperiores ipsam tempore nesciunt nihil placeat repellat consequuntur, voluptas omnis iure assumenda eius.</p>
          </div>

          <div className="col-md-5 testimonial__text">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto about6" src={about6} alt="error" />
            <span className='textParis'>
              Paris
            </span>
          </div>

          <div className="col-md-7 order-md-2 align-self-center">
            <h2 className="featurette-heading" id='h2'>Hear It From Our Customers</h2>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ad incidunt magni eaque sapiente alias, omnis quod delectus quidem pariatur enim! Est, itaque, ratione deleniti facere quia quaerat ipsa ullam blanditiis quae in quam dignissimos eveniet consectetur asperiores ipsam tempore nesciunt nihil placeat repellat consequuntur, voluptas omnis iure assumenda eius.</p>
          </div>

          <div className="col-md-5 align-self-center testimonial__text">
            <img className="bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={about7} alt="..." />
            <span className='textWoman'>
              Allef Vinicius
            </span>
          </div>
        </div>
        <div className="col-md-6 w-100 mt-5">
          <div className="h-100 p-5 text-white bg-success rounded-3">
            <h2>Nature never fails to amaze, and brings people together.</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quis soluta quae dolores tempore pariatur officia cumque, nam sint esse? Cum velit veniam magni at modi blanditiis consequatur aspernatur quae?</p>
          </div>
        </div>
    </div>

    </>
  )
}

export default About