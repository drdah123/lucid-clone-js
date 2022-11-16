import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import touringv5 from '../../assest/touring-v5.webp';
import dreamTouring from '../../assest/dream-edition-v5.webp';
import grandTouring from '../../assest/grand-touring-v5.webp';
import 'animate.css';
import './index.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function CarsProject() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={200}
        loop={true}
        speed={2000}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide>
          {({ isActive }) => (
            <div className="swiper-item">
              <img
                className="d-block w-100"
                src={touringv5}
                alt="First slide"
              />
              <div
                className={`swiper-name ${isActive ? ' swiper-active' : ''}`}
              >
                <h3
                  className={` ${
                    isActive
                      ? 'animate__animated animate__fadeInUp animate__delay-2s animate__slow swiper-active'
                      : ''
                  }`}
                >
                  Air touring
                </h3>
                <p
                  className={` ${
                    isActive
                      ? 'animate__animated animate__fadeInUp animate__delay-2s animate__slow swiper-active'
                      : ''
                  }`}
                >
                  from $107,400 <span>²</span> / 620 hp<span>²</span> / 406 mi
                  range<span>²</span>
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
                    href="#2"
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
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className="swiper-item">
              <img
                className="d-block w-100"
                src={dreamTouring}
                alt="First slide"
              />
              <div
                className={`swiper-name ${
                  isActive ? 'animate__fadeInDown swiper-active' : ''
                }`}
              >
                <h3
                  className={` ${
                    isActive
                      ? 'animate__animated animate__fadeInUp animate__delay-2s animate__slow swiper-active'
                      : ''
                  }`}
                >
                  Air Grand Touring
                </h3>
                <p
                  className={` ${
                    isActive
                      ? 'animate__animated animate__fadeInUp animate__delay-2s animate__slow swiper-active'
                      : ''
                  }`}
                >
                  From $154,000<span>²</span> / Up to 1,050 hp / Up to 516 mi
                  range
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
                    href="#2"
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
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className="swiper-item">
              <img
                className="d-block w-100"
                src={grandTouring}
                alt="First slide"
              />
              <div
                className={`swiper-name ${
                  isActive ? 'animate__fadeInDown swiper-active' : ''
                }`}
              >
                <h3
                  className={` ${
                    isActive
                      ? 'animate__animated animate__fadeInUp animate__delay-2s animate__slow swiper-active'
                      : ''
                  }`}
                >
                  Air Pure
                </h3>
                <p
                  className={` ${
                    isActive
                      ? 'animate__animated animate__fadeInUp animate__delay-2s animate__slow swiper-active'
                      : ''
                  }`}
                >
                  From $87,400<span>²</span> / 480 hp / 406 mi range
                </p>
                <div className="swiper-car-design">
                  <a
                    href="#2"
                    alt=""
                    className={` ${
                      isActive
                        ? 'animate__animated animate__fadeInUp animate__delay-2s animate__slow swiper-active'
                        : ''
                    }`}
                  >
                    Design yours
                  </a>
                  <a
                    href="##"
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
          )}
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default CarsProject;
