import React from 'react';

const CarCardProject = ({ isActive, name, image, desc }) => {
  return (
    <div className="swiper-item">
      <img className="d-block w-100" src={image} alt="First slide" />
      <div className={`swiper-name ${isActive ? ' swiper-active' : ''}`}>
        <h3
          className={` ${
            isActive
              ? 'animate__animated animate__fadeInUp animate__delay-2s animate__slow swiper-active'
              : ''
          }`}
        >
          {name}
        </h3>
        <p
          className={` ${
            isActive
              ? 'animate__animated animate__fadeInUp animate__delay-2s animate__slow swiper-active'
              : ''
          }`}
        >
          {desc}
        </p>
        <div className="swiper-car-design">
          <a
            href="#2"
            className={` ${
              isActive
                ? 'animate__animated animate__fadeInUp animate__delay-2s animate__slow swiper-active'
                : ''
            }`}
          >
            Design yours
          </a>
          <a
            href="#cars-comparer"
            alt=""
            className={` ${
              isActive
                ? 'animate__animated animate__fadeInUp animate__delay-2s animate__slow swiper-active'
                : ''
            }`}
          >
            Compare models
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarCardProject;
