import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="f-about single-footer">
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/logos/lmno.png" alt="Logo" />
                  </a>
                </div>
                <p>
                  QnsAI is a tool to generate question papers with the help of AI and NLP. We also have a
                  database to create mock question papers for competitive exams.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer f-link">
                <h3>Home</h3>
                <ul>
                  <li><a href="#overview">Overview</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#features">Features</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer f-link">
                <h3>Use Cases</h3>
                <ul>
                  <li><a href="#overview">Schools</a></li>
                  <li><a href="#overview">Students</a></li>
                  <li><a href="#overview">EdTech</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer f-link">
                <h3>Support</h3>
                <ul>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-12">
                <div className="left">
                  <p>
                    Copyright © QnsAI 2022
                    <a
                      href="//www.dmca.com/Protection/Status.aspx?ID=66185ecb-ffa9-4830-a815-476a603bd335"
                      title="DMCA.com Protection Status"
                      className="dmca-badge"
                    >
                      <img
                        src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-10.png?ID=66185ecb-ffa9-4830-a815-476a603bd335"
                        alt="DMCA.com Protection Status"
                      />
                    </a>
                    <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"></script>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
