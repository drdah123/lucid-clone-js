import React, { useState } from 'react';
import './index.css';
import CarCard from '../CarCard';

const initialState = {
  name: 'AIR DREAM EDITION',
  color: 'Infinite black',
  wheel: '19” Aero Range',
};

const CompareCard = () => {
  const [firstCar, setFirstCar] = useState(initialState);
  const [secondCar, setSecondCar] = useState(initialState);
  const [thirdCar, setThirdCar] = useState(initialState);

  return (
    <div className="compare-page-container" id="cars-comparer">
      <div className="compare-card-header">
        <div>
          <h1>Compare Lucid Models</h1>
        </div>
        <div>
          <p>Need help choosing? Contact Us</p>
        </div>
      </div>
      <div className="select-model">
        <p>select mode</p>
      </div>
      <div className="compare-card-container">
        <CarCard car={firstCar} setCar={setFirstCar} />
        <CarCard car={secondCar} setCar={setSecondCar} />
        <CarCard car={thirdCar} setCar={setThirdCar} />
      </div>
    </div>
  );
};

export default CompareCard;
