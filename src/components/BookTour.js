import React, { useState } from 'react';
import '../stylesheets/BookTour.css';

function BookTour(props) {
  const [counter, setCounter] = useState(0);

  const incHandler = () => {
    setCounter(prevState => prevState + 1);
    console.log(counter);
  };
  const decHandler = () => {
    if (counter > 0) {
      setCounter(prevState => prevState - 1);
    }
  };

  const changeHandler = e => {
    setCounter(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    props.onSendData(counter);
    
    // setCounter(0); //2_way dataBinding failed
  };

  return (
    <div className="container">
      
      <h4 className="my-3">Cart</h4>
      <div className="counter">
        <form action="..." onSubmit={submitHandler}>
          <label htmlFor="people">No of People:</label>
          <button
            className="counter__decrement btn btn-outline-danger"
            onClick={decHandler}
          >
            -
          </button>
          <input
            type="text"
            className="counter__display"
            onChange={changeHandler}
            value={counter}
            disabled
            id="people"
          />
          <button
            className="counter__increment btn btn-outline-success"
            onClick={incHandler}
          >
            +
          </button>
          <button className="btn btn-success" type="submit">
            Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookTour;
