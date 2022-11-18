import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook, BsYoutube, BsTwitter } from 'react-icons/bs';
import './index.css';

const Footer = () => {
  return (
    <footer>
      <div className="lucid-footer">
        <div className="footer-first-col">
          <div>
            <h2>Lucid Air</h2>
            <ul>
              <li>
                <a href="##">Discover Air</a>{' '}
              </li>
              <li>
                <a href="##">Design Yours</a>
              </li>
              <li>
                <a href="##">Reserve Now</a>
              </li>
            </ul>
          </div>
          <div>
            <h2> Lucid Gravity</h2>
            <ul>
              <li>
                <a href="##">Discover Gravity</a>
              </li>
              <li>
                <a href="##">Join the Waitlist</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-second-col">
          <h2> Lucid Motors</h2>
          <ul>
            <li>
              <a href="##">Company</a>
            </li>
            <li>
              <a href="##">Leadership</a>
            </li>
            <li>
              <a href="##">Careers </a>
            </li>
            <li>
              <a href="##">Stories </a>
            </li>
            <li>
              <a href="##">Tech Talks</a>
            </li>
            <li>
              <a href="##">Future Models </a>
            </li>
            <li>
              <a href="##">Investors </a>
            </li>
          </ul>
        </div>
        <div className="footer-third-col">
          <h2> More</h2>
          <ul>
            <li>
              <a href="##">Purchase & Ownership </a>
            </li>
            <li>
              <a href="##">Payment Calculator </a>
            </li>
            <li>
              <a href="##">FAQ </a>
            </li>
            <li>
              <a href="##">Contact Us </a>
            </li>
            <li>
              <a href="##">Locations </a>
            </li>
            <li>
              <a href="##">Events</a>
            </li>
            <li>
              <a href="##">Media Room</a>
            </li>
            <li>
              <a href="##">Awards and Accolades</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-of-footer">
        <div>
          <div>
            <select
              id="footer-lang-selector"
              aria-label="Change Locale"
              defaultValue="en"
            >
              <option value="en">United States – English</option>
              <option value="en-ca">Canada – English</option>
              <option value="fr-ca">Canada – Français</option>
              <option value="de-de">Deutschland - Deutsch</option>
              <option value="nl-nl">Nederland - Nederlands</option>
              <option value="de-ch">Schweiz - Deutsch</option>
              <option value="fr-ch">Suisse - Français</option>
              <option value="nb-no">Norge - Norsk</option>
              <option value="ar-sa">المملكة العربية السعودية – العربية</option>
            </select>
          </div>
          <p>©2022 Lucid. All rights reserved</p>
        </div>
        <div className="footer-of-footer-icons">
          <a href="##">
            <AiOutlineInstagram />
          </a>
          <a href="##">
            <BsFacebook />
          </a>
          <a href="##">
            <BsTwitter />
          </a>
          <a href="##">
            <BsYoutube />
          </a>
        </div>
        <div>
          <a href="##">Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
