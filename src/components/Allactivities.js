import React, { useState } from 'react';
import Axios from 'axios';

import img0 from '../assets/images/img/img-0.jpg';
import '../stylesheets/Allactivities.css';

function Allactivities() {
  const [image, setImage] = useState([]);
  const [hotel, setHotel] = useState('');

  const API_ENDPOINT = `https://api.unsplash.com/search/photos?client_id=`;
  const key = 'wLKEI7W1sUb_Qm2qu1t9Yf7WVbwD2dlMtkIaiOhr4Yo';

  //Random Number Generator: Math.random(Math.random() * (max - min + 1)) + min;
  let randomPage = Math.floor(Math.random() * 50) + 1;

  const getHotels = e => {
    e.preventDefault();
    Axios.get(`${API_ENDPOINT}${key}&query=${hotel}&page=${randomPage}`).then(
      res => {
        setImage(res.data.results);
        console.log(image);
      }
    );
  };

  return (
    <div>
      {/*----------------------------------HEADER------------------------------- */}
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 mt-5">
            <h1>About UnSplash API </h1>
            <hr className="w-100% " />

            <p className="p-2">
              Unsplash API is a modern JSON API that surfaces all of the info
              needed to build any experience for the users. It’s so simple to
              use that we even run unsplash.com on it! <br />
              <br />
              Every image URL returned by the API can easily be manipulated to
              dynamically adjust the dimensions, crop, and quality of the image
              in realtime.
            </p>
            <p className="p-2">
              Below i used a grid of col 5-4-2 to make it responsive. Let's Hit
              the Api by clicking the button below.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end mt-5 ps-5">
            <img
              src={img0}
              alt="Demo Visual"
              id="img"
              className="img-fluid img-thumbnail"
            />
          </div>
        </div>
      </div>

      {/*-------------------------------API-HIT---------------------------- */}

      <div className="container-fluid px-5">
        <form onSubmit={getHotels}>
          <div className="input-group w-50 ms-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search Hotels"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              maxLength={50}
              value={hotel}
              onChange={e => setHotel(e.target.value)}
            />
            <div className="input-group-append ms-3">
              <button className="btn btn-outline-success me-1" type="submit">
                Go<i className="ms-2 pe-0 fas fa-search"></i>
              </button>
              <button
                className="btn btn-danger"
                onClick={() => window.location.reload()}
                type="button"
              >
                reset
              </button>
            </div>
          </div>
        </form>

        <div className="gallery">
          {image.map((value, index) => {
            return (
              <div
                key={index}
                className="d-flex flex-column align-items-center toolTip"
              >
                <img
                  src={value.urls.regular}
                  className="gallery_img"
                  alt="API HIT DATA 1 png"
                />
                <p className="mb-0 text-muted">Image no: {index + 1}</p>
                <span className="toolTipText">{value.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Allactivities;