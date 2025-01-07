'use client';
import React, { useEffect } from 'react';

const ContactUs: React.FC = () => {
  useEffect(() => {
    // Dynamically load external scripts
    const scripts = [
      'assets/js/bootstrap.min.js',
      'assets/js/count-up.min.js',
      'assets/js/wow.min.js',
      'assets/js/tiny-slider.js',
      'assets/js/glightbox.min.js',
      'assets/js/imagesloaded.min.js',
      'assets/js/isotope.min.js',
      'assets/js/main.js',
    ];

    scripts.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => {
        console.log(`${src} loaded`);
      };
      document.body.appendChild(script);
    });

    // Cleanup script elements when the component unmounts
    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="navbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand logo" href="index.html">
                    <img className="logo1" src="assets/images/logo/logo.svg" alt="Logo" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                    <ul id="nav" className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="nav-item"><a href="about-us.html">About Us</a></li>
                      <li className="nav-item"><a href="#">Services</a></li>
                      <li className="nav-item"><a href="#">Portfolio</a></li>
                      <li className="nav-item"><a href="#">Pages</a></li>
                      <li className="nav-item"><a href="contact.html" className="active">Contact</a></li>
                    </ul>
                  </div>
                  <div className="button">
                    <a href="contact.html" className="btn">Get it now</a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">Contact Us</h1>
                <p>
                  Business plan draws on a wide range of knowledge from different business disciplines.
                </p>
              </div>
              <ul className="breadcrumb-nav">
                <li><a href="index.html">Home</a></li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact-us" className="contact-us section">
        <div className="container">
          <div className="contact-head wow fadeInUp" data-wow-delay=".4s">
            <div className="row">
              <div className="col-lg-5 col-12">
                <div className="single-head">
                  <div className="contant-inner-title">
                    <h4>Contact Information</h4>
                    <p>Business consulting excepteur sint occaecat cupidatat.</p>
                  </div>
                  <div className="single-info">
                    <i className="lni lni-phone"></i>
                    <ul>
                      <li><a href="tel:+5226724521120">+522 672-452-1120</a></li>
                    </ul>
                  </div>
                  <div className="single-info">
                    <i className="lni lni-envelope"></i>
                    <ul>
                      <li><a href="mailto:example@example.com">example@example.com</a></li>
                    </ul>
                  </div>
                  <div className="single-info">
                    <i className="lni lni-map"></i>
                    <ul>
                      <li>KA-62/1, Travel Agency, New York.</li>
                    </ul>
                  </div>
                  <div className="contact-social">
                    <h5>Follow Us on</h5>
                    <ul>
                      <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                      <li><a href="#"><i className="lni lni-twitter-original"></i></a></li>
                      <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                      <li><a href="#"><i className="lni lni-instagram"></i></a></li>
                      <li><a href="#"><i className="lni lni-behance-original"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-12">
                <div className="form-main">
                  <form className="form" method="post" action="assets/mail/mail.html">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <input name="name" type="text" placeholder="Your Name" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <input name="subject" type="text" placeholder="Your Subject" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <input name="email" type="email" placeholder="Your Email" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <input name="phone" type="text" placeholder="Your Phone" required />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group message">
                          <textarea name="message" placeholder="Your Message"></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group button">
                          <button type="submit" className="btn">Submit Message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="map-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="map-container">
                <iframe
                  title="Google Map"
                  width="100%"
                  height="400"
                  src="https://maps.google.com/maps?q=bangladesh%20lakshmipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="footer-widget">
                <div className="footer-logo">
                  <img className="logo1" src="assets/images/logo/logo.svg" alt="Logo" />
                </div>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="footer-widget">
                <h6 className="footer-title">Quick Links</h6>
                <ul className="footer-links">
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="portfolio.html">Portfolio</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="footer-widget">
                <h6 className="footer-title">Contact Info</h6>
                <ul className="footer-contact">
                  <li><i className="lni lni-phone"></i>+522 672-452-1120</li>
                  <li><i className="lni lni-envelope"></i><a href="mailto:example@example.com">example@example.com</a></li>
                  <li><i className="lni lni-map"></i>KA-62/1, New York</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
