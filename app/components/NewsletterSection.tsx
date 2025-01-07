'use client';
import React from 'react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="newsletter-area section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="subscribe-text wow fadeInLeft" data-wow-delay=".2s">
              <h6>Sign up for Newsletter</h6>
              <p>
                Sign Up and start using a free account <br />
                to see what it's all about.
              </p>
              <form
                action="YOUR_MAIL_SERVICE_URL" // Replace with actual mail service URL
                method="POST"
                target="_blank"
                className="newsletter-inner"
              >
                {/* Label for Accessibility */}
                <label htmlFor="email">Your email address</label>
                <input
                  id="email"
                  name="EMAIL"
                  placeholder="Your email address"
                  className="common-input"
                  onFocus={(e) => (e.target.placeholder = '')}
                  onBlur={(e) => (e.target.placeholder = 'Your email address')}
                  required
                  type="email"
                />
                <div className="button">
                  <button type="submit" className="btn">Subscribe Now!</button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            <div className="mini-call-action index2 wow fadeInRight" data-wow-delay=".4s">
              <h4>Massive is available for all devices</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="button">
              <a href="#" className="btn">
              <i className="lni lni-play-store"></i>
              <span>Available on</span>Google Play
            </a>

            <a href="#" className="btn">
              <i className="lni lni-apple"></i>
              <span>Available on</span>App Store
            </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
