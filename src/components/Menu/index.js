import React, { useState } from 'react';
import './index.css';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Menu = ({ isMenuClicked, setIsMenuClicked }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={`home-menu ${isMenuClicked ? 'active' : ''}`}>
      <div className="home-menu-header">
        <a href="##">sign in</a>
        <a href="##">stay update</a>
        <button onClick={() => setIsMenuClicked(false)}>
          <AiOutlineClose />
        </button>
      </div>
      <div>
        <ul>
          <div>
            <li className="home-menu-li-container">
              <button
                type="button"
                onClick={() => setIsClicked((prev) => !prev)}
              >
                Lucid Air {isClicked ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>

              {isClicked ? (
                <ul>
                  <li>
                    <a href="##">Overview</a>
                  </li>
                  <li>
                    <a href="##">Design</a>
                  </li>
                  <li>
                    <a href="##">Performance</a>
                  </li>
                  <li>
                    <a href="##">Charging</a>
                  </li>
                  <li>
                    <a href="##">Connectivity</a>
                  </li>
                </ul>
              ) : null}
            </li>
          </div>
          <li>
            <a href="##">Lucid Gravity</a>
          </li>
          <li>
            <a href="##">Design Yours</a>
          </li>
          <li>
            <a href="##">Reserve</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="##">More about Lucid</a>
          </li>
          <li>
            <a href="##">Company</a>
          </li>
          <li>
            <a href="##">Investors</a>
          </li>
          <li>
            <a href="##">Stories</a>
          </li>
          <li>
            <a href="##">Tech Talks</a>
          </li>
          <li>
            <a href="##">Careers</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
