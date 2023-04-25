import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { carWheels, carColors, carimages, cars } from '../../assest/data/data';

const CarCard = ({ car, setCar }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const carImage = carimages.find((carI) => {
    return (
      carI.name === car.name &&
      carI.color === car.color &&
      carI.wheel === car.wheel
    );
  });
  const carWheel = carWheels.find((carW) => carW.name === car.wheel);
  const carColor = carColors.find((carC) => carC.name === car.color);
  const changeCarHandler = (name) => {
    const newCar = carimages.find((carI) => carI.name === name);
    setCar({ ...newCar });
    setOpenMenu(false);
  };
  return (
    <div className="car-container-col">
      <div
        className={`car-selector ${openMenu ? 'active' : ''}`}
        onClick={() => setOpenMenu((prevM) => !prevM)}
      >
        {car.name}
        <div className="car-selector-img-container">
          <img src={carWheel?.image} alt="" />
          <img src={carColor?.image} alt="" />
          <IoMdArrowDropdown />
        </div>
      </div>

      {openMenu ? (
        <div className="car-menu-selector-item">
          {cars.map((c) => (
            <div key={c.name} onClick={() => changeCarHandler(c.name)}>
              <p>{c.name}</p>
            </div>
          ))}
        </div>
      ) : null}
      <div className="car-picture-container">
        <img src={carImage?.image} alt="" />
      </div>
      <div>
        <div>
          <div className="car-color-container">
            {carColors.map((color, i) =>
              color.model === car.name ? (
                <div key={i}>
                  <img
                    onClick={() =>
                      setCar((cPrev) => ({ ...cPrev, color: color.name }))
                    }
                    src={color.image}
                    alt=""
                  />
                </div>
              ) : null
            )}
          </div>

          <div>{car.color}</div>
        </div>
        <div className="car-wheel-container">
          {carWheels.map((wheel) =>
            wheel.model === car.name ? (
              <img
                onClick={() =>
                  setCar((cPrev) => ({ ...cPrev, wheel: wheel.name }))
                }
                key={wheel.name}
                src={wheel.image}
                alt=""
              />
            ) : null
          )}
          <div></div>
          <div className="car-wheel-name">{car.wheel}</div>
          <div className="car-button">
            <button>Design Yours</button>
            <button>Reserve Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
