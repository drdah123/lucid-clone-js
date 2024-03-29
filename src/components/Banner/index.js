import React from 'react';
import './index.css';

const Banner = () => {
  return (
    <div className="banner" id="home">
      <video loop autoPlay muted className="banner-video-bg">
        <source
          src="https://www.lucidmotors.com/s3fs-public/2022-08/sapphire-web-hero.webm"
          type="video/mp4"
        />
      </video>
      <div />
      <div className="banner-air">
        <h1>Lucid Air</h1>
        <div className="banner-air-links">
          <a href="##">
            <span className="text-area">Discover Air</span>
          </a>
          <a href="##" alt="">
            Reserve now
          </a>
        </div>
      </div>
      <div className="banner-details">
        <div>
          <h4>
            Official EPA range up to<span>¹</span>
          </h4>
          <p>520 mi</p>
        </div>
        <div>
          <h4>
            Starting from<span>²</span>
          </h4>
          <p>$87,400</p>
        </div>
        <div>
          <h4>
            Max power<span>³</span>
          </h4>
          <p>1,200+ hp</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
