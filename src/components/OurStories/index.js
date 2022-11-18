import React from 'react';
import { FreeMode, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import wheel from '../../assest/stealth_3quarter-front-2_web-16x9.webp';
import glass from '../../assest/glass-cockpit-ota-thumbnail.webp';
import sapphire from '../../assest/lucid-air-sapphire-front-3qtr.webp';
import grandTouring from '../../assest/lucid-grand-touring-launch-90.webp';
import groupP from '../../assest/group-608-web.webp';
import './index.css';

const OurStories = () => {
  return (
    <div className="our-stories">
      <div className="our-stories-header">
        <div>
          <h3>Our stories</h3>
        </div>
        <div>
          <a href="##2">View all</a>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          type: 'progressbar',
        }}
        loop
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <div>
          <SwiperSlide>
            <a href="##">
              <img src={wheel} alt="" />
              <h4>Embrace the dark side.</h4>
              <p>Aug 08, 2022 / Engineering</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="##">
              <img src={glass} alt="" />
              <h4>
                The rollout of Lucid UX 2.0 has begun. Here’s what’s next.
              </h4>
              <p>Aug 08, 2022 / Engineering</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="$$">
              <img src={sapphire} alt="" />
              <h4>
                Introducing Sapphire. The pinnacle of electric performance.
              </h4>
              <p>Aug 08, 2022 / Engineering</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="##">
              <img src={grandTouring} alt="" />
              <h4>Lucid Air Grand Touring has arrived.</h4>
              <p>Aug 08, 2022 / Engineering</p>
            </a>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="projects">
        <div className="single-project">
          <a href="##">
            <img src={groupP} alt="" />
            <div className="projects-content">
              <p>Studios</p>
              <p>Our location</p>
            </div>
          </a>
        </div>
        <div className="single-project">
          <a href="$$">
            <img src={groupP} alt="" />
            <div className="projects-content">
              <p>Careers</p>
              <p>Join Lucid</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurStories;
