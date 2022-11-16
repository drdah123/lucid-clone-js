import React, { useRef, useState } from 'react';
import './index.css';
const Newsletter = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isJoinMailList, setIsJoinMailList] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const sendEmail = () => {
    alert(`${formRef.current}`);
    setIsSent(true);
  };

  return (
    <div className="newsletter" id="newsletter">
      <div className="newsletter-head">
        <h2>Stay up to speed on the latest at Lucid.</h2>
      </div>
      <div>
        <div className="newsletter-form">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="newsletter-form-item">
              {isEmailFocused ? (
                <div className="newsletter-label">
                  <label>email</label>
                </div>
              ) : null}
              <div className="newsletter-form-item-input">
                <input
                  type="email"
                  placeholder="Email@email.com"
                  required
                  name="email"
                  onFocus={() => setIsEmailFocused(true)}
                />
              </div>
            </div>
            {isJoinMailList ? (
              <>
                <div className="newsletter-form-item-input">
                  <div>
                    <label>First name</label>{' '}
                  </div>
                  <input
                    type="text"
                    placeholder="Abdulrahman "
                    name="firstName"
                    required
                  />
                </div>
                <div className="newsletter-form-item-input">
                  <div>
                    <label>last name</label>
                  </div>{' '}
                  <input
                    type="text"
                    placeholder="alotebe"
                    name="lastName"
                    required
                  />
                </div>
                <div className="newsletter-form-item-input">
                  <div>
                    <label>country</label>
                  </div>{' '}
                  <input
                    type="tel"
                    placeholder="Saudi Arabia"
                    name="country"
                    required
                  />
                </div>
                <div className="newsletter-form-item-input">
                  <div>
                    {' '}
                    <label>postal code</label>
                  </div>{' '}
                  <input
                    type="tel"
                    placeholder="1234-1222"
                    name="postalCode"
                    required
                  />
                </div>
              </>
            ) : null}
            {isEmailFocused ? (
              <>
                <div className="newsletter-checkbox">
                  <input
                    type="checkbox"
                    onClick={() => setIsJoinMailList((prev) => !prev)}
                  />
                  <p>
                    Join our mailing list for early access to product
                    announcements, special events in your area, promotions, and
                    more.
                  </p>
                </div>
                <div className="newsletter-button">
                  <button type="submit" disabled={isSent}>
                    <span>Subscribe</span>
                  </button>
                </div>
              </>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
