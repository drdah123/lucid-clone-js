import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'animate.css';
import './index.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { carsProject } from '../../assest/data/data';
import CarCardProject from './CarCardProject';

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
        {carsProject.map((car) => (
          <SwiperSlide key={car.name}>
            {({ isActive }) => (
              <>
                <CarCardProject {...car} isActive={isActive} />;
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CarsProject;
