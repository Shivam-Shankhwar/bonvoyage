import React from 'react'
import { Link } from 'react-router-dom';

import '../stylesheets/Services.css';
import services1_s from '../assets/images/img/services-1-s.jpg';
import services1_m from '../assets/images/img/services-1-m.jpg';
import services1_l from '../assets/images/img/services-1-l.jpg';
import services2 from '../assets/images/img/services-2.jpg';
import services3 from '../assets/images/img/services-3.jpg';
import services4 from '../assets/images/img/services-4.jpg';
import services5 from '../assets/images/img/services-5.jpg';
import services6 from '../assets/images/img/services-6.jpg';
import services7 from '../assets/images/img/services-7.jpg';
import services8 from '../assets/images/img/services-8.jpg';
import services9 from '../assets/images/img/services-9.jpg';
import services10 from '../assets/images/img/services-10.jpg';
import services11 from '../assets/images/img/services-11.jpg';
import services12 from '../assets/images/img/services-12.jpg';

function Product() {
  return (
    <>
      <div className='services__head img-fluid'>
        <picture>
          <source media="(min-width: 1000px)" srcSet={services1_l} />
          <source media="(max-width: 999px) and (min-width: 800px)" srcSet={services1_m} />
          <source media="(max-width: 799px)" srcSet={services1_s} />
          <img className='services--image' src={services1_l} alt='Village background' />
        </picture>
        <div className='services__head--text'>
          <p className='fw-bolder mb-0'>Summer Dreaming</p>
          <Link to='/allactivities' className='btn btn-light'>Explore Activities</Link>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <h1 className='text-center'>
          <span className='text-black'>Some Of Us Most Booked Locations</span>
        </h1>
        <hr className="w-25 m-auto" />
        <hr className="w-25 m-auto" />
        <br />
        <br />
        <div className="row">
          <div className="col-lg-4">
            <img src={services2} height={300} alt="Eiffel Tower, Paris" className='mb-2' />
            <h2 className='text-black'>The Eiffel Tower, <br />Paris</h2>
            <p>The <span className='text-success fw-bold'>symbol of Paris</span> and one of the most photographed structures in the world, a visit to the Eiffel Tower is a must for all travelers.</p>
          </div>

          <div className="col-lg-4">
            <img src={services3} height={300} alt="Taj Mahal, India" className='mb-2' />
            <h2 className='text-black' >The Taj Mahal,<br /> India</h2>
            <p><span className='text-success fw-bold'>The Taj Mahal</span> is the one sight in India that all travelers need to see. The country is filled with incredible cities and fabulous places to visit.</p>
          </div>

          <div className="col-lg-4">
            <img src={services4} height={300} alt="MakeMyTrip Company" className='mb-2' />
            <h2 className='text-black'>The Statue of Liberty,<br />New York</h2>
            <p>This is one that <span className='text-success fw-bold'>every tourist must see</span>. The best thing to do at the Statue of Liberty is to take a ride up to her crown and soak up the view over the city. </p>
          </div>
        </div>
      </div> 

      <div className='container-xxl'>
        <h1 className='text-center'>
          <span className='text-black'>Other Exciting Locations to Visit</span>
        </h1>
        <hr className="w-25 m-auto" />
        <hr className="w-25 m-auto" />
        <br />
        <br />
        <div className="row row-cols-1 row-cols-md-4 g-8 gy-3 gx-3">

          <div className="col">
            <div className="card">
              <img src={services5} className="card-img-top" alt="Pyramids of Giza, Egypt" />
              <div className="card-body">
                <h5 className="card-title">Pyramids of Giza, Egypt</h5>
                <p className="card-text">Located just outside Cairo, the pyramids, which is also where you'll find the Sphinx, are easy to get to, and tours are easy to arrange.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={services6} className="card-img-top" alt="Great Wall of China" />
              <div className="card-body">
                <h5 className="card-title">Great Wall of China</h5>
                <p className="card-text">Many travelers seeing the sights of China choose to visit the wall on easily organized tours from Beijing, a relatively short ride away.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={services7} className="card-img-top" alt="Sydney Opera House" />
              <div className="card-body">
                <h5 className="card-title">Sydney Opera House</h5>
                <p className="card-text">Like many other attractions, the Sydney Opera House is one of those places that is easy to identify and obviously associated with Australia.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={services8} className="card-img-top" alt="The Colosseum, Rome" />
              <div className="card-body">
                <h5 className="card-title">The Colosseum, Rome</h5>
                <p className="card-text">The most famous and largest structure still standing from the Roman Empire, the Colosseum is also the biggest attraction of modern-day Rome. </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={services9} className="card-img-top" alt="Grand Canyon, USA" />
              <div className="card-body">
                <h5 className="card-title">Grand Canyon, USA</h5>
                <p className="card-text">The greatest natural attraction in the United States, the Grand Canyon is a key sight for all travelers planning their lifetime of adventures.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={services10} className="card-img-top" alt="Mount Fuji" />
              <div className="card-body">
                <h5 className="card-title">Mount Fuji</h5>
                <p className="card-text">Mount Fuji is the most well-known mountain in Japan. Pictured as snowcapped, this volcano is one of the top tourist attractions in Japan. </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={services11} className="card-img-top" alt="Brazil" />
              <div className="card-body">
                <h5 className="card-title">Brazil</h5>
                <p className="card-text">Keeping a watchful eye over the citizens of Rio de Janeiro from his perch atop Corcovado mountain is the stunning statue of Cristo Redentor. </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={services12} className="card-img-top" alt="Machu Picchu, Peru" />
              <div className="card-body">
                <h5 className="card-title">Machu Picchu, Peru</h5>
                <p className="card-text">In South America, this is a must place to visit. The ancient Inca city of Machu Picchu is arguably the most impressive ruined city in the world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Product;