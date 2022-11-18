import React, { useEffect, useState } from 'react';
import './index.css';
import { TfiWorld } from 'react-icons/tfi';
import { IoIosMenu } from 'react-icons/io';
import Menu from '../Menu';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Menu isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked} />

      <div className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-item">
          <a href="##" alt="">
            LUCID AIR
          </a>
          <a href="##" alt="">
            DESIGN YOURS
          </a>
          <a href="##" alt="">
            RESERVE
          </a>
        </div>
        <div>
          <a href="#home" alt="" className="logo">
            <img
              src="https://www.lucidmotors.com/media/image/main-nav/logo.svg"
              alt=""
            />
          </a>
        </div>
        <div className="navbar-item">
          <button onClick={() => console.log('its work')}>
            <TfiWorld size={16} />
          </button>
          <a href="##" alt="">
            SIGN IN
          </a>
          <div>
            <a href="#newsletter" className="newsletter-a">
              <span className="text-area">STAY UPDATE</span>
            </a>
          </div>
          <button onClick={() => setIsMenuClicked(true)}>
            <IoIosMenu size={23} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
